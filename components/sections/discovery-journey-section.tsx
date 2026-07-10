import { AuditRequestButton } from "@/components/conversion/audit-request-modal";
import { Container } from "@/components/ui/container";
import { DiscoveryWorkflowVisual } from "@/components/visuals/section-visuals";

const journey = [
  ["01", "Share the workflow", "Tell us where leads, tasks, documents, approvals and client updates currently live."],
  ["02", "Map the system", "We identify the key routes, friction points, automation candidates and human checkpoints."],
  ["03", "Leave with a build path", "You get a focused next-step roadmap instead of vague AI recommendations."],
];

export function DiscoveryJourneySection() {
  return (
    <section id="discovery" className="py-20 sm:py-28">
      <Container>
        <div className="rounded-[2.75rem] border border-cyan-300/20 bg-gradient-to-br from-slate-900 via-slate-950 to-violet-950/30 p-6 sm:p-10">
          <div className="mb-10">
            <DiscoveryWorkflowVisual />
          </div>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-200">Discovery journey</p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-6xl">
                Start with a guided journey, not a cold form.
              </h2>
              <p className="mt-6 max-w-xl leading-8 text-slate-300">
                The first step is intentionally simple: share the workflow, book the call and leave with a sharper path toward automation.
              </p>
              <AuditRequestButton className="mt-8">
                Book AI Systems Audit
              </AuditRequestButton>
            </div>
            <div className="grid gap-4">
              {journey.map(([number, title, detail]) => (
                <AuditRequestButton
                  key={title}
                  variant="secondary"
                  className="group w-full items-start justify-start rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 text-left transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/10"
                >
                  <div className="flex items-start gap-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-sm font-bold text-slate-950">
                      {number}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-300">{detail}</p>
                    </div>
                  </div>
                </AuditRequestButton>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
