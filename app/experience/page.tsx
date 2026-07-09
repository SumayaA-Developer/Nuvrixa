import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ArchitectureSection } from "@/components/sections/architecture-section";
import { AuditSection } from "@/components/sections/audit-section";
import { CapabilityGridSection } from "@/components/sections/capability-grid-section";
import { CtaSection } from "@/components/sections/cta-section";
import { DiscoveryJourneySection } from "@/components/sections/discovery-journey-section";
import { InteractiveHero } from "@/components/sections/interactive-hero";
import { ProcessSection } from "@/components/sections/process-section";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <SiteHeader />
      <InteractiveHero />
      <ArchitectureSection />
      <CapabilityGridSection />
      <ProcessSection />
      <AuditSection />
      <DiscoveryJourneySection />
      <CtaSection />
      <SiteFooter />
    </main>
  );
}
