import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/legal-page";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "POPIA Privacy Notice",
  description: `POPIA privacy notice for ${siteConfig.name}.`,
};

export default function PopiaPage() {
  return (
    <LegalPage
      eyebrow="POPIA"
      title="POPIA Privacy Notice"
      intro={`${siteConfig.legalName} respects privacy and processes personal information in line with South Africa's Protection of Personal Information Act where applicable.`}
      sections={[
        {
          title: "Purpose of Processing",
          body: "We process personal information to respond to enquiries, prepare automation audits, manage bookings, provide services, maintain business records, and improve our website and client experience.",
        },
        {
          title: "Information Processed",
          body: "This may include name, email address, company details, role, booking details, workflow notes, technical website data, and communications you submit to Nuvrixa.",
        },
        {
          title: "Your Rights",
          body: "You may request access to, correction of, or deletion of your personal information, subject to lawful retention requirements. Contact Nuvrixa using the email address listed on this website.",
        },
        {
          title: "Security",
          body: "We use reputable service providers and reasonable safeguards to protect submitted information. No online service can guarantee absolute security, but we aim to limit access to legitimate business needs.",
        },
      ]}
    />
  );
}
