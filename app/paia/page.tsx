import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/legal-page";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "PAIA Manual",
  description: `PAIA manual information for ${siteConfig.name}.`,
};

export default function PaiaPage() {
  return (
    <LegalPage
      eyebrow="PAIA"
      title="PAIA Manual"
      intro={`This page provides basic PAIA information for ${siteConfig.legalName}. A formal manual can be expanded as the company structure and record categories are finalized.`}
      sections={[
        {
          title: "Company Details",
          body: `${siteConfig.legalName} provides AI automation consultancy, workflow architecture, integration planning, dashboard strategy, and client experience system design.`,
        },
        {
          title: "Record Categories",
          body: "Records may include business administration documents, client communications, proposals, project notes, website enquiries, supplier records, financial records, and operational documentation.",
        },
        {
          title: "Request Process",
          body: "Requests for access to records should be submitted in writing to the contact email listed on this website. Requests may be subject to verification, lawful grounds for refusal, and applicable fees.",
        },
        {
          title: "Manual Updates",
          body: "This page may be updated as Nuvrixa finalizes its legal, operational, and compliance structure.",
        },
      ]}
    />
  );
}
