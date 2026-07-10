import Link from "next/link";
import { Container } from "@/components/ui/container";
import { AuditRequestButton } from "@/components/conversion/audit-request-modal";
import { navItems } from "@/data/site-content";

export function SiteHeader() {
  return (
    <header className="sticky top-4 z-50">
      <Container>
        <div className="neon-border flex items-center justify-between rounded-full border border-white/10 bg-slate-950/75 px-4 py-3 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
          <Link href="/" className="focus-ring inline-flex items-center gap-3 rounded-full px-2 text-lg font-semibold tracking-[0.2em] text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 via-blue-500 to-cyan-300 text-base font-black tracking-[-0.08em] text-white shadow-[0_0_28px_rgba(34,211,238,0.35)]">
              N
            </span>
            <span><span className="text-cyan-200">NUV</span>RIXA</span>
          </Link>
          <nav className="hidden items-center gap-5 text-sm text-slate-300 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
          <AuditRequestButton className="px-4 py-2 max-sm:!hidden">
            Book Audit
          </AuditRequestButton>
          <details className="relative lg:hidden">
            <summary className="focus-ring flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-cyan-100">
              <span className="sr-only">Open navigation</span>
              <span aria-hidden="true" className="flex flex-col gap-1">
                <span className="block h-px w-4 bg-cyan-100" />
                <span className="block h-px w-4 bg-cyan-100" />
                <span className="block h-px w-4 bg-cyan-100" />
              </span>
            </summary>
            <div className="absolute right-0 top-12 w-64 rounded-3xl border border-cyan-300/20 bg-slate-950/95 p-3 shadow-2xl shadow-slate-950/60 backdrop-blur-xl">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="block rounded-2xl px-4 py-3 text-sm text-slate-200 transition hover:bg-cyan-300/10 hover:text-white">
                  {item.label}
                </a>
              ))}
              <AuditRequestButton className="mt-2 w-full rounded-2xl px-4 py-3">
                Book Audit
              </AuditRequestButton>
            </div>
          </details>
        </div>
      </Container>
    </header>
  );
}
