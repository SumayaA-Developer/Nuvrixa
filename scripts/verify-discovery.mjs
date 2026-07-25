import { readFile } from "node:fs/promises";
import { randomUUID } from "node:crypto";

const baseUrl = process.env.VERIFY_BASE_URL || "http://localhost:3010";
const source = await readFile(new URL("../lib/business-discovery.ts", import.meta.url), "utf8");
const requiredKeys = [...source.matchAll(/\{key:"([^"]+)"[^}]*required:true/g)].map((match) => match[1]);
const answers = Object.fromEntries(requiredKeys.map((key) => [key, "Test answer"]));

Object.assign(answers, {
  fullName: "Test User",
  typedConfirmation: "  test   user  ",
  email: "test.user@example.com",
  departments: ["Sales"],
  departmentDetails: { Sales: { teamSize: "2", leader: "Test Lead", challenge: "Manual follow-up" } },
  processes: [{ name: "Test process", steps: "Start, review and complete" }],
  tools: ["Email"],
  toolDetails: { Email: { platform: "Email", purpose: "Communication" } },
  customerChannels: ["Email"],
  consent: ["0", "1", "2", "3", "4", "5", "6"],
});

if (process.argv.includes("--browser-fixture")) {
  console.log(Buffer.from(JSON.stringify({
    answers,
    step: 6,
    submissionId: randomUUID(),
    savedAt: new Date().toISOString(),
  })).toString("base64"));
  process.exit(0);
}

async function request(label, body, expectedStatus) {
  const response = await fetch(`${baseUrl}/api/business-discovery`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const result = await response.json();
  if (response.status !== expectedStatus) {
    throw new Error(`${label}: expected ${expectedStatus}, received ${response.status}: ${JSON.stringify(result)}`);
  }
  console.log(`PASS ${label}: ${response.status}`);
}

async function rateLimitedRequest(address) {
  return fetch(`${baseUrl}/api/business-discovery`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Forwarded-For": address },
    body: JSON.stringify({ submissionId: randomUUID(), answers }),
  });
}

await request("invalid submission id", { submissionId: "invalid", answers }, 400);
await request("honeypot rejection", { submissionId: randomUUID(), answers: { ...answers, websiteFax: "spam" } }, 202);
await request("complete valid payload without CRM token", { submissionId: randomUUID(), answers }, 503);

const oversizedResponse = await fetch(`${baseUrl}/api/business-discovery`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ submissionId: randomUUID(), answers: { oversized: "x".repeat(1_000_100) } }),
});
if (oversizedResponse.status !== 413) throw new Error(`payload limit: expected 413, received ${oversizedResponse.status}`);
console.log("PASS payload limit: 413");

const rateAddress = `198.51.100.${Math.floor(Math.random() * 200) + 1}`;
for (let attempt = 1; attempt <= 5; attempt += 1) {
  const response = await rateLimitedRequest(rateAddress);
  if (response.status !== 503) throw new Error(`rate-limit setup ${attempt}: expected 503, received ${response.status}`);
}
const limitedResponse = await rateLimitedRequest(rateAddress);
if (limitedResponse.status !== 429 || limitedResponse.headers.get("retry-after") !== "600") {
  throw new Error(`rate limit: expected 429 with Retry-After 600, received ${limitedResponse.status}`);
}
console.log("PASS rate limit: 429 with Retry-After 600");
