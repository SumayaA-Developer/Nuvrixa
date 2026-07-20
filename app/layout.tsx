import type { Metadata } from "next";
import Script from "next/script";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { integrationsConfig } from "@/lib/integrations";
import { siteConfig } from "@/lib/site";
import { AuditLinkRouter } from "@/components/conversion/audit-link-router";
import { GlobalFooter } from "@/components/layout/global-footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "Nuvrixa | Intelligent AI Automation Operating Systems",
    template: "%s | Nuvrixa",
  },
  description: siteConfig.description,
  keywords: [
    "Nuvrixa",
    "AI automation",
    "business automation",
    "AI audit",
    "workflow automation",
    "AI operating system",
    "automation consultancy",
    "South Africa AI consulting",
  ],
  authors: [{ name: "Nuvrixa" }],
  creator: "Nuvrixa",
  openGraph: {
    title: "Nuvrixa | Intelligent AI Automation Operating Systems",
    description:
      "Transform scattered operations into connected intelligent workflows with Nuvrixa.",
    url: siteConfig.domain,
    siteName: "Nuvrixa",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Nuvrixa intelligent AI automation operating systems preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuvrixa | Intelligent AI Automation Operating Systems",
    description:
      "Premium AI automation consultancy for connected operations, dashboards and client journeys.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <AuditLinkRouter />
        {children}
        <GlobalFooter />
        {integrationsConfig.hubSpotTrackingId ? (
          <Script
            id="hs-script-loader"
            src={`//js.hs-scripts.com/${integrationsConfig.hubSpotTrackingId}.js`}
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  );
}
