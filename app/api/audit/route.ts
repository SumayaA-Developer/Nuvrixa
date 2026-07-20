import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const required = ["company", "industry", "numberofemployees", "country", "jobtitle", "automation_goal", "biggest_challenge", "timeframe", "firstname", "lastname", "email", "phone"];
    if (required.some((key) => !data[key])) return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
    const token = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
    if (!token) return NextResponse.json({ error: "Audit automation is not configured." }, { status: 503 });
    const areas = Array.isArray(data.improvement_areas) ? data.improvement_areas.join(", ") : data.improvement_areas || "Not supplied";
    const message = [`Automation goal: ${data.automation_goal}`, `Biggest challenge: ${data.biggest_challenge}`, `Improvement areas: ${areas}`, `Current tools: ${data.current_tools || "Not supplied"}`, `Timeframe: ${data.timeframe}`, `Estimated budget (USD): ${data.budget || "Not supplied"}`, `Company size: ${data.numberofemployees}`, `Country: ${data.country}`, `Website: ${data.website || "Not supplied"}`, `Phone: ${data.phone}`].join("\n\n");
    const response = await fetch("https://api.hubapi.com/crm/v3/objects/contacts/batch/upsert", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ inputs: [{ id: data.email, idProperty: "email", properties: { email: data.email, firstname: data.firstname, lastname: data.lastname, company: data.company, jobtitle: data.jobtitle, industry: data.industry, phone: data.phone, website: data.website || "", message, hs_lead_status: "NEW" } }] }),
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
