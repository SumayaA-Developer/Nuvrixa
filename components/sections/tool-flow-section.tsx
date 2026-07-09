import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const items = ["Gmail", "Drive", "HubSpot", "Calendar", "Meet", "Reports"];

export function ToolFlowSection() {
  return (
    <section id="tool-flow" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Connected flow"
          title="The tools you already use become one guided journey."
          description="This section creates the connected-system feeling from your references without adding a backend."
          align="center"
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {items.map((item) => (
            <a key={item} href="#discovery" className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/10">
              <span className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-100">●</span>
              <h3 className="text-2xl font-semibold text-white">{item}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">Connected into the Nuvrixa discovery and automation workflow.</p>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
