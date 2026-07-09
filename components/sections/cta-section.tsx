import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function CtaSection() {
  return (
    <section className="pb-24 pt-10 sm:pb-32">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-cyan-200/20 bg-cyan-300 px-6 py-14 text-slate-950 sm:px-10 lg:px-14">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/35 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em]">Ready when you are</p>
              <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Let Nuvrixa help you find the workflows worth automating first.
              </h2>
            </div>
            <Button
              href="mailto:hello@nuvrixa.com?subject=Nuvrixa%20Discovery%20Session"
              variant="secondary"
              className="border-slate-950/20 bg-slate-950 text-white hover:bg-slate-900"
            >
              Book Discovery Session
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
