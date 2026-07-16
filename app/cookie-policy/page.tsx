import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/legal-page";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `Cookie policy for ${siteConfig.name}.`,
};

export default function CookiePolicyPage() {
  return (
    <LegalPage
      eyebrow="Cookies"
      title="Cookie Policy"
      intro={`${siteConfig.legalName} may use cookies and similar technologies to keep the website working, understand site performance, and improve enquiry flows.`}
      sections={[
        {
          title: "What Cookies Are",
          body: "Cookies are small files stored by your browser. They help websites remember basic preferences, understand visitor activity, and support embedded tools such as forms or booking widgets.",
        },
        {
          title: "How We Use Cookies",
          body: "Nuvrixa may use essential cookies for website functionality, analytics cookies for performance insights, and third-party cookies from tools such as HubSpot, Cal.com, Google Workspace, and Vercel where those services are enabled.",
        },
        {
          title: "Managing Cookies",
          body: "You can block or delete cookies in your browser settings. Some embedded forms, booking tools, or analytics features may not work as expected if cookies are disabled.",
        },
      ]}
    />
  );
}
