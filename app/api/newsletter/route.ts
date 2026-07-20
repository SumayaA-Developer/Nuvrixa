import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, consent } = await request.json();
    if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
    if (consent !== true) return NextResponse.json({ error: "Consent is required." }, { status: 400 });
    const token = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
    if (!token) return NextResponse.json({ error: "Newsletter automation is not configured." }, { status: 503 });
    const response = await fetch("https://api.hubapi.com/crm/v3/objects/contacts/batch/upsert", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ inputs: [{ id: email, idProperty: "email", properties: { email, hs_lead_status: "NEW", message: `Newsletter consent recorded via the Nuvrixa website on ${new Date().toISOString()}.` } }] }),
    });
    if (!response.ok) return NextResponse.json({ error: "We could not complete the subscription." }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch { return NextResponse.json({ error: "We could not process the subscription." }, { status: 500 }); }
}
