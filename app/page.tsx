import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AuditSection } from "@/components/sections/audit-section";
import { CtaSection } from "@/components/sections/cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { ProcessSection } from "@/components/sections/process-section";
import { SolutionsSection } from "@/components/sections/solutions-section";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <SiteHeader />
      <HeroSection />
      <ProblemSection />
      <SolutionsSection />
      <ProcessSection />
      <AuditSection />
      <CtaSection />
      <SiteFooter />
    </main>
  );
}
