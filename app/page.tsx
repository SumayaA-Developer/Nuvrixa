import Link from "next/link";

const foundationItems = [
  "Frontend-only Next.js website",
  "Nuvrixa dark/aqua brand foundation",
  "SEO metadata ready",
  "Vercel deployment ready",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden px-6 py-8 sm:px-10 lg:px-16">
      <section className="mx-auto flex max-w-7xl flex-col gap-16 py-10 lg:min-h-screen lg:justify-center">
        <nav className="flex items-center justify-between rounded-full border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            Nuvrixa
          </Link>
          <a
            href="mailto:hello@nuvrixa.com"
            className="focus-ring rounded-full border border-cyan-300/30 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/10"
          >
            Contact
          </a>
        </nav>

        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
              Phase 1 Foundation Complete
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              Practical AI automation for businesses ready to work smarter.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Nuvrixa helps businesses identify bottlenecks, map better workflows,
              and prepare for AI-powered operations without needing a custom backend.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:hello@nuvrixa.com?subject=Nuvrixa%20Discovery%20Session"
                className="focus-ring rounded-full bg-cyan-300 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                Book a Discovery Session
              </a>
              <a
                href="#foundation"
                className="focus-ring rounded-full border border-white/15 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View foundation
              </a>
            </div>
          </div>

          <div className="glass-panel relative rounded-[2rem] p-6">
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-cyan-300/20 blur-3xl" />
            <div className="relative rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">
                Nuvrixa System
              </p>
              <div className="mt-8 space-y-4" id="foundation">
                {foundationItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
                    <span className="text-sm text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl bg-gradient-to-br from-cyan-300/20 to-teal-300/10 p-5">
                <p className="text-sm leading-6 text-slate-200">
                  This homepage is a temporary Phase 1 shell. Phase 2 will turn it
                  into the full premium Nuvrixa landing page inspired by modern AI
                  agency websites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
