import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const journey = [
  ["01", "Tell us about your operations", "Share your current tools, bottlenecks and workflow pain points."],
  ["02", "Select a discovery call", "Choose a time to review the workflow blueprint together."],
  ["03", "Receive your roadmap", "Get a practical automation path with clear next actions."],
];

export function DiscoveryJourneySection() {
  return (
    <section id="discovery" className="py-20 sm:py-28">
      <Container>
        <div className="rounded-[2.75rem] border border-cyan-300/20 bg-gradient-to-br from-slate-900 via-slate-950 to-violet-950/30 p-6 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-200">Initiate your discovery</p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-6xl">Every click should feel like moving through a system.</h2>
              <p className="mt-6 max-w-xl leading-8 text-slate-300">This section sets the direction for the Cal.com and HubSpot flow later: a guided visual journey, not a basic contact form.</p>
              <Button href="mailto:hello@nuvrixa.com?subject=Nuvrixa%20Discovery%20Session" className="mt-8">Book the Discovery Session</Button>
            </div>
            <div className="grid gap-4">
              {journey.map(([number, title, detail]) => (
                <a key={title} href="mailto:hello@nuvrixa.com?subject=Nuvrixa%20Discovery%20Session" className="group rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/10">
                  <div className="flex items-start gap-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-sm font-bold text-slate-950">{number}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-300">{detail}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
