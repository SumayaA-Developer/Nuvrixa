import type { ReactNode } from "react";

import { integrationsConfig } from "@/lib/integrations";
import { siteConfig } from "@/lib/site";

const navItems = ["Features", "Solutions", "Pricing", "Docs", "About"];

const features = [
  {
    icon: "</>",
    title: "AI-Powered Insights",
    body: "Get intelligent recommendations and automate repetitive tasks with AI.",
  },
  {
    icon: "CL",
    title: "Cloud-Native Platform",
    body: "Built for scalability, reliability, and performance on the cloud.",
  },
  {
    icon: "UP",
    title: "Fast Deployments",
    body: "Deploy your applications in seconds with zero downtime.",
  },
  {
    icon: "SH",
    title: "Enterprise Security",
    body: "Your data is protected with enterprise-grade security and compliance.",
  },
];

const footerColumns = [
  {
    title: "Product",
    links: ["Features", "Solutions", "Pricing", "Changelog", "Roadmap"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Guides", "API Reference", "Blog", "Support"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Privacy Policy", "Terms of Service", "Contact"],
  },
];

const trusted = ["Acme Corp", "Cloudify", "DevStack", "innovera", "StackNova", "UpScale"];

function NuvrixaMark({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizeClass = size === "lg" ? "h-11 w-11 text-3xl" : size === "sm" ? "h-9 w-9 text-2xl" : "h-10 w-10 text-2xl";

  return (
    <span className={`${sizeClass} flex items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 via-blue-500 to-cyan-400 font-black tracking-[-0.14em] text-white shadow-[0_0_34px_rgba(124,58,237,0.32)]`}>
      N
    </span>
  );
}

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-xs font-semibold text-violet-200 shadow-[0_0_28px_rgba(124,58,237,0.14)]">
      <span className="text-violet-300">+</span>
      {children}
    </span>
  );
}

function DashboardMockup() {
  const sideItems = ["Overview", "Projects", "Analytics", "Deployments", "Integrations", "Settings"];
  const deployments = ["nuvrixa-web", "nuvrixa-api", "nuvrixa-worker", "nuvrixa-dashboard"];

  return (
    <div className="relative rounded-[1.7rem] border border-blue-400/20 bg-[#07111f]/90 p-2 shadow-[0_30px_100px_rgba(37,99,235,0.22)]">
      <div className="absolute -inset-3 rounded-[2rem] border border-violet-500/10" />
      <div className="relative grid overflow-hidden rounded-[1.35rem] border border-white/8 bg-[#050d19] lg:grid-cols-[170px_1fr]">
        <aside className="border-b border-white/8 bg-[#050d19]/80 p-5 lg:border-b-0 lg:border-r">
          <div className="flex items-center gap-2">
            <NuvrixaMark size="sm" />
            <span className="text-sm font-semibold text-white">Nuvrixa</span>
          </div>
          <div className="mt-7 space-y-2">
            {sideItems.map((item, index) => (
              <div key={item} className={`rounded-lg px-3 py-2 text-xs ${index === 0 ? "bg-violet-500/15 text-violet-100" : "text-slate-500"}`}>
                <span className="mr-2 text-violet-300">o</span>
                {item}
              </div>
            ))}
          </div>
          <div className="mt-40 hidden text-xs text-slate-500 lg:block">Team Workspace</div>
        </aside>

        <section className="p-5">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-lg font-semibold text-white">Overview</h2>
            <div className="flex items-center gap-3">
              <div className="hidden h-8 w-44 rounded-lg bg-white/[0.055] px-3 text-xs leading-8 text-slate-500 sm:block">Search...</div>
              <span className="h-8 w-8 rounded-full bg-white/[0.055]" />
              <span className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-100 to-pink-300" />
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-4">
            {[
              ["Total Projects", "24", "12%"],
              ["Deployments", "156", "8%"],
              ["API Requests", "2.4M", "34%"],
              ["Uptime", "99.99%", "0.01%"],
            ].map(([label, value, delta]) => (
              <div key={label} className="rounded-xl border border-white/7 bg-white/[0.035] p-4">
                <p className="text-[0.65rem] text-slate-500">{label}</p>
                <p className="mt-2 text-xl font-semibold text-white">{value}</p>
                <p className="mt-2 text-[0.65rem] text-emerald-400">Up {delta} this month</p>
              </div>
            ))}
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-[1.4fr_0.8fr]">
            <div className="rounded-xl border border-white/7 bg-white/[0.035] p-5">
              <div className="flex justify-between">
                <p className="text-sm font-semibold text-white">Performance</p>
                <span className="rounded-md bg-white/[0.055] px-2 py-1 text-[0.65rem] text-slate-400">This Week</span>
              </div>
              <div className="relative mt-6 h-40">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:100%_32px]" />
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 420 160" aria-hidden="true">
                  <path d="M0 88 C38 120 58 90 84 55 C120 12 145 128 190 88 C235 48 238 122 282 72 C323 24 342 28 372 84 C390 116 410 68 420 58" fill="none" stroke="url(#line)" strokeWidth="4" strokeLinecap="round" />
                  <path d="M0 88 C38 120 58 90 84 55 C120 12 145 128 190 88 C235 48 238 122 282 72 C323 24 342 28 372 84 C390 116 410 68 420 58 L420 160 L0 160Z" fill="url(#area)" />
                  <defs>
                    <linearGradient id="line" x1="0" x2="420" y1="0" y2="0">
                      <stop stopColor="#8b5cf6" />
                      <stop offset="1" stopColor="#3b82f6" />
                    </linearGradient>
                    <linearGradient id="area" x1="0" x2="0" y1="60" y2="160">
                      <stop stopColor="#8b5cf6" stopOpacity=".22" />
                      <stop offset="1" stopColor="#8b5cf6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            <div className="rounded-xl border border-white/7 bg-white/[0.035] p-5">
              <p className="text-sm font-semibold text-white">Recent Deployments</p>
              <div className="mt-4 space-y-4">
                {deployments.map((item, index) => (
                  <div key={item} className="flex items-center justify-between text-xs">
                    <div>
                      <p className="font-medium text-slate-200">{item}</p>
                      <p className="mt-1 text-slate-600">May {18 - index}, 10:{30 + index} AM</p>
                    </div>
                    <span className="text-emerald-400">Success</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_1.1fr]">
            <div className="rounded-xl border border-white/7 bg-white/[0.035] p-5">
              <p className="text-sm font-semibold text-white">Resource Usage</p>
              <div className="mt-5 flex items-center gap-5">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-[12px] border-violet-500 border-r-blue-500 text-center text-sm font-semibold text-white">
                  68%
                </div>
                <div className="flex-1 space-y-3 text-xs text-slate-400">
                  {["CPU", "Memory", "Storage"].map((item, index) => (
                    <div key={item} className="grid grid-cols-[70px_1fr_38px] items-center gap-2">
                      <span>{item}</span>
                      <span className="h-1.5 rounded-full bg-white/10">
                        <span className={`block h-full rounded-full bg-gradient-to-r from-violet-500 to-blue-500 ${index === 0 ? "w-[68%]" : index === 1 ? "w-[49%]" : "w-[62%]"}`} />
                      </span>
                      <span>{index === 0 ? "68%" : index === 1 ? "49%" : "62%"}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-white/7 bg-white/[0.035] p-5">
              <p className="text-sm font-semibold text-white">AI Insights</p>
              <p className="mt-5 text-sm leading-6 text-slate-300">Your API latency improved by 24% this week.</p>
              <a href="#features" className="mt-4 inline-block text-xs font-semibold text-blue-400">View all insights -&gt;</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default function Home() {
  const bookingUrl = integrationsConfig.calBookingUrl;

  return (
    <main className="min-h-screen overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#030a15] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset]">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-8 py-8 lg:px-12">
          <a href="#top" className="flex items-center gap-3">
            <NuvrixaMark />
            <span className="text-2xl font-semibold tracking-[-0.04em]">Nuvrixa</span>
          </a>
          <nav className="hidden items-center gap-10 text-sm font-medium text-white lg:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-violet-300">
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <button className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-xs font-semibold text-slate-300 sm:flex" aria-label="Toggle theme">
              SUN
            </button>
            <a href={`mailto:${siteConfig.email}`} className="hidden text-sm font-semibold text-white transition hover:text-violet-300 sm:inline">
              Sign in
            </a>
            <a href={bookingUrl} className="rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_34px_rgba(124,58,237,0.35)] transition hover:-translate-y-0.5">
              Get Started
            </a>
          </div>
        </div>
      </header>

      <section id="top" className="relative border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_40%,rgba(124,58,237,0.22),transparent_32rem),radial-gradient(circle_at_82%_30%,rgba(37,99,235,0.20),transparent_36rem)]" />
        <div className="mx-auto grid max-w-[1440px] gap-16 px-8 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:px-12 lg:py-20">
          <div className="relative z-10 flex flex-col justify-center">
            <Pill>AI-Powered. Cloud-Native. Built for Tomorrow.</Pill>
            <h1 className="mt-8 max-w-[620px] text-5xl font-semibold leading-[1.08] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
              Build Smarter.
              <br />
              Deploy Faster.
              <br />
              <span className="bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent">Scale Effortlessly.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
              Nuvrixa is the all-in-one platform for modern teams to build, deploy, and scale powerful applications with AI-driven insights and cloud-native performance.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href={bookingUrl} className="rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 px-8 py-4 text-center text-base font-semibold text-white shadow-[0_0_40px_rgba(124,58,237,0.32)] transition hover:-translate-y-0.5">
                Get Started Free
              </a>
              <a href="#features" className="rounded-xl border border-violet-400/45 bg-white/[0.02] px-8 py-4 text-center text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-violet-500/10">
                Play View Demo
              </a>
            </div>
            <div className="mt-11 flex flex-wrap gap-8 text-xs text-slate-400">
              {["No credit card required", "Free forever plan", "Setup in minutes"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full border border-violet-400 text-[0.6rem] text-violet-300">v</span>
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="relative z-10">
            <DashboardMockup />
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-[1220px] px-8 py-16 text-center lg:py-20">
        <Pill>FEATURES</Pill>
        <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em]">Everything You Need to Build and Scale</h2>
        <p className="mt-3 text-base text-slate-400">Powerful features designed for modern development teams.</p>
        <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article key={feature.title} className="rounded-xl border border-white/10 bg-white/[0.035] p-7 text-left shadow-[0_20px_70px_rgba(2,6,23,0.28)] transition hover:-translate-y-1 hover:border-violet-400/40 hover:bg-violet-500/8">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-violet-400/30 bg-violet-500/20 text-xl font-bold text-violet-300">
                {feature.icon}
              </div>
              <h3 className="mt-7 text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-300">{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="solutions" className="mx-auto max-w-[1040px] px-8 py-10 text-center">
        <Pill>HOW IT WORKS</Pill>
        <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em]">Build in 3 Simple Steps</h2>
        <p className="mt-3 text-base text-slate-400">From code to cloud in just a few minutes.</p>
        <div className="relative mt-12 grid gap-10 md:grid-cols-3">
          <div className="absolute left-[18%] right-[18%] top-6 hidden border-t border-dashed border-blue-500/50 md:block" />
          {[
            ["1", "Connect", "Connect your repository or start a new project."],
            ["2", "Build & Configure", "Configure your settings and let Nuvrixa handle the build."],
            ["3", "Deploy & Scale", "Deploy instantly and scale effortlessly as you grow."],
          ].map(([number, title, body]) => (
            <div key={title} className="relative">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-violet-400 bg-[#111a3a] text-lg font-semibold text-white shadow-[0_0_30px_rgba(124,58,237,0.28)]">
                {number}
              </span>
              <h3 className="mt-8 text-lg font-semibold text-white">{title}</h3>
              <p className="mx-auto mt-3 max-w-[210px] text-base leading-7 text-slate-400">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-[1220px] px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-300">Trusted by innovative teams</p>
        <div className="mt-10 grid gap-8 text-2xl font-semibold text-slate-500 sm:grid-cols-2 lg:grid-cols-6">
          {trusted.map((item) => (
            <span key={item} className="flex items-center justify-center gap-2">
              <span className="text-slate-600">*</span>
              {item}
            </span>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Footer() {
  return (
    <footer id="about" className="border-t border-white/10 bg-[#06101d]">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-8 py-12 lg:grid-cols-[1.2fr_2fr_1fr] lg:px-16">
        <div>
          <a href="#top" className="inline-flex items-center gap-3">
            <NuvrixaMark />
            <span className="text-2xl font-semibold">Nuvrixa</span>
          </a>
          <p className="mt-6 max-w-xs text-sm leading-7 text-slate-400">
            The all-in-one platform for building, deploying, and scaling modern applications with AI and cloud.
          </p>
          <div className="mt-7 flex gap-5 text-xl text-slate-400">
            {["GH", "X", "in", "DC"].map((item) => (
              <span key={item} className="text-sm font-semibold">{item}</span>
            ))}
          </div>
        </div>

        <nav className="grid gap-8 sm:grid-cols-3">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h2 className="text-base font-semibold text-white">{column.title}</h2>
              <div className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <a key={link} href={link === "Privacy Policy" ? "/privacy" : link === "Terms of Service" ? "/terms" : "#top"} className="block text-sm text-slate-400 transition hover:text-white">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div id="docs">
          <h2 className="text-base font-semibold text-white">Newsletter</h2>
          <p className="mt-5 text-sm leading-7 text-slate-400">Stay updated with the latest news and product updates.</p>
          <form action={`mailto:${siteConfig.email}`} className="mt-6 flex rounded-xl border border-white/10 bg-[#040b14] p-1">
            <input type="email" placeholder="Enter your email" className="min-w-0 flex-1 bg-transparent px-4 text-sm text-white outline-none placeholder:text-slate-500" />
            <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500 text-white" aria-label="Subscribe">
              -&gt;
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-8 py-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-16">
          <p>2026 Nuvrixa. All rights reserved.</p>
          <p>Made with <span className="text-red-400">love</span> by Nuvrixa</p>
        </div>
      </div>
    </footer>
  );
}
