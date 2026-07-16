import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { integrationsConfig } from "@/lib/integrations";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your Nuvrixa AI Systems Audit request has been received.",
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 py-16 text-white">
      <Container className="relative">
        <div className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-300/15 blur-3xl" />
        <section className="relative mx-auto max-w-4xl rounded-[2.75rem] border border-cyan-300/20 bg-white/[0.04] p-8 text-center shadow-[0_0_100px_rgba(34,211,238,0.12)] sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-200">Request received</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">
            Your AI Systems Audit request is in motion.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-300">
            Thank you for reaching out to Nuvrixa. The next step is to choose a session time and prepare any notes about your current workflow, tools, and bottlenecks.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            {integrationsConfig.calBookingUrl ? (
              <a
                href={integrationsConfig.calBookingUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center justify-center rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                Book Free 30 Min Audit
              </a>
            ) : null}
            <Link
              href="/"
              className="focus-ring inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-200/45 hover:bg-cyan-300/10"
            >
              Back to Homepage
            </Link>
          </div>
        </section>
      </Container>
    </main>
  );
}
