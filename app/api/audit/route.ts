import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const required = ["company", "industry", "numberofemployees", "country", "jobtitle", "automation_goal", "biggest_challenge", "timeframe", "firstname", "lastname", "email", "phone", "consent"];
    if (required.some((key) => !data[key])) return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
    if (!Array.isArray(data.improvement_areas) || data.improvement_areas.length === 0) return NextResponse.json({ error: "Select at least one area you want to improve." }, { status: 400 });
    const email = String(data.email).trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
    const token = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
    if (!token) return NextResponse.json({ error: "Audit automation is not configured." }, { status: 503 });
    const areas = Array.isArray(data.improvement_areas) ? data.improvement_areas.join(", ") : data.improvement_areas || "Not supplied";
    const message = [`Automation goal: ${data.automation_goal}`, `Biggest challenge: ${data.biggest_challenge}`, `Improvement areas: ${areas}`, `Current tools: ${data.current_tools || "Not supplied"}`, `Timeframe: ${data.timeframe}`, `Estimated budget (USD): ${data.budget || "Not supplied"}`, `Company size: ${data.numberofemployees}`, `Country: ${data.country}`, `Website: ${data.website || "Not supplied"}`, `Phone: ${data.phone}`].join("\n\n");
    const response = await fetch("https://api.hubapi.com/crm/v3/objects/contacts/batch/upsert", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ inputs: [{ id: email, idProperty: "email", properties: { email, firstname: String(data.firstname).trim(), lastname: String(data.lastname).trim(), company: String(data.company).trim(), jobtitle: String(data.jobtitle).trim(), industry: String(data.industry).trim(), phone: String(data.phone).trim(), website: String(data.website || "").trim(), message, hs_lead_status: "NEW" } }] }),
    });
    if (!response.ok) {
      console.error("HubSpot audit submission failed", await response.text());
      return NextResponse.json({ error: "We could not save your audit request." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "We could not process your audit request." }, { status: 500 });
  }
}
