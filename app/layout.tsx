import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nuvrixa.com"),
  title: {
    default: "Nuvrixa | Intelligent AI Automation Operating Systems",
    template: "%s | Nuvrixa",
  },
  description:
    "Nuvrixa designs premium AI automation operating systems for modern service businesses: workflow architecture, integrations, dashboards, and client experience systems.",
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
    url: "https://nuvrixa.com",
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
      <body>{children}</body>
    </html>
  );
}
