export const phasePlan = [
  {
    phase: "Phase 1",
    name: "Foundation",
    status: "complete",
    items: [
      "Next.js App Router foundation",
      "TypeScript configuration",
      "Tailwind CSS v4 global theme",
      "Nuvrixa brand colour tokens",
      "SEO metadata foundation",
      "Robots and sitemap routes",
      "Vercel-ready setup",
    ],
  },
  {
    phase: "Phase 2",
    name: "Design System",
    status: "complete",
    items: [
      "Premium dark/aqua visual language",
      "Reusable button, container, heading, and card components",
      "Responsive header and footer",
      "Homepage section architecture",
      "Content data structure",
      "AI audit visual section",
      "CTA design system",
    ],
  },
  {
    phase: "Phase 3",
    name: "Booking and Lead Capture",
    status: "next",
    items: [
      "Cal.com booking flow",
      "Discovery session confirmation page",
      "HubSpot-ready lead capture",
      "Email and CTA wiring",
    ],
  },
] as const;
