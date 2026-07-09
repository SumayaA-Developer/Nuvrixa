# Phase 2 — Design System

## Status

Phase 2 is implemented in the repository and ready for local audit.

## Completed

- Replaced the temporary Phase 1 homepage with a premium landing page structure
- Added reusable UI primitives:
  - Button
  - Container
  - Eyebrow
  - SectionHeading
  - GlowCard
- Added layout components:
  - SiteHeader
  - SiteFooter
- Added core website sections:
  - Hero
  - Problems
  - Solutions
  - Process
  - AI Audit
  - CTA
- Added centralised content data
- Upgraded global styling with:
  - Dark premium background
  - Aqua/cyan Nuvrixa accents
  - Subtle grid texture
  - Glass panels
  - Accessibility focus ring
  - Reduced-motion awareness

## Design Direction

The site should feel like a premium AI automation consultancy:

- Dark, spacious, clean, and modern
- Strong typography
- Aqua/cyan accents
- Clear conversion path
- Business-first messaging
- No backend dependency

## Local Audit Commands

Run:

```bash
npm run lint
npm run build
npm run dev
```

Open:

```bash
http://localhost:3000
```

## Manual Visual Audit

Check:

- Header remains readable on scroll
- Hero section looks balanced on desktop
- Cards have consistent spacing
- CTA buttons are clear
- Sections stack correctly on mobile
- No horizontal scroll
- Text is readable at all screen sizes

## Next Phase

Phase 3: Booking and Lead Capture

This will include:

- Cal.com booking integration
- Confirmation page copy
- HubSpot-ready lead capture
- Discovery Session workflow wiring
