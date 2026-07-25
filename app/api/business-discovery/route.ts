import { createHash, randomUUID } from "crypto";
import { NextResponse } from "next/server";
import { consentStatements, discoverySections, requiredKeysForSection } from "@/lib/business-discovery";

type AnswerValue = string | string[] | Record<string, unknown> | Array<Record<string, unknown>>;
type Answers = Record<string, AnswerValue>;
const noteAssociation = { associationCategory: "HUBSPOT_DEFINED", associationTypeId: 202 };
const MAX_BODY_BYTES = 1_000_000;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT = 5;
const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const attempts = new Map<string, number[]>();
const completed = new Map<string, { reference: string; receipt: string; expiresAt: number }>();

function cleanText(value: unknown, max = 12000) { return typeof value === "string" ? value.trim().slice(0, max) : ""; }
function normalizeConfirmationName(value: unknown) { return cleanText(value, 200).normalize("NFKC").replace(/\s+/g, " ").toLocaleLowerCase(); }
function valuePresent(value: unknown) {
  if (Array.isArray(value)) return value.length > 0 && value.some((item) => typeof item === "string" ? Boolean(item.trim()) : Boolean(item));
  return typeof value === "string" ? Boolean(value.trim()) : Boolean(value);
}
function requestAddress(request: Request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}
function isRateLimited(address: string) {
  const now = Date.now();
  const recent = (attempts.get(address) || []).filter((time) => now - time < RATE_WINDOW_MS);
  recent.push(now);
  attempts.set(address, recent);
  return recent.length > RATE_LIMIT;
}
function cleanCaches() {
  const now = Date.now();
  for (const [key, value] of completed) if (value.expiresAt <= now) completed.delete(key);
  for (const [key, values] of attempts) {
    const recent = values.filter((time) => now - time < RATE_WINDOW_MS);
    if (recent.length) attempts.set(key, recent); else attempts.delete(key);
  }
}
function validationError(answers: Answers) {
  const missing = discoverySections.slice(0, -1).flatMap((section) => requiredKeysForSection(section)).filter((key) => !valuePresent(answers[key]));
  const processes = Array.isArray(answers.processes) ? answers.processes : [];
  if (!processes.length || processes.some((process) => typeof process !== "object" || !cleanText(process.name) || !cleanText(process.steps))) missing.push("process details");
  if (missing.length) return `Required discovery information is missing: ${[...new Set(missing)].join(", ")}.`;
  if (!EMAIL_PATTERN.test(cleanText(answers.email, 254))) return "Enter a valid business email address.";
  const consent = Array.isArray(answers.consent) ? answers.consent : [];
  if (consent.length !== consentStatements.length) return "Please accept every required confirmation.";
  if (normalizeConfirmationName(answers.typedConfirmation) !== normalizeConfirmationName(answers.fullName)) return "The typed full-name confirmation must match your name.";
  return "";
}
function escapeHtml(value: string) { return value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] || c)); }
function formatValue(value: unknown): string {
  if (value == null || value === "") return "Not supplied";
  if (Array.isArray(value)) return value.map((item, index) => typeof item === "object" ? `Item ${index + 1}: ${formatValue(item)}` : cleanText(item, 2000)).filter(Boolean).join(" | ");
  if (typeof value === "object") return Object.entries(value as Record<string, unknown>).map(([key, item]) => `${key}: ${formatValue(item)}`).join("; ");
  return cleanText(value);
}
function buildNote(answers: Answers, reference: string, submittedAt: string) {
  const rows = Object.entries(answers).filter(([key]) => !["consent", "typedConfirmation"].includes(key)).map(([key, value]) => `<p><strong>${escapeHtml(key)}</strong><br>${escapeHtml(formatValue(value))}</p>`).join("");
  return `<h2>Nuvrixa Business Discovery</h2><p><strong>Reference:</strong> ${escapeHtml(reference)}<br><strong>Submitted:</strong> ${escapeHtml(submittedAt)}</p>${rows}`;
}
function chunkNote(body: string, limit = 58000) {
  if (body.length <= limit) return [body];
  const chunks: string[] = []; let remaining = body;
  while (remaining.length) { let split = Math.min(limit, remaining.length); if (split < remaining.length) split = Math.max(remaining.lastIndexOf("</p>", split) + 4, 1000); chunks.push(remaining.slice(0, split)); remaining = remaining.slice(split); }
  return chunks;
}
async function hubSpot(path: string, token: string, init: RequestInit) { return fetch(`https://api.hubapi.com${path}`, { ...init, headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json", ...(init.headers || {}) }, cache: "no-store" }); }

export async function POST(request: Request) {
  try {
    const declaredSize = Number(request.headers.get("content-length") || "0");
    if (declaredSize > MAX_BODY_BYTES) return NextResponse.json({ error: "This discovery submission is too large." }, { status: 413 });
    cleanCaches();
    const payload = await request.json() as { answers?: Answers; submissionId?: string };
    const answers = payload.answers;
    const submissionId = cleanText(payload.submissionId, 64);
    if (!answers || typeof answers !== "object" || !UUID_PATTERN.test(submissionId)) return NextResponse.json({ error: "The discovery request is invalid. Refresh the page and try again." }, { status: 400 });
    if (cleanText(answers.websiteFax)) return NextResponse.json({ ok: true }, { status: 202 });
    const prior = completed.get(submissionId);
    if (prior) return NextResponse.json({ ok: true, reference: prior.reference, receipt: prior.receipt, duplicate: true });
    if (isRateLimited(requestAddress(request))) return NextResponse.json({ error: "Too many submission attempts. Please wait ten minutes and try again." }, { status: 429, headers: { "Retry-After": "600" } });
    const invalid = validationError(answers);
    if (invalid) return NextResponse.json({ error: invalid }, { status: 400 });
    const token = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
    if (!token) return NextResponse.json({ error: "Secure discovery storage is not configured. Your saved answers remain on this device." }, { status: 503 });
    const submittedAt = new Date().toISOString();
    const reference = `NUV-${submittedAt.slice(0, 10).replaceAll("-", "")}-${randomUUID().slice(0, 8).toUpperCase()}`;
    const nameParts = cleanText(answers.fullName, 160).split(/\s+/); const firstname = nameParts.shift() || ""; const lastname = nameParts.join(" "); const email = cleanText(answers.email, 254).toLowerCase();
    const contactResult = await hubSpot("/crm/v3/objects/contacts/batch/upsert", token, { method: "POST", body: JSON.stringify({ inputs: [{ id: email, idProperty: "email", properties: { email, firstname, lastname, company: cleanText(answers.registeredName, 250), jobtitle: cleanText(answers.jobTitle, 200), phone: cleanText(answers.phone, 80), website: cleanText(answers.website, 500), industry: cleanText(answers.industry, 200), message: `Business Discovery ${reference}. Primary automation goal: ${cleanText(answers.automationGoals, 4000)}`, hs_lead_status: "NEW" } }] }) });
    if (!contactResult.ok) { console.error("HubSpot discovery contact upsert failed", contactResult.status, await contactResult.text()); return NextResponse.json({ error: "We could not save your discovery securely. Your answers remain saved on this device." }, { status: 502 }); }
    const contactPayload = await contactResult.json() as { results?: Array<{ id?: string }> }; const contactId = contactPayload.results?.[0]?.id;
    if (!contactId) return NextResponse.json({ error: "Your contact record could not be confirmed. Please try again." }, { status: 502 });
    const chunks = chunkNote(buildNote(answers, reference, submittedAt));
    for (const [index, chunk] of chunks.entries()) {
      const noteResult = await hubSpot("/crm/v3/objects/notes", token, { method: "POST", body: JSON.stringify({ properties: { hs_timestamp: submittedAt, hs_note_body: chunks.length > 1 ? `<p><strong>Part ${index + 1} of ${chunks.length}</strong></p>${chunk}` : chunk }, associations: [{ to: { id: contactId }, types: [noteAssociation] }] }) });
      if (!noteResult.ok) { console.error("HubSpot discovery note creation failed", noteResult.status, await noteResult.text()); return NextResponse.json({ error: `Contact saved as ${reference}, but the full assessment could not be attached. Please contact Nuvrixa with this reference.` }, { status: 502 }); }
    }
    const receipt = createHash("sha256").update(`${email}:${submittedAt}:${reference}`).digest("hex").slice(0, 12);
    completed.set(submissionId, { reference, receipt, expiresAt: Date.now() + 24 * 60 * 60 * 1000 });
    return NextResponse.json({ ok: true, reference, receipt });
  } catch (error) { console.error("Business discovery submission failed", error); return NextResponse.json({ error: "We could not process your discovery. Your saved answers remain on this device." }, { status: 500 }); }
}
