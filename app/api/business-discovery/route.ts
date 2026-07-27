import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
import { discoverySections } from "@/lib/business-discovery";

type Answers = Record<string, string | string[]>;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const UUID = /^[0-9a-f-]{36}$/i;
const MAX_TOTAL_FILE_SIZE = 4_000_000;
const MAX_BODY_BYTES = 5_000_000;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT = 5;
const noteAssociation = { associationCategory: "HUBSPOT_DEFINED", associationTypeId: 202 };
const attempts = new Map<string, number[]>();
const completed = new Map<string, { reference: string; uploadedFiles: number; expiresAt: number }>();

function clean(value: unknown, max = 12000) { return typeof value === "string" ? value.trim().slice(0, max) : ""; }
function present(value: unknown) { return Array.isArray(value) ? value.length > 0 : Boolean(clean(value)); }
function escapeHtml(value: string) { return value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character] || character)); }
function display(value: unknown) { return Array.isArray(value) ? value.join(", ") : clean(value) || "Not supplied"; }
async function hubSpot(path: string, token: string, init: RequestInit) {
  return fetch(`https://api.hubapi.com${path}`, { ...init, headers: { Authorization: `Bearer ${token}`, ...(init.headers || {}) }, cache: "no-store" });
}
function address(request: Request) { return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown"; }
function rateLimited(key: string) {
  const now = Date.now();
  const recent = (attempts.get(key) || []).filter((time) => now - time < RATE_WINDOW_MS);
  recent.push(now);
  attempts.set(key, recent);
  return recent.length > RATE_LIMIT;
}

export async function POST(request: Request) {
  try {
    if (Number(request.headers.get("content-length") || "0") > MAX_BODY_BYTES) return NextResponse.json({ error: "This submission is too large." }, { status: 413 });
    const form = await request.formData();
    const payloadText = form.get("payload");
    if (typeof payloadText !== "string") return NextResponse.json({ error: "The business discovery request is invalid." }, { status: 400 });
    const payload = JSON.parse(payloadText) as { answers?: Answers; submissionId?: string };
    const answers = payload.answers;
    if (!answers || !UUID.test(payload.submissionId || "")) return NextResponse.json({ error: "Refresh the page and try again." }, { status: 400 });
    if (clean(answers.websiteFax)) return NextResponse.json({ ok: true }, { status: 202 });
    const previous = completed.get(payload.submissionId || "");
    if (previous && previous.expiresAt > Date.now()) return NextResponse.json({ ok: true, reference: previous.reference, uploadedFiles: previous.uploadedFiles, duplicate: true });
    if (rateLimited(address(request))) return NextResponse.json({ error: "Too many submission attempts. Please wait ten minutes and try again." }, { status: 429, headers: { "Retry-After": "600" } });
    const required = discoverySections.flatMap((section) => section.fields.filter((field) => field.required)).filter((field) => !present(answers[field.key]));
    if (required.length) return NextResponse.json({ error: `Required information is missing: ${required.map((field) => field.label).join(", ")}.` }, { status: 400 });
    if (!EMAIL.test(clean(answers.email, 254))) return NextResponse.json({ error: "Enter a valid business email address." }, { status: 400 });
    const files = form.getAll("files").filter((entry): entry is File => entry instanceof File && entry.size > 0);
    if (files.reduce((total, file) => total + file.size, 0) > MAX_TOTAL_FILE_SIZE) return NextResponse.json({ error: "Supporting files must total less than 4 MB." }, { status: 413 });
    const token = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
    if (!token) return NextResponse.json({ error: "Secure CRM storage is not configured." }, { status: 503 });
    const submittedAt = new Date().toISOString();
    const reference = `NUV-DISC-${submittedAt.slice(0, 10).replaceAll("-", "")}-${randomUUID().slice(0, 8).toUpperCase()}`;
    const names = clean(answers.fullName, 160).split(/\s+/); const firstname = names.shift() || ""; const lastname = names.join(" "); const email = clean(answers.email, 254).toLowerCase();
    const contactResponse = await hubSpot("/crm/v3/objects/contacts/batch/upsert", token, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ inputs: [{ id: email, idProperty: "email", properties: { email, firstname, lastname, company: clean(answers.businessName, 250), jobtitle: clean(answers.position, 200), phone: clean(answers.phone, 80), website: clean(answers.website, 500), industry: clean(answers.industry, 200), message: `Business Discovery ${reference}: ${clean(answers.oneProblem, 1500)}`, hs_lead_status: "NEW" } }] }) });
    if (!contactResponse.ok) { console.error("Business discovery contact upsert failed", contactResponse.status, await contactResponse.text()); return NextResponse.json({ error: "We could not save your business discovery securely." }, { status: 502 }); }
    const contactId = ((await contactResponse.json()) as { results?: Array<{ id?: string }> }).results?.[0]?.id;
    if (!contactId) return NextResponse.json({ error: "The CRM contact could not be confirmed." }, { status: 502 });
    const uploaded: string[] = [];
    for (const file of files) {
      const upload = new FormData();
      upload.append("file", file, file.name);
      upload.append("folderPath", `/Nuvrixa/Business Discovery/${reference}`);
      upload.append("options", JSON.stringify({ access: "PRIVATE", overwrite: false, duplicateValidationStrategy: "NONE", duplicateValidationScope: "EXACT_FOLDER" }));
      const uploadResponse = await hubSpot("/files/v3/files", token, { method: "POST", body: upload });
      if (uploadResponse.ok) {
        const result = await uploadResponse.json() as { id?: string; name?: string };
        uploaded.push(`${result.name || file.name} (HubSpot file ID ${result.id || "unknown"})`);
      } else console.error("Business discovery file upload failed", uploadResponse.status, await uploadResponse.text());
    }
    const rows = discoverySections.map((section) => `<h3>${escapeHtml(section.id + ". " + section.title)}</h3>${section.fields.map((field) => `<p><strong>${escapeHtml(field.label)}</strong><br>${escapeHtml(display(answers[field.key]))}</p>`).join("")}`).join("");
    const fileRows = uploaded.length ? `<h3>Supporting files</h3><p>${uploaded.map(escapeHtml).join("<br>")}</p>` : "<h3>Supporting files</h3><p>No files uploaded.</p>";
    const note = `<h2>Nuvrixa Business Discovery</h2><p><strong>Reference:</strong> ${escapeHtml(reference)}<br><strong>Submitted:</strong> ${escapeHtml(submittedAt)}</p>${rows}${fileRows}`;
    const noteResponse = await hubSpot("/crm/v3/objects/notes", token, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ properties: { hs_timestamp: submittedAt, hs_note_body: note.slice(0, 65000) }, associations: [{ to: { id: contactId }, types: [noteAssociation] }] }) });
    if (!noteResponse.ok) { console.error("Business discovery note creation failed", noteResponse.status, await noteResponse.text()); return NextResponse.json({ error: `Contact saved as ${reference}, but the full discovery brief could not be attached.` }, { status: 502 }); }
    completed.set(payload.submissionId || "", { reference, uploadedFiles: uploaded.length, expiresAt: Date.now() + 24 * 60 * 60 * 1000 });
    return NextResponse.json({ ok: true, reference, uploadedFiles: uploaded.length, fileUploadWarning: files.length > uploaded.length });
  } catch (error) {
    console.error("Business discovery failed", error);
    return NextResponse.json({ error: "We could not process the business discovery. Your answers remain saved." }, { status: 500 });
  }
}
