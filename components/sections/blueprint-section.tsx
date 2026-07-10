import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { BlueprintStoryVisual } from "@/components/visuals/section-visuals";

const blueprint = [
  ["Signal", "Inbound requests are scattered across multiple channels with no consistent qualification."],
  ["Blueprint", "Nuvrixa maps a safer intake route, AI-assisted summaries, owner-based escalation, and visible handovers."],
  ["Build", "The first implementation focuses on clear operational flow before custom software complexity."],
];

const comparison = [
  ["Before", "Manual follow-ups", "Spreadsheet status checks", "Unclear ownership"],
  ["After", "Routed next steps", "Shared progress visibility", "Human approval checkpoints"],
];

export function BlueprintSection() {
  return (
    <section id="blueprint" className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading
            eyebrow="Build blueprint"
            title="Case-study thinking without invented claims."
            description="The blueprint format shows how Nuvrixa diagnoses workflow friction and designs the automation path without fake metrics or unverified case results."
          />
          <BlueprintStoryVisual />
          <div className="showcase-frame rounded-[2.5rem] p-5 sm:p-7">
            <div className="grid gap-4 md:grid-cols-3">
              {blueprint.map(([title, detail], index) => (
                <div key={title} className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300/20 to-violet-500/20 text-sm font-semibold text-cyan-100">
                    0{index + 1}
                  </span>
                  <h3 className="mt-8 text-2xl font-semibold text-white">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {comparison.map(([state, first, second, third]) => (
                <div key={state} className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5">
                  <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">{state}</p>
                  {[first, second, third].map((item) => (
                    <p key={item} className="mt-4 rounded-2xl border border-white/10 bg-slate-950/70 p-3 text-sm text-slate-200">
                      {item}
                    </p>
                  ))}
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-400">
              Example workflow only. Actual outputs depend on discovery findings, available integrations, and client approval.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
