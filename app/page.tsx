import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AuditSection } from "@/components/sections/audit-section";
import { BlueprintSection } from "@/components/sections/blueprint-section";
import { CtaSection } from "@/components/sections/cta-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroSection } from "@/components/sections/hero-section";
import { IntegrationsSection } from "@/components/sections/integrations-section";
import { PortalPreviewSection } from "@/components/sections/portal-preview-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { ProcessSection } from "@/components/sections/process-section";
import { SolutionsSection } from "@/components/sections/solutions-section";
import { ArchitectureSection } from "@/components/sections/architecture-section";
import { AudienceSection } from "@/components/sections/audience-section";
import { CapabilityGridSection } from "@/components/sections/capability-grid-section";
import { DiscoveryJourneySection } from "@/components/sections/discovery-journey-section";
import { AuditRequestModal } from "@/components/conversion/audit-request-modal";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <SiteHeader />
      <AuditRequestModal />
      <HeroSection />
      <ArchitectureSection />
      <AudienceSection />
      <ProblemSection />
      <SolutionsSection />
      <CapabilityGridSection />
      <IntegrationsSection />
      <ProcessSection />
      <PortalPreviewSection />
      <BlueprintSection />
      <AuditSection />
      <DiscoveryJourneySection />
      <FaqSection />
      <CtaSection />
      <SiteFooter />
    </main>
  );
}
