import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { DashboardPreviewVisual } from "@/components/visuals/section-visuals";

const timeline = ["Discovery", "Blueprint", "Build", "Launch"];
const portalCards = [
  ["Project progress", "Milestones, approvals, and open questions in one view."],
  ["Documents", "Shared files, proposals, notes, and handover assets."],
  ["Support", "Clear requests, ownership, and response expectations."],
];

export function PortalPreviewSection() {
  return (
    <section id="portal" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Client portal preview"
          title="A secure command center clients can actually understand."
          description="A concept preview for projects, tasks, files, tickets, progress, and activity in one executive-grade workspace."
          align="center"
        />
        <div className="mt-14">
          <DashboardPreviewVisual />
        </div>
        <div className="glass-panel neon-border scanline mt-14 overflow-hidden rounded-[2.5rem] p-4 sm:p-6">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-5 sm:p-8">
            <div className="flex flex-col gap-4 border-b border-white/10 pb-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Portal / Concept interface</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">One system. One source of truth.</h3>
              </div>
              <span className="w-fit rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-xs font-medium text-cyan-100">
                Illustrative preview
              </span>
            </div>
            <div className="mt-8 grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5">
                <p className="text-sm font-semibold text-white">Client journey timeline</p>
                <div className="mt-7 grid gap-4 sm:grid-cols-4">
                  {timeline.map((item, index) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-300/10 text-xs font-semibold text-cyan-100">
                        {index + 1}
                      </span>
                      <p className="mt-5 font-semibold text-white">{item}</p>
                      <div className="mt-4 h-1.5 rounded-full bg-white/10">
                        <div className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-300" style={{ width: `${100 - index * 18}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-4">
                {portalCards.map(([label, note]) => (
                  <div key={label} className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5">
                    <p className="text-lg font-semibold text-white">{label}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
