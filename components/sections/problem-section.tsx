import { Container } from "@/components/ui/container";
import { GlowCard } from "@/components/ui/glow-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { problems } from "@/data/site-content";

export function ProblemSection() {
  return (
    <section id="problems" className="py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            eyebrow="What we solve"
            title="Most businesses do not need more software. They need cleaner systems."
            description="Nuvrixa focuses on the real operational friction that slows teams down before recommending any AI or automation layer."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {problems.map((problem) => (
              <GlowCard key={problem} className="min-h-44">
                <span className="mb-8 block h-2 w-16 rounded-full bg-cyan-300" />
                <p className="text-lg font-medium leading-7 text-white">{problem}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
