import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { NuvrixaOsVisual } from "@/components/visuals/nuvrixa-os-visual";
import { EnergyBackdrop } from "@/components/visuals/section-visuals";
import { AuditRequestButton } from "@/components/conversion/audit-request-modal";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-12 sm:pt-24 lg:pb-28">
      <EnergyBackdrop />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/92 to-slate-950/54" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-transparent to-slate-950" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-cyan-300/12 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-24 h-[32rem] w-[32rem] rounded-full bg-violet-600/16 blur-3xl" />
      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <Eyebrow>AI automation consultancy</Eyebrow>
          <h1 className="mt-5 max-w-5xl text-4xl font-semibold tracking-[-0.03em] text-white sm:mt-6 sm:text-6xl lg:text-6xl xl:text-7xl">
            Turn business chaos into one <span className="text-gradient-brand">intelligent system.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:mt-7 sm:text-lg sm:leading-8">
            Nuvrixa designs premium AI-powered systems, portals and automations that streamline operations, empower your team and drive visible business outcomes.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <AuditRequestButton>
              Book AI Systems Audit
            </AuditRequestButton>
            <Button href="#architecture" variant="secondary">
              Explore the System
            </Button>
          </div>
          <div className="mt-8 grid max-w-2xl grid-cols-1 gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 sm:mt-10 sm:grid-cols-3 sm:pt-8">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <strong className="block text-2xl text-white">Zero</strong> Tool-stack rebuild
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <strong className="block text-2xl text-white">12+</strong> Tool pathways
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <strong className="block text-2xl text-white">AI</strong> Governed by humans
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-cyan-300/18 via-violet-500/16 to-blue-500/12 blur-2xl" />
          <NuvrixaOsVisual />
        </div>
      </Container>
    </section>
  );
}
