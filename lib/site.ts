export const siteConfig = {
  name: "Nuvrixa",
  domain: process.env.NEXT_PUBLIC_SITE_URL || "https://nuvrixa.com",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@nuvrixa.com",
  legalName: process.env.NEXT_PUBLIC_LEGAL_NAME || "Nuvrixa",
  description:
    "Nuvrixa designs premium AI automation operating systems for modern service businesses: workflow architecture, integrations, dashboards, and client experience systems.",
  navigation: [
    { label: "Chaos", href: "#problems" },
    { label: "System", href: "#solutions" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Integrations", href: "#integrations" },
    { label: "Portal", href: "#portal" },
    { label: "Blueprint", href: "#blueprint" },
  ],
  legalLinks: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
} as const;
