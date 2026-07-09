import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { navItems } from "@/data/site-content";

export function SiteHeader() {
  return (
    <header className="sticky top-4 z-50">
      <Container>
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-slate-950/70 px-4 py-3 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
          <Link href="/" className="focus-ring rounded-full px-2 text-lg font-semibold tracking-[0.2em] text-white">
            NUVRIXA
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
          <Button href="mailto:hello@nuvrixa.com?subject=Nuvrixa%20Discovery%20Session" className="px-4 py-2">
            Book Call
          </Button>
        </div>
      </Container>
    </header>
  );
}
