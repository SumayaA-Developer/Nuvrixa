import { Container } from "@/components/ui/container";
import { GlowCard } from "@/components/ui/glow-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { solutions } from "@/data/site-content";

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Solutions"
          title="AI automation that fits the business you already have."
          description="The first version of Nuvrixa is designed around audits, strategy, and tool-connected workflows — not a custom backend."
          align="center"
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {solutions.map((solution) => (
            <GlowCard key={solution.title} className="min-h-80">
              <div className="mb-12 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-200/20 bg-cyan-300/10 text-cyan-100">
                ✦
              </div>
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">{solution.title}</h3>
              <p className="mt-5 leading-7 text-slate-300">{solution.description}</p>
            </GlowCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
