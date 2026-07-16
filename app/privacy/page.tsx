import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/legal-page";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}.`,
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy Policy"
      intro={`${siteConfig.legalName} collects only the information needed to respond to enquiries, prepare AI systems audits, manage bookings, and improve the website experience.`}
      sections={[
        {
          title: "Information We Collect",
          body: "We may collect contact details, company details, workflow notes, booking information, website analytics, and messages you choose to submit through Nuvrixa forms or email.",
        },
        {
          title: "How We Use Information",
          body: "We use submitted information to respond to enquiries, prepare discovery sessions, manage client communications, improve the website, and maintain basic business records.",
        },
        {
          title: "Third-Party Services",
          body: "Nuvrixa may use HubSpot for CRM and forms, Cal.com for bookings, Google Workspace for email, calendar, and documents, GitHub for source control, and Vercel for hosting.",
        },
        {
          title: "Data Sharing",
          body: "We do not sell personal information. Information may be processed by trusted service providers only where needed to operate the website, respond to enquiries, or deliver services.",
        },
        {
          title: "Your Choices",
          body: "You may request access, correction, or deletion of personal information by contacting Nuvrixa. Some information may need to be retained where required for legitimate business or legal reasons.",
        },
      ]}
    />
  );
}
