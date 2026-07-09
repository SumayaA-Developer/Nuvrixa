import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nuvrixa.com"),
  title: {
    default: "Nuvrixa | AI Automation for Modern Businesses",
    template: "%s | Nuvrixa",
  },
  description:
    "Nuvrixa helps businesses identify automation opportunities, streamline workflows, and prepare for practical AI implementation.",
  keywords: [
    "Nuvrixa",
    "AI automation",
    "business automation",
    "AI audit",
    "workflow automation",
    "South Africa AI consulting",
  ],
  authors: [{ name: "Nuvrixa" }],
  creator: "Nuvrixa",
  openGraph: {
    title: "Nuvrixa | AI Automation for Modern Businesses",
    description:
      "Discover practical AI and automation opportunities for your business with Nuvrixa.",
    url: "https://nuvrixa.com",
    siteName: "Nuvrixa",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuvrixa | AI Automation for Modern Businesses",
    description:
      "Practical AI automation audits and workflows for growing businesses.",
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
