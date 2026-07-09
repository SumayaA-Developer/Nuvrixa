import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const layers = [
  { title: "Capture", detail: "Forms, email, WhatsApp, calls and meeting notes enter one mapped journey." },
  { title: "Process", detail: "Tasks, reminders, documents and client data move through clear operating rules." },
  { title: "Visibility", detail: "Dashboards, alerts and handover views show what needs attention next." },
  { title: "Improve", detail: "AI insights expose repetitive work, bottlenecks and automation opportunities." },
];

export function ArchitectureSection() {
  return (
    <section id="architecture" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="System architecture"
          title="A website that feels like stepping inside the Nuvrixa operating system."
          description="The design direction is no longer a basic page. It is a visual journey through how Nuvrixa brings scattered operations into one connected workflow architecture."
          align="center"
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-panel rounded-[2.5rem] p-6 sm:p-8">
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Before Nuvrixa</p>
              <div className="mt-8 space-y-4">
                {['Unread emails', 'Manual spreadsheet updates', 'Missed follow-ups', 'Disconnected client records', 'No single source of truth'].map((item) => (
                  <div key={item} className="flex items-center gap-4 rounded-2xl border border-red-400/20 bg-red-500/5 p-4 text-sm text-slate-200">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="glass-panel rounded-[2.5rem] p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {layers.map((layer, index) => (
                <a key={layer.title} href="#discovery" className="group rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/10">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300/20 to-violet-500/20 text-sm font-semibold text-cyan-100">0{index + 1}</span>
                  <h3 className="mt-8 text-2xl font-semibold text-white">{layer.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{layer.detail}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
