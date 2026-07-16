import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

const footerColumns = [
  {
    title: "Solutions",
    links: [
      ["AI Automation", "#capabilities"],
      ["Workflow Automation", "#solutions"],
      ["System Integration", "#integrations"],
      ["AI Agents", "#architecture"],
      ["Business Intelligence", "#portal"],
    ],
  },
  {
    title: "Services",
    links: [
      ["AI Strategy & Consulting", "#audit"],
      ["Automation Development", "#process"],
      ["Integrations", "#integrations"],
      ["Training & Enablement", "#discovery"],
      ["Support", "#faq"],
    ],
  },
  {
    title: "Industries",
    links: [
      ["Professional Services", "#audience"],
      ["Logistics & Transport", "#audience"],
      ["Healthcare", "#audience"],
      ["Retail & E-commerce", "#audience"],
      ["Manufacturing", "#audience"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About Nuvrixa", "#top"],
      ["Our Approach", "#process"],
      ["Case Studies", "#blueprint"],
      ["Resources", "#faq"],
      ["Book Audit", "#discovery"],
    ],
  },
] as const;

const socialItems = [
  { label: "LinkedIn", short: "in" },
  { label: "Instagram", short: "ig" },
  { label: "YouTube", short: "yt" },
] as const;

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path d="M4 6h16v12H4V6Zm1.5 1.6 6.5 5 6.5-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 12h16M12 4c2.2 2.3 3.2 5 3.2 8s-1 5.7-3.2 8M12 4c-2.2 2.3-3.2 5-3.2 8s1 5.7 3.2 8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-9 w-9" aria-hidden="true">
      <path d="M12 3 19 6v5.5c0 4.2-2.7 7.2-7 9-4.3-1.8-7-4.8-7-9V6l7-3Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="m8.8 12.1 2.1 2.1 4.4-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SiteFooter() {
  const siteUrlLabel = siteConfig.domain.replace(/^https?:\/\//, "");
  const newsletterHref = `mailto:${siteConfig.email}?subject=Nuvrixa%20insights%20signup`;

  return (
    <footer className="relative overflow-hidden border-t border-cyan-300/15 bg-[#020817]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(34,211,238,0.13),transparent_28rem),radial-gradient(circle_at_86%_16%,rgba(79,70,229,0.12),transparent_30rem)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />

      <Container className="relative py-16 sm:py-20">
        <div className="grid gap-12 xl:grid-cols-[1.05fr_2.2fr_0.9fr]">
          <div>
            <a href="#top" className="focus-ring inline-flex items-center gap-5 rounded-3xl">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 via-blue-500 to-violet-600 text-5xl font-black tracking-[-0.12em] text-white shadow-[0_0_40px_rgba(34,211,238,0.28)]">
                N
              </span>
              <span>
                <span className="block text-3xl font-semibold tracking-[0.34em] text-white">NUVRIXA</span>
                <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.36em] text-cyan-300">
                  AI-powered. Outcome-driven.
                </span>
              </span>
            </a>

            <p className="mt-8 max-w-sm text-base leading-8 text-slate-300">
              We help businesses eliminate chaos, automate operations and build intelligent systems that drive measurable outcomes.
            </p>

            <div className="mt-8 space-y-4 text-base text-slate-200">
              <a href={`mailto:${siteConfig.email}`} className="group flex items-center gap-4 transition hover:text-cyan-200">
                <span className="text-cyan-300"><MailIcon /></span>
                {siteConfig.email}
              </a>
              <a href={siteConfig.domain} className="group flex items-center gap-4 transition hover:text-cyan-200">
                <span className="text-cyan-300"><GlobeIcon /></span>
                {siteUrlLabel}
              </a>
            </div>

            <div className="mt-9 flex gap-4">
              {socialItems.map((item) => (
                <span
                  key={item.label}
                  title={`${item.label} link needed`}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/45 bg-cyan-300/5 text-xs font-bold uppercase tracking-[0.08em] text-white shadow-[0_0_24px_rgba(34,211,238,0.12)]"
                >
                  {item.short}
                </span>
              ))}
            </div>
          </div>

          <nav className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h2 className="text-sm font-semibold uppercase tracking-[0.32em] text-white">{column.title}</h2>
                <span className="mt-5 block h-px w-10 bg-cyan-300" />
                <div className="mt-8 space-y-5">
                  {column.links.map(([label, href]) => (
                    <a key={label} href={href} className="block text-base text-slate-300 transition hover:text-cyan-200">
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          <div className="border-cyan-300/15 xl:border-l xl:pl-10">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/50 bg-cyan-300/8 text-cyan-200 shadow-[0_0_34px_rgba(34,211,238,0.18)]">
              <MailIcon />
            </div>
            <h2 className="mt-7 text-2xl font-semibold text-white">Stay ahead.</h2>
            <p className="mt-5 max-w-xs text-base leading-8 text-slate-300">
              Get insights, automation tips and strategies straight to your inbox.
            </p>
            <form action={newsletterHref} className="mt-7 flex overflow-hidden rounded-2xl border border-white/15 bg-slate-950/70">
              <label className="sr-only" htmlFor="footer-email">Email address</label>
              <input
                id="footer-email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 bg-transparent px-4 py-4 text-sm text-white outline-none placeholder:text-slate-500"
              />
              <button type="submit" className="flex w-16 items-center justify-center bg-cyan-300 text-slate-950 transition hover:bg-cyan-200" aria-label="Subscribe">
                <ArrowIcon />
              </button>
            </form>
            <p className="mt-6 text-sm leading-6 text-slate-400">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </Container>

      <div className="relative border-t border-cyan-300/15">
        <Container className="flex flex-col gap-8 py-9 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p>
              Copyright {new Date().getFullYear()} <span className="font-semibold text-cyan-300">{siteConfig.legalName}</span>
            </p>
            <p className="mt-1">All rights reserved.</p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 lg:justify-center">
            {siteConfig.legalLinks.map((item, index) => (
              <span key={item.href} className="inline-flex items-center gap-6">
                <a href={item.href} className="transition hover:text-white">
                  {item.label}
                </a>
                {index < siteConfig.legalLinks.length - 1 ? <span className="text-cyan-300">•</span> : null}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 border-cyan-300/20 text-cyan-200 lg:border-l lg:pl-8">
            <ShieldIcon />
            <div className="text-xs font-semibold uppercase tracking-[0.35em] text-white">
              POPIA
              <span className="mt-1 block tracking-[0.22em] text-cyan-300">Compliant</span>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
