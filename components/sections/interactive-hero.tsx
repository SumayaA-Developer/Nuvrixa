import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const orbitNodes = [
  { label: "Clients", angle: "left-[8%] top-[32%]" },
  { label: "Projects", angle: "left-[28%] top-[12%]" },
  { label: "CRM", angle: "right-[28%] top-[12%]" },
  { label: "Finance", angle: "right-[8%] top-[32%]" },
  { label: "Workflows", angle: "left-[15%] bottom-[22%]" },
  { label: "Support", angle: "right-[15%] bottom-[22%]" },
];

export function InteractiveHero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-10 sm:pt-16 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_55%_38%,rgba(124,58,237,0.28),transparent_28rem),radial-gradient(circle_at_78%_28%,rgba(8,184,228,0.2),transparent_24rem)]" />
      <Container className="relative">
        <div className="grid min-h-[calc(100vh-7rem)] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative z-10">
            <div className="mb-8 inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100">
              AI-powered business systems
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.065em] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
              Turn business chaos into one intelligent system.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Nuvrixa maps your operations, connects the tools you already use, and designs automation blueprints that make every enquiry, project, task and follow-up easier to control.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="#discovery">Start the Discovery</Button>
              <Button href="#architecture" variant="secondary">Explore the System</Button>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 text-xs text-slate-400 sm:text-sm">
              {[
                ["01", "Audit"],
                ["02", "Blueprint"],
                ["03", "Automate"],
              ].map(([number, label]) => (
                <a key={label} href={`#${label.toLowerCase()}`} className="group rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-cyan-300/10">
                  <span className="block text-xl font-semibold text-white">{number}</span>
                  <span className="mt-1 block">{label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="relative min-h-[34rem] rounded-[2.5rem] border border-white/10 bg-slate-950/40 p-6 shadow-2xl shadow-cyan-950/30 backdrop-blur">
            <div className="absolute inset-8 rounded-full border border-cyan-300/20" />
            <div className="absolute inset-16 rounded-full border border-violet-400/20" />
            <div className="absolute inset-24 rounded-full border border-cyan-300/10" />
            <div className="absolute left-1/2 top-1/2 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-300/35 bg-slate-950 shadow-[0_0_80px_rgba(34,211,238,0.22)]">
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 via-blue-500 to-violet-600 text-3xl font-black text-white shadow-[0_0_45px_rgba(124,58,237,0.5)]">N</div>
                <p className="text-sm font-semibold tracking-[0.24em] text-white">NUVRIXA</p>
                <p className="mt-1 text-xs text-cyan-100">Central Operating System</p>
              </div>
            </div>
            {orbitNodes.map((node) => (
              <a key={node.label} href="#architecture" className={`absolute ${node.angle} rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white shadow-xl shadow-slate-950/40 transition hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-cyan-300/10`}>
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
                {node.label}
              </a>
            ))}
            <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm font-semibold text-white">Interactive blueprint preview</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">Every section below is designed as a clickable architecture path, not a flat brochure.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
