# Nuvrixa Business Discovery

## Storage and CRM mapping

The client journey is intentionally limited to seven focused steps and is designed for an 8–12 minute completion time. It captures the minimum information needed to prepare a useful prototype: business context, goals and pain points, one priority workflow, current tools and data controls, prototype requirements, and realistic budget/timing.

`POST /api/business-discovery` validates all required sections server-side, upserts the HubSpot contact by email, and stores the complete structured assessment as associated HubSpot notes. Every accepted response receives a server-generated `NUV-YYYYMMDD-XXXXXXXX` reference and server-generated ISO timestamp. Core contact/company details map to the contact; the full assessment remains in notes.

Each browser draft receives a UUID submission key. Successful submissions are cached for 24 hours in a warm server instance so immediate retries return the same reference instead of creating another note. The route also includes a honeypot, a one-megabyte request limit, email validation and a best-effort limit of five attempts per IP address in ten minutes. These in-memory controls are useful protection but are not durable across every serverless instance; add a shared rate-limit/idempotency store if submission volume or abuse risk increases.

Required server-only environment variable: `HUBSPOT_PRIVATE_APP_TOKEN`. The private app requires contacts and notes read/write scopes. Never prefix this variable with `NEXT_PUBLIC_` or commit its value.

## File uploads

The interface is deliberately disabled because this repository has no private object storage, malware scanning, retention rules, or signed upload URLs. No file is transmitted. Enable it only after adding private Blob/S3/Supabase Storage, server-generated short-lived upload tokens, type/size limits, malware scanning, retention/deletion controls, and private references in HubSpot.

## Testing

Run `npm run dev`, open `/business-discovery`, and test validation, Back/Continue, refresh restoration, Review/Edit, success, and failure. With HubSpot deliberately disabled on a local test server, run `VERIFY_BASE_URL=http://localhost:3010 node scripts/verify-discovery.mjs` (PowerShell: `$env:VERIFY_BASE_URL='http://localhost:3010'; node scripts\verify-discovery.mjs`) to verify malformed IDs, honeypot handling, complete-payload validation, the payload limit and rate limiting. Without the token, a complete valid submission must return 503 and retain the draft. A live CRM test creates an external record and must be explicitly approved; label it as a test and delete it afterwards.

## Export, deletion, and question updates

Export through HubSpot contacts and activities/notes, or the HubSpot CRM API. Delete associated notes, then delete or anonymise the contact according to Nuvrixa's retention policy. Use the reference for requests. Update questions in `lib/business-discovery.ts`; conditional UI is in `app/business-discovery/discovery-form.tsx`; keep API validation aligned with required fields.
