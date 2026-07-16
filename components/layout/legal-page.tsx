import Link from "next/link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: Array<{
    title: string;
    body: string;
  }>;
};

export function LegalPage({ eyebrow, title, intro, sections }: LegalPageProps) {
  return (
    <main className="min-h-screen bg-slate-950 py-10 text-white sm:py-16">
      <Container>
        <Link href="/" className="focus-ring inline-flex items-center gap-3 rounded-full text-sm font-semibold text-cyan-100">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 via-blue-500 to-cyan-300 text-base font-black tracking-[-0.08em] text-white">
            N
          </span>
          Back to Nuvrixa
        </Link>

        <article className="mt-10 max-w-4xl rounded-[2.5rem] border border-white/10 bg-white/[0.035] p-6 shadow-[0_0_80px_rgba(34,211,238,0.08)] sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">{eyebrow}</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">{title}</h1>
          <p className="mt-5 text-sm text-slate-400">Last updated: July 16, 2026</p>
          <p className="mt-8 leading-8 text-slate-300">{intro}</p>

          <div className="mt-10 space-y-8">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
                <p className="mt-3 leading-8 text-slate-300">{section.body}</p>
              </section>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5 text-sm leading-7 text-cyan-50">
            For questions about this page, contact{" "}
            <a className="font-semibold underline decoration-cyan-200/40 underline-offset-4" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            .
          </div>
        </article>
      </Container>
    </main>
  );
}
