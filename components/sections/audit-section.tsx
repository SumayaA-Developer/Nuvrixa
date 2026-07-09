import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { auditItems } from "@/data/site-content";

export function AuditSection() {
  return (
    <section id="audit" className="py-24 sm:py-32">
      <Container>
        <div className="glass-panel grid gap-10 rounded-[2.5rem] p-6 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
          <div>
            <Eyebrow>AI Audit</Eyebrow>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Your Discovery Session becomes the starting point for a practical automation roadmap.
            </h2>
            <p className="mt-5 leading-8 text-slate-300">
              Phase 2 sets the visual language for this offer. The next phase will connect the booking flow, confirmation copy, and HubSpot-ready lead capture.
            </p>
            <Button href="mailto:hello@nuvrixa.com?subject=Nuvrixa%20Discovery%20Session" className="mt-8">
              Start with a Discovery Session
            </Button>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">Included in the audit</p>
            <div className="mt-8 space-y-4">
              {auditItems.map((item) => (
                <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <span className="text-sm text-slate-200">{item}</span>
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
