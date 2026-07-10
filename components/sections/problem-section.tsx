import { Container } from "@/components/ui/container";
import { GlowCard } from "@/components/ui/glow-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProblemChaosVisual } from "@/components/visuals/section-visuals";
import { problems } from "@/data/site-content";

export function ProblemSection() {
  return (
    <section id="problems" className="py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            eyebrow="Before Nuvrixa"
            title="Operational chaos looks small until it becomes the whole day."
            description="Most teams are not failing because they lack effort. They are fighting invisible workflow debt, disconnected tools and decisions trapped in human memory."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {problems.map((problem, index) => (
              <GlowCard key={problem} className="min-h-44">
                <span className="mb-8 flex h-10 w-10 items-center justify-center rounded-full border border-red-300/30 bg-red-500/10 text-sm font-semibold text-red-100">
                  {index + 1}
                </span>
                <p className="text-lg font-medium leading-7 text-white">{problem}</p>
              </GlowCard>
            ))}
          </div>
        </div>
        <div className="mt-14">
          <ProblemChaosVisual />
        </div>
      </Container>
    </section>
  );
}
