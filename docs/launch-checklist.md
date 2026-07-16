# Nuvrixa Launch Checklist

## Required Before Public Launch

- Import `SumayaA-Developer/Nuvrixa` into Vercel.
- Add production environment variables from `.env.example`.
- Confirm `nuvrixa.co.za` as the canonical domain and point DNS to Vercel.
- Confirm `hello@nuvrixa.co.za` is active for public enquiries.
- Create or select the HubSpot audit form and add its form ID.
- Confirm the Cal.com Free 30 Min Automation Audit booking URL is active.
- Confirm the public contact email.
- Review the Privacy Policy and Terms pages for legal accuracy.

## Recommended Before Public Launch

- Add HubSpot tracking ID.
- Add Vercel Analytics or another analytics tool.
- Add social profile links if Nuvrixa has active profiles.
- Add a Google Drive folder URL only if it is safe for prospects or clients to access.
- Test the full audit request flow on the production deployment.
- Test the site on mobile after deployment.

## Post-Launch Checks

- Submit a HubSpot test form and confirm the contact appears in HubSpot.
- Book a test Cal.com session and confirm it appears in Google Calendar.
- Confirm Vercel deployment is attached to GitHub auto-deploys.
- Confirm `robots.txt`, `sitemap.xml`, `/privacy`, `/terms`, and `/thank-you` load.
