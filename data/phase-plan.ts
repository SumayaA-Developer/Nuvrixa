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
    status: "next",
    items: [
      "Full component styling rules",
      "Button variants",
      "Cards and panels",
      "Section layouts",
      "Animation rules",
    ],
  },
] as const;
