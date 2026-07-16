import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/legal-page";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${siteConfig.name}.`,
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="Terms of Service"
      intro={`These terms describe the basic conditions for using the ${siteConfig.name} website and requesting information about Nuvrixa services.`}
      sections={[
        {
          title: "Website Use",
          body: "The website is provided for general information about Nuvrixa services. You agree not to misuse the website, interfere with its operation, or submit misleading information.",
        },
        {
          title: "Service Information",
          body: "Website content describes potential services and outcomes, but does not create a binding proposal, guarantee, or client relationship until a separate agreement is accepted.",
        },
        {
          title: "Consultation Requests",
          body: "Submitting an audit request or booking a call does not guarantee availability, acceptance of work, or a specific result. Nuvrixa may decline enquiries that are not a fit.",
        },
        {
          title: "Intellectual Property",
          body: "The Nuvrixa name, website design, copy, graphics, and interface concepts belong to Nuvrixa unless otherwise stated. You may not copy or reuse them without permission.",
        },
        {
          title: "Limitation",
          body: "The website is provided as-is. Nuvrixa is not responsible for indirect losses arising from use of the website or reliance on general information published here.",
        },
      ]}
    />
  );
}
