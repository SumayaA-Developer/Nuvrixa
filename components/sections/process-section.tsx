import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProcessPipelineVisual } from "@/components/visuals/section-visuals";
import { processSteps } from "@/data/site-content";

export function ProcessSection() {
  return (
    <section id="process" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Workflow process"
          title="From messy operations to launchable automation in four moves."
          description="Every engagement starts by understanding the real workflow before deciding what AI should draft, route, escalate or leave to a person."
        />
        <ProcessPipelineVisual />
        <div className="mt-14 grid gap-4 lg:grid-cols-4">
          {processSteps.map((item) => (
            <div
              key={item.step}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/10"
            >
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
