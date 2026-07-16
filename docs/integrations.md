# Nuvrixa Integration Setup

The website is wired to stay frontend-only while connecting to the live business stack.

## GitHub

Repository remote:

```text
https://github.com/SumayaA-Developer/Nuvrixa.git
```

Use GitHub as the source of truth for Vercel deployments.

## Vercel

Team:

```text
Sumaya Arumugam's projects
team_ZYNoTZpTMpY1McOG6q14Vfve
```

Add these public environment variables in Vercel once the project exists:

```text
NEXT_PUBLIC_HUBSPOT_PORTAL_ID=148852199
NEXT_PUBLIC_HUBSPOT_REGION=eu1
NEXT_PUBLIC_HUBSPOT_AUDIT_FORM_ID=
NEXT_PUBLIC_HUBSPOT_TRACKING_ID=
NEXT_PUBLIC_CAL_BOOKING_URL=https://cal.com/nuvrixa-y3tgnz/free-ai-automation-discovery-session
NEXT_PUBLIC_GOOGLE_DRIVE_URL=
```

## HubSpot

Connected account:

```text
admin@nuvrixa.co.za
Portal ID: 148852199
Region: eu1
```

Create or choose a HubSpot form for the AI Systems Audit, then paste the form ID into:

```text
NEXT_PUBLIC_HUBSPOT_AUDIT_FORM_ID
```

When that value is present, the audit modal embeds the HubSpot form and submissions flow directly into HubSpot.

Add the HubSpot tracking code ID to:

```text
NEXT_PUBLIC_HUBSPOT_TRACKING_ID
```

This loads the HubSpot tracking script globally.

## Cal.com

The Free 30 Min Automation Audit booking URL is:

```text
https://cal.com/nuvrixa-y3tgnz/free-ai-automation-discovery-session
```

Set it in `NEXT_PUBLIC_CAL_BOOKING_URL` if you need to override the default later. After a HubSpot form submission or email fallback, the modal shows the Cal.com booking action.

## Google Workspace

Use Google Workspace for email, calendar, and Drive. If you want a client-facing Drive folder link shown in the website setup status, add:

```text
NEXT_PUBLIC_GOOGLE_DRIVE_URL
```

Keep private Drive folders and client files out of source code.
