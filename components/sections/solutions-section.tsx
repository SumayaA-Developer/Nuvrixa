import { Container } from "@/components/ui/container";
import { GlowCard } from "@/components/ui/glow-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { SolutionFlowVisual } from "@/components/visuals/section-visuals";
import { solutions } from "@/data/site-content";

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="After Nuvrixa"
          title="Connected intelligent automation after Nuvrixa."
          description="The goal is not a louder tool stack. It is a calm operating layer where every input, task and client moment has a route."
          align="center"
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {solutions.map((solution) => (
            <GlowCard key={solution.title} className="min-h-80">
              <div className="mb-12 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-200/20 bg-cyan-300/10 text-sm font-semibold text-cyan-100">
                NX
              </div>
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">{solution.title}</h3>
              <p className="mt-5 leading-7 text-slate-300">{solution.description}</p>
            </GlowCard>
          ))}
        </div>
        <div className="mt-8">
          <SolutionFlowVisual />
        </div>
      </Container>
    </section>
  );
}
