import { Container } from "@/components/ui/container";
import { CapabilityConstellation } from "@/components/visuals/section-visuals";
import { capabilities } from "@/data/site-content";

export function CapabilityGridSection() {
  return (
    <section id="capabilities" className="py-20 sm:py-28">
      <Container>
        <div className="rounded-[2.75rem] border border-cyan-300/20 bg-gradient-to-br from-slate-900/90 via-slate-950 to-blue-950/40 p-6 shadow-[0_0_120px_rgba(34,211,238,0.1)] sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-200">Core capabilities grid</p>
              <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.045em] text-white sm:text-6xl">
                Smart solutions. Real business movement.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-300">
              Premium automation consulting across strategy, workflow design, integration, portal UX and launch enablement.
            </p>
          </div>
          <CapabilityConstellation />
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map(([title, detail]) => (
              <a
                key={title}
                href="#discovery"
                className="group min-h-56 rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-sm font-semibold text-cyan-100">
                  NX
                </div>
                <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em] text-white">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{detail}</p>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
