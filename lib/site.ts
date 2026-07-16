export const siteConfig = {
  name: "Nuvrixa",
  domain: process.env.NEXT_PUBLIC_SITE_URL || "https://nuvrixa.co.za",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@nuvrixa.co.za",
  legalName: process.env.NEXT_PUBLIC_LEGAL_NAME || "Nuvrixa Technologies (Pty) Ltd.",
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
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "POPIA Privacy Notice", href: "/popia" },
    { label: "PAIA Manual", href: "/paia" },
  ],
} as const;
