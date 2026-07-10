import { AuditRequestButton } from "@/components/conversion/audit-request-modal";
import { Container } from "@/components/ui/container";
import { TransformationCtaVisual } from "@/components/visuals/section-visuals";

export function CtaSection() {
  return (
    <section className="pb-24 pt-10 sm:pb-32">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-cyan-200/20 bg-gradient-to-br from-cyan-300 via-blue-300 to-violet-300 px-6 py-14 text-slate-950 shadow-[0_0_90px_rgba(34,211,238,0.18)] sm:px-10 lg:px-14">
          <TransformationCtaVisual />
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/35 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em]">Ready when you are</p>
              <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Let Nuvrixa design the operating layer your business can actually use.
              </h2>
            </div>
            <AuditRequestButton variant="dark">
              Book AI Systems Audit
            </AuditRequestButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
