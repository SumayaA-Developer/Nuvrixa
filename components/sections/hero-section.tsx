import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-20 sm:pt-28 lg:pb-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-cyan-300/12 blur-3xl" />
      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.06fr_0.94fr]">
        <div>
          <Eyebrow>AI automation consulting</Eyebrow>
          <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            Turn scattered business processes into intelligent workflows.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Nuvrixa helps businesses audit their operations, identify AI automation opportunities, and connect their existing tools into smoother client and internal workflows.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="mailto:hello@nuvrixa.com?subject=Nuvrixa%20Discovery%20Session">
              Book a Discovery Session
            </Button>
            <Button href="#audit" variant="secondary">
              See the AI Audit
            </Button>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/10 pt-8 text-sm text-slate-400">
            <div><strong className="block text-2xl text-white">0</strong>Backend required</div>
            <div><strong className="block text-2xl text-white">4</strong>Step audit flow</div>
            <div><strong className="block text-2xl text-white">AI</strong>Practical, not hype</div>
          </div>
        </div>

        <div className="glass-panel relative rounded-[2.5rem] p-4 sm:p-6">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Workflow Map</p>
              <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">Live Blueprint</span>
            </div>
            <div className="mt-8 space-y-4">
              {[
                "Enquiry captured",
                "Discovery session booked",
                "Confirmation sent",
                "Audit workflow prepared",
                "Follow-up system triggered",
              ].map((item, index) => (
                <div key={item} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-300/10 text-sm font-semibold text-cyan-100">
                    {index + 1}
                  </span>
                  <span className="text-sm text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
