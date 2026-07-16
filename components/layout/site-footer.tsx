import { Container } from "@/components/ui/container";
import { navItems } from "@/data/site-content";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-12">
      <Container className="grid gap-8 text-sm text-slate-400 lg:grid-cols-[1fr_auto] lg:items-start">
        <div>
          <p className="inline-flex items-center gap-3 text-lg font-semibold tracking-[0.2em] text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 via-blue-500 to-cyan-300 text-base font-black tracking-[-0.08em] text-white shadow-[0_0_28px_rgba(34,211,238,0.35)]">
              N
            </span>
            <span><span className="text-cyan-200">NUV</span>RIXA</span>
          </p>
          <p className="mt-4 max-w-xl leading-7">
            AI automation consultancy for connected operating systems, client workflows and premium business visibility.
          </p>
          <p className="mt-6">Copyright {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap gap-5 lg:justify-end">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
          {siteConfig.legalLinks.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
          <a href={`mailto:${siteConfig.email}`} className="transition hover:text-white">
            {siteConfig.email}
          </a>
          <a href="#top" className="transition hover:text-white">
            Back to top
          </a>
        </div>
      </Container>
    </footer>
  );
}
