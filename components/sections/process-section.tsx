import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/data/site-content";

export function ProcessSection() {
  return (
    <section id="process" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Process"
          title="A clear path from confusion to automation clarity."
          description="Every engagement starts with understanding the actual workflow before deciding what should be automated."
        />
        <div className="mt-14 grid gap-4 lg:grid-cols-4">
          {processSteps.map((item) => (
            <div key={item.step} className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
              <p className="text-sm font-semibold text-cyan-200">{item.step}</p>
              <h3 className="mt-8 text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
