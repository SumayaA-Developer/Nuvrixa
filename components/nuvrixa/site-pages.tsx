import Link from "next/link";

import { integrationsConfig } from "@/lib/integrations";

type PageKey = "home" | "solutions" | "services" | "process" | "results" | "about";

type Card = {
  title: string;
  body: string;
  icon: string;
  items?: string[];
  chaos?: string[];
  solution?: string[];
  stat?: string;
};

type PageContent = {
  key: PageKey;
  eyebrow: string;
  title: string[];
  accent: string;
  body: string;
  heroVisual: "dashboard" | "solutions" | "stack" | "process" | "results" | "about";
  heroProof: [string, string][];
  sections: Array<{
    eyebrow?: string;
    title: string;
    body?: string;
    kind: "cards" | "chaos" | "steps" | "metrics" | "industries" | "story" | "tools";
    cards: Card[];
  }>;
  ctaTitle: string;
  ctaAccent: string;
  ctaBody: string;
  notice: string;
};

const nav = [
  ["Home", "/"],
  ["Solutions", "/solutions"],
  ["Services", "/services"],
  ["Process", "/process"],
  ["Results", "/results"],
] as const;

const industries: Card[] = [
  { icon: "PM", title: "Property Management", body: "" },
  { icon: "PS", title: "Professional Services", body: "" },
  { icon: "FS", title: "Field Services", body: "" },
  { icon: "TR", title: "Training Providers", body: "" },
  { icon: "NG", title: "NGOs & Community", body: "" },
  { icon: "CO", title: "Contractors", body: "" },
  { icon: "RO", title: "Retail Operations", body: "" },
  { icon: "SB", title: "Service Businesses", body: "" },
];

const solutionCards: Card[] = [
  {
    icon: "LF",
    title: "1. AI Lead Management & Sales System",
    body: "Capture, qualify and convert more leads with intelligent automation.",
    chaos: ["Leads lost in emails & chats", "No follow-ups", "Manual data entry", "Low conversion rates"],
    solution: ["Automated lead capture", "AI lead qualification", "Follow-ups & reminders", "Pipeline reports"],
  },
  {
    icon: "WA",
    title: "2. WhatsApp Customer Service System",
    body: "Automate enquiries, bookings and support on WhatsApp.",
    chaos: ["Slow replies", "Missed messages", "No enquiry tracking", "Customers get frustrated"],
    solution: ["Instant AI responses", "Enquiry routing", "Booking reminders", "CRM & ticket sync"],
  },
  {
    icon: "HD",
    title: "3. AI Support & Ticketing System",
    body: "Smart ticketing and support management for faster resolution.",
    chaos: ["Tickets lost or ignored", "No prioritisation", "Long resolution times", "No performance tracking"],
    solution: ["Ticket creation & routing", "SLA tracking", "AI suggestions", "Knowledge base integration"],
  },
  {
    icon: "CP",
    title: "4. Client Portal Solutions",
    body: "Secure portals for clients to track projects, documents and requests.",
    chaos: ["Clients always asking for updates", "Documents everywhere", "No transparency", "Time wasted on admin"],
    solution: ["Project progress tracking", "Document sharing", "Invoices & payments", "Support tickets & messages"],
  },
  {
    icon: "OP",
    title: "5. Internal Operations Platform",
    body: "One central system to run your business operations seamlessly.",
    chaos: ["Disconnected tools", "Data scattered", "No visibility", "Inefficient operations"],
    solution: ["All-in-one platform", "Real-time dashboards", "Task & team management", "Operational visibility"],
  },
  {
    icon: "DP",
    title: "6. Document Processing Automation",
    body: "Extract, validate and process documents with AI.",
    chaos: ["Manual data entry", "Errors & inaccuracies", "Slow approvals", "Documents hard to find"],
    solution: ["Data extraction", "Auto classification", "Validation & routing", "Digital organisation"],
  },
  {
    icon: "$",
    title: "7. Invoice & Payment Automation",
    body: "Automate quotes, invoices, payments and collections.",
    chaos: ["Late payments", "Manual invoicing", "Payment tracking pain", "Cash flow issues"],
    solution: ["Automated invoicing", "Payment reminders", "Reconciliation", "Cash flow reporting"],
  },
  {
    icon: "AI",
    title: "8. AI Knowledge Base & Assistant",
    body: "AI assistant trained on your documents and processes.",
    chaos: ["Staff can't find information", "Repeated questions", "Onboarding takes time", "Knowledge stays in silos"],
    solution: ["Smart search", "Instant answers", "Source citations", "Role-based access"],
  },
];

const serviceCards: Card[] = [
  { icon: "01", title: "Business Analysis & Process Mapping", body: "We understand your business inside out to identify opportunities and design the right solutions.", items: ["Process discovery", "Workflow mapping", "Gap & bottleneck analysis", "Automation opportunity identification"] },
  { icon: "02", title: "AI Strategy & Roadmap", body: "We create a practical AI roadmap aligned to your business objectives and growth plans.", items: ["AI readiness assessment", "Use case prioritisation", "Technology recommendations", "Implementation roadmap"] },
  { icon: "03", title: "Workflow Automation & Integration", body: "We automate repetitive tasks and connect your tools so your business runs seamlessly.", items: ["End-to-end automations", "System integrations", "Approval workflows", "Task & data synchronisation"] },
  { icon: "04", title: "Custom Systems & Web Applications", body: "We build custom web applications and internal systems tailored to your unique operations.", items: ["Custom web apps", "Internal business systems", "Admin dashboards", "Scalable architecture"] },
  { icon: "05", title: "Client Portals & Experiences", body: "We create secure, modern portals that improve client communication and transparency.", items: ["Project tracking", "Document sharing", "Invoices & payments", "Support & messaging"] },
  { icon: "06", title: "Dashboards & Reporting", body: "We turn your data into clear insights so you can make confident, data-driven decisions.", items: ["Real-time dashboards", "KPI tracking", "Custom reports", "Executive summaries"] },
  { icon: "07", title: "Document Processing & Data Automation", body: "We use AI to extract, validate and process documents accurately and efficiently.", items: ["Data extraction", "Document classification", "Data validation", "Auto filing & routing"] },
  { icon: "08", title: "Support & System Optimisation", body: "We provide ongoing support and optimisation to keep your systems performing at their best.", items: ["System monitoring", "Performance optimisation", "Feature improvements", "Training & enablement"] },
];

const processCards: Card[] = [
  { icon: "01", title: "Discover", body: "We understand your business inside out.", items: ["Stakeholder interviews", "Process & system assessment", "Pain point identification", "Opportunity mapping"] },
  { icon: "02", title: "Map", body: "We map and analyse your processes.", items: ["Process mapping", "Workflow analysis", "Data flow review", "Gap & bottleneck analysis"] },
  { icon: "03", title: "Design", body: "We design the right solution for you.", items: ["Solution architecture", "Automation design", "Integration planning", "User experience design"] },
  { icon: "04", title: "Build", body: "We build, integrate and bring it to life.", items: ["System development", "Integrations & automation", "Testing & quality assurance", "Deployment & training"] },
  { icon: "05", title: "Optimise", body: "We optimise for long-term performance.", items: ["Performance monitoring", "Process optimisation", "Insights & reporting", "Ongoing support"] },
];

const outcomeCards: Card[] = [
  { icon: "TM", title: "Time Saved", stat: "60%+", body: "Automate repetitive tasks and focus on what truly matters." },
  { icon: "$", title: "Cost Reduction", stat: "30%+", body: "Reduce manual work, errors and operational inefficiencies." },
  { icon: "RS", title: "Faster Response", stat: "70%+", body: "Respond to enquiries, tickets and requests in real time." },
  { icon: "PB", title: "Productivity Boost", stat: "45%+", body: "Empower your team with the right data and automation." },
  { icon: "AC", title: "Better Accuracy", stat: "80%+", body: "Minimise human errors and keep your data clean." },
  { icon: "CS", title: "Happier Customers", stat: "90%+", body: "Deliver consistent, transparent and faster experiences." },
];

const pages: Record<PageKey, PageContent> = {
  home: {
    key: "home",
    eyebrow: "AI AUTOMATION & BUSINESS SYSTEMS",
    title: ["Intelligent Systems.", "Better Business."],
    accent: "Better Business.",
    body: "We design and build AI-powered systems and automations that eliminate manual work, connect your tools and give you the clarity to grow with confidence.",
    heroVisual: "dashboard",
    heroProof: [["30-Minute Audit", "100% Free"], ["No Obligation", "Built Around You"], ["Secure & Private", "Your Data Is Safe"]],
    sections: [
      { title: "Built For Modern Businesses", body: "We build connected systems that help organisations operate smarter and scale sustainably.", kind: "cards", cards: [
        { icon: "WF", title: "Workflow Automation", body: "" }, { icon: "AI", title: "AI Assistants", body: "" }, { icon: "CP", title: "Client Portals", body: "" }, { icon: "CRM", title: "CRM Systems", body: "" }, { icon: "DB", title: "Dashboards & Reporting", body: "" }, { icon: "SI", title: "System Integrations", body: "" }, { icon: "DP", title: "Document Processing", body: "" }, { icon: "SA", title: "Support Automation", body: "" },
      ] },
      { title: "The Problems We Solve", body: "Outdated processes and disconnected systems slow your business down.", kind: "cards", cards: [
        { icon: "WT", title: "Wasted Time", body: "Repetitive tasks and admin consume your day." }, { icon: "DS", title: "Disconnected Systems", body: "Tools don't talk to each other. Data gets lost." }, { icon: "HE", title: "Human Errors", body: "Manual processes lead to costly mistakes." }, { icon: "NV", title: "No Visibility", body: "You lack real-time insights to make confident decisions." }, { icon: "UC", title: "Unhappy Customers", body: "Slow responses and poor communication lose trust." },
      ] },
      { title: "Systems Designed For Businesses Like Yours", kind: "industries", cards: industries },
      { title: "Outcomes Our Systems Are Designed To Support", kind: "metrics", cards: outcomeCards },
    ],
    ctaTitle: "Ready To Unlock Your",
    ctaAccent: "Next Level Of Growth?",
    ctaBody: "Book your free 30-minute Automation Discovery Session and let us show you how Nuvrixa can help you work smarter, reduce costs and build scalable systems.",
    notice: "Outcomes depend on your business, current processes, implementation scope and system usage.",
  },
  solutions: {
    key: "solutions",
    eyebrow: "SOLUTIONS",
    title: ["From Chaos To Clarity.", "We Build The Systems."],
    accent: "We Build The Systems.",
    body: "Outdated processes, disconnected tools and manual work slow you down. We design AI-powered systems and automations that fix the chaos and help your business grow.",
    heroVisual: "solutions",
    heroProof: [],
    sections: [
      { eyebrow: "Our Solutions", title: "Powerful Systems For Modern Businesses", body: "Solutions designed to eliminate friction, automate operations and drive real results.", kind: "chaos", cards: solutionCards },
      { title: "Designed For Businesses That Want To Move Forward", kind: "industries", cards: industries },
    ],
    ctaTitle: "Ready To Turn",
    ctaAccent: "Chaos Into Clarity?",
    ctaBody: "Book your free 30-minute Automation Discovery Session and let us show you how Nuvrixa can help you work smarter, reduce costs and scale with confidence.",
    notice: "Outcomes depend on your business, current processes, implementation scope and system usage.",
  },
  services: {
    key: "services",
    eyebrow: "SERVICES",
    title: ["Expert Services.", "Powerful Systems.", "Real Impact."],
    accent: "Powerful Systems.",
    body: "We provide end-to-end service to design, build and optimise AI-powered systems and automations that help your business operate smarter, faster and with confidence.",
    heroVisual: "stack",
    heroProof: [["Strategic & Secure", "Built with best practices."], ["Tailored To You", "Designed around your goals."], ["Results Driven", "Focused on measurable value."]],
    sections: [
      { eyebrow: "OUR CORE SERVICES", title: "From Strategy To System. We Do It All.", body: "A full-service approach to automation and digital transformation.", kind: "cards", cards: serviceCards },
      { title: "Why Partner With Nuvrixa?", kind: "cards", cards: [
        { icon: "BF", title: "Business Focused", body: "We start with your business, not the technology." }, { icon: "AI", title: "AI-Powered Solutions", body: "We use the latest AI to solve real business problems." }, { icon: "ED", title: "End-to-End Delivery", body: "From planning to implementation and beyond." }, { icon: "SC", title: "Secure & Compliant", body: "Your data and security are built in at every step." }, { icon: "SS", title: "Scalable Systems", body: "Built to grow with your business." },
      ] },
    ],
    ctaTitle: "Ready To Transform",
    ctaAccent: "Your Business?",
    ctaBody: "Book your free 30-minute Automation Discovery Session and let's build systems that save you time, reduce costs and drive growth.",
    notice: "Every business is different. Our services are tailored to your processes, goals and industry.",
  },
  process: {
    key: "process",
    eyebrow: "OUR PROCESS",
    title: ["A Clear Process.", "Powerful Outcomes."],
    accent: "Powerful Outcomes.",
    body: "We follow a proven 5-step process to design, build and optimise AI-powered systems and automations that create real, measurable impact.",
    heroVisual: "process",
    heroProof: [["Strategic & Structured", "A proven process built for success."], ["Collaborative Approach", "We work with you, not just for you."], ["Focused On Results", "Every step is designed to deliver value."]],
    sections: [
      { title: "The 5-Step Nuvrixa Process", body: "From understanding your business to ongoing optimisation, we ensure every detail is covered.", kind: "steps", cards: processCards },
      { title: "Our Approach", kind: "cards", cards: [
        { icon: "BF", title: "Business First", body: "We focus on your business goals, not just technology." }, { icon: "DI", title: "Data Informed", body: "Every decision is backed by data and real insights." }, { icon: "CO", title: "Collaborative", body: "You're involved at every stage. We build together." }, { icon: "SC", title: "Secure & Compliant", body: "Security, privacy and compliance are built in from day one." }, { icon: "SD", title: "Scalable By Design", body: "Our solutions grow with your business." },
      ] },
    ],
    ctaTitle: "Ready To Start Your",
    ctaAccent: "Transformation?",
    ctaBody: "Let's discuss your business, identify opportunities and build a plan to automate, integrate and scale.",
    notice: "Every business is different. Our process is tailored to your unique needs, goals and industry.",
  },
  results: {
    key: "results",
    eyebrow: "RESULTS THAT MATTER",
    title: ["Real Impact.", "Measurable Results."],
    accent: "Measurable Results.",
    body: "Our systems are built to eliminate friction, automate what slows you down and give you the visibility you need to grow with confidence.",
    heroVisual: "results",
    heroProof: [["Measurable Impact", "We track what matters."], ["Data-Driven Decisions", "Real-time insights help you act faster."], ["Long-Term Value", "Systems that scale with your business."]],
    sections: [
      { title: "Outcomes Our Systems Are Designed To Deliver", body: "While every business is different, our solutions are built to drive outcomes like these.", kind: "metrics", cards: outcomeCards },
      { title: "From Chaos To Clarity", body: "We transform the way businesses operate.", kind: "story", cards: [] },
      { title: "Supporting Businesses Across Industries", kind: "industries", cards: industries },
    ],
    ctaTitle: "See What's Possible For",
    ctaAccent: "Your Business",
    ctaBody: "Book your free 30-minute Automation Discovery Session and let us show you how Nuvrixa can help you work smarter, reduce costs and achieve real results.",
    notice: "Every business is unique. Our systems are built to adapt to your industry, processes and goals.",
  },
  about: {
    key: "about",
    eyebrow: "ABOUT NUVRIXA",
    title: ["Built On Purpose.", "Driven By Impact."],
    accent: "Driven By Impact.",
    body: "Nuvrixa was founded to help businesses break free from manual work, disconnected systems and everyday chaos. We design and build intelligent systems that give you back time, reduce costs and help you scale with confidence.",
    heroVisual: "about",
    heroProof: [["Our Focus", "Solve real business problems with practical automation."], ["Our Mission", "Empower businesses to operate smarter."], ["Our Promise", "Systems built with integrity and transparency."]],
    sections: [
      { title: "From Frustration To Automation.", kind: "story", cards: [] },
      { title: "Our Values", kind: "cards", cards: [
        { icon: "IN", title: "Integrity", body: "We do what's right, even when no one is watching." }, { icon: "PA", title: "Partnership", body: "We work with you, not just for you." }, { icon: "IV", title: "Innovation", body: "We embrace new ideas and technology to solve real problems." }, { icon: "IM", title: "Impact", body: "We build systems that deliver real, measurable value." }, { icon: "GR", title: "Growth", body: "We are committed to your long-term success." },
      ] },
      { title: "Modern Tools. Seamless Solutions.", kind: "tools", cards: [
        { icon: "MK", title: "Make", body: "" }, { icon: "N8", title: "n8n", body: "" }, { icon: "ZP", title: "Zapier", body: "" }, { icon: "HS", title: "HubSpot", body: "" }, { icon: "AT", title: "Airtable", body: "" }, { icon: "CU", title: "ClickUp", body: "" }, { icon: "GC", title: "Google Cloud", body: "" }, { icon: "AWS", title: "AWS", body: "" }, { icon: "OA", title: "OpenAI", body: "" }, { icon: "AN", title: "Anthropic", body: "" }, { icon: "SB", title: "Supabase", body: "" }, { icon: "VD", title: "Vector DBs", body: "" },
      ] },
    ],
    ctaTitle: "Let's Build What's Next.",
    ctaAccent: "Together.",
    ctaBody: "Ready to automate, integrate and elevate your business? Book your free 30-minute Automation Discovery Session today.",
    notice: "",
  },
};

export function NuvrixaPage({ pageKey }: { pageKey: PageKey }) {
  const page = pages[pageKey];

  return (
    <main className="min-h-screen bg-[#020814] text-white">
      <SiteNav active={pageKey} />
      <div className="mx-auto max-w-[1480px] px-6 pb-6 pt-8 sm:px-10">
        <Hero page={page} />
        {page.sections.map((section) => (
          <Section key={section.title} section={section} pageKey={pageKey} />
        ))}
        <Cta page={page} />
        {page.notice ? <Notice>{page.notice}</Notice> : null}
      </div>
    </main>
  );
}

function SiteNav({ active }: { active: PageKey }) {
  return (
    <header className="mx-auto flex max-w-[1480px] items-center justify-between px-6 py-8 sm:px-10">
      <Link href="/" className="flex items-center gap-3">
        <Logo />
        <span className="text-3xl font-semibold tracking-[0.08em]">NUVRIXA</span>
      </Link>
      <nav className="hidden items-center gap-12 text-base font-semibold lg:flex">
        {nav.map(([label, href]) => {
          const key = label.toLowerCase() === "home" ? "home" : (label.toLowerCase() as PageKey);
          return (
            <Link key={label} href={href} className={`pb-3 transition ${active === key ? "border-b-2 border-cyan-300 text-cyan-300" : "text-white hover:text-cyan-200"}`}>
              {label}
            </Link>
          );
        })}
      </nav>
      <a href={integrationsConfig.calBookingUrl} className="rounded-lg bg-gradient-to-r from-blue-600 to-fuchsia-600 px-7 py-4 text-base font-semibold shadow-[0_0_35px_rgba(124,58,237,0.38)]">
        Book Free Automation Audit <span className="ml-2">-&gt;</span>
      </a>
    </header>
  );
}

function Hero({ page }: { page: PageContent }) {
  return (
    <section className="relative grid min-h-[520px] items-center gap-10 overflow-hidden py-10 lg:grid-cols-[0.82fr_1.18fr]">
      <Backdrop />
      <div className="relative z-10">
        <p className="text-base font-semibold uppercase tracking-wide text-cyan-300">{page.eyebrow}</p>
        <h1 className="mt-5 max-w-2xl text-6xl font-semibold leading-[1.04] tracking-[-0.05em] lg:text-7xl">
          {page.title.map((line) => (
            <span key={line} className={line === page.accent ? "block bg-gradient-to-r from-fuchsia-500 via-blue-500 to-cyan-300 bg-clip-text text-transparent" : "block"}>
              {line}
            </span>
          ))}
        </h1>
        <p className="mt-7 max-w-[650px] text-xl leading-9 text-slate-200/90">{page.body}</p>
        {page.key === "home" ? (
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={integrationsConfig.calBookingUrl} className="rounded-lg bg-gradient-to-r from-blue-600 to-fuchsia-600 px-8 py-5 text-lg font-semibold shadow-[0_0_35px_rgba(124,58,237,0.38)]">Book Your Free Automation Audit -&gt;</a>
            <Link href="/solutions" className="rounded-lg border border-blue-400/40 px-8 py-5 text-lg font-semibold">Explore Solutions o</Link>
          </div>
        ) : null}
        {page.heroProof.length ? <ProofRow items={page.heroProof} /> : null}
      </div>
      <div className="relative z-10">{renderVisual(page.heroVisual)}</div>
    </section>
  );
}

function Section({ section, pageKey }: { section: PageContent["sections"][number]; pageKey: PageKey }) {
  if (section.kind === "industries") {
    return (
      <Panel className="mt-7 text-center">
        <h2 className="text-3xl font-semibold">{section.title}</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-8">
          {section.cards.map((card) => <MiniIcon key={card.title} card={card} />)}
        </div>
        <p className="mt-8 text-sm text-slate-400">i&nbsp;&nbsp; Outcomes depend on your business, current processes, implementation scope and system usage.</p>
      </Panel>
    );
  }

  if (section.kind === "steps") {
    return (
      <Panel className="mt-7 text-center">
        <h2 className="text-4xl font-semibold">{section.title}</h2>
        <p className="mt-4 text-lg text-slate-300">{section.body}</p>
        <div className="mt-10 grid gap-2 lg:grid-cols-5">
          {section.cards.map((card) => <StepCard key={card.title} card={card} />)}
        </div>
        <div className="mx-auto mt-8 flex max-w-[1250px] items-center gap-8 rounded-lg border border-blue-400/40 bg-blue-500/5 p-5 text-left">
          <IconPill icon="CI" />
          <div>
            <h3 className="text-xl font-semibold">Continuous Improvement</h3>
            <p className="mt-1 text-slate-300">We do not just deliver and disappear. We stay with you to refine, improve and scale.</p>
          </div>
        </div>
      </Panel>
    );
  }

  if (section.kind === "chaos") {
    return (
      <Panel className="mt-7">
        <SectionTitle section={section} />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {section.cards.map((card) => <ChaosCard key={card.title} card={card} />)}
        </div>
      </Panel>
    );
  }

  if (section.kind === "metrics") {
    return (
      <Panel className="mt-7 text-center">
        <h2 className="text-3xl font-semibold">{section.title}</h2>
        {section.body ? <p className="mt-3 text-lg text-slate-300">{section.body}</p> : null}
        <div className="mt-8 grid gap-5 md:grid-cols-3 xl:grid-cols-6">
          {section.cards.map((card) => <MetricCard key={card.title} card={card} />)}
        </div>
      </Panel>
    );
  }

  if (section.kind === "story") {
    return <StoryPanel pageKey={pageKey} title={section.title} body={section.body} />;
  }

  if (section.kind === "tools") {
    return (
      <div className="mt-7 grid gap-6 lg:grid-cols-2">
        <Panel>
          <p className="text-cyan-300">OUR APPROACH</p>
          <h2 className="mt-2 text-3xl font-semibold">Practical. Strategic. Results Driven.</h2>
          <div className="mt-6 space-y-4">
            {["Understand your business, challenges and goals.", "Strategise the right solution tailored to your needs.", "Build, integrate and automate with precision.", "Optimise and scale as your business grows."].map((item) => (
              <p key={item} className="flex gap-3 text-slate-200"><span className="text-cyan-300">OK</span>{item}</p>
            ))}
          </div>
        </Panel>
        <Panel>
          <p className="text-cyan-300">OUR TECH STACK</p>
          <h2 className="mt-2 text-3xl font-semibold">{section.title}</h2>
          <div className="mt-7 grid grid-cols-2 gap-4 md:grid-cols-4">
            {section.cards.map((card) => <div key={card.title} className="rounded-lg border border-blue-400/25 bg-white/[0.025] p-4 text-center font-semibold">{card.title}</div>)}
          </div>
          <p className="mt-7 text-slate-300">We use the best tools and AI technologies to build secure, scalable and future-ready systems.</p>
        </Panel>
      </div>
    );
  }

  return (
    <Panel className="mt-7">
      <SectionTitle section={section} />
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {section.cards.map((card) => <StandardCard key={card.title} card={card} />)}
      </div>
    </Panel>
  );
}

function SectionTitle({ section }: { section: PageContent["sections"][number] }) {
  return (
    <div className="text-center">
      {section.eyebrow ? <p className="text-sm font-semibold uppercase text-cyan-300">{section.eyebrow}</p> : null}
      <h2 className="text-4xl font-semibold tracking-[-0.04em]">{section.title}</h2>
      {section.body ? <p className="mt-3 text-lg text-slate-300">{section.body}</p> : null}
    </div>
  );
}

function StandardCard({ card }: { card: Card }) {
  return (
    <article className="min-h-[270px] rounded-lg border border-blue-400/25 bg-[#061226]/80 p-7 shadow-[0_0_35px_rgba(14,165,233,0.05)]">
      <IconPill icon={card.icon} />
      <h3 className="mt-6 text-2xl font-semibold leading-tight">{card.title}</h3>
      <p className="mt-4 text-base leading-7 text-slate-300">{card.body}</p>
      {card.items ? <CheckList items={card.items} color="violet" /> : null}
    </article>
  );
}

function ChaosCard({ card }: { card: Card }) {
  return (
    <article className="rounded-lg border border-blue-400/25 bg-[#061226]/80 p-6">
      <IconPill icon={card.icon} />
      <h3 className="mt-5 min-h-[58px] text-xl font-semibold">{card.title}</h3>
      <p className="min-h-[58px] text-sm leading-6 text-slate-300">{card.body}</p>
      <Divider />
      <p className="text-sm font-semibold text-rose-400">CHAOS</p>
      <CheckList items={card.chaos || []} color="rose" />
      <p className="my-3 text-center text-slate-500">down</p>
      <p className="text-sm font-semibold text-cyan-300">SOLUTION</p>
      <CheckList items={card.solution || []} color="cyan" />
    </article>
  );
}

function StepCard({ card }: { card: Card }) {
  return (
    <article className="rounded-lg border border-blue-400/25 bg-[#061226]/80 p-6 text-left">
      <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-cyan-300/60 text-3xl font-semibold text-cyan-300">{card.icon}</div>
      <h3 className="mt-6 text-center text-2xl font-semibold">{card.title}</h3>
      <p className="mt-4 text-center text-base font-semibold text-cyan-300">{card.body}</p>
      <CheckList items={card.items || []} color={card.icon === "02" || card.icon === "04" ? "violet" : "cyan"} />
    </article>
  );
}

function MetricCard({ card }: { card: Card }) {
  return (
    <article className="rounded-lg border border-blue-400/25 bg-[#061226]/80 p-6 text-left">
      <IconPill icon={card.icon} />
      <p className="mt-6 bg-gradient-to-r from-cyan-300 to-fuchsia-500 bg-clip-text text-5xl font-semibold text-transparent">{card.stat}</p>
      <h3 className="mt-3 text-xl font-semibold">{card.title}</h3>
      <p className="mt-4 text-base leading-7 text-slate-300">{card.body}</p>
    </article>
  );
}

function MiniIcon({ card }: { card: Card }) {
  return (
    <div className="border-r border-blue-400/20 px-3 last:border-r-0">
      <IconPill icon={card.icon} small />
      <p className="mt-3 text-base font-medium leading-tight">{card.title}</p>
    </div>
  );
}

function StoryPanel({ pageKey, title, body }: { pageKey: PageKey; title: string; body?: string }) {
  if (pageKey === "results") {
    return (
      <Panel className="mt-7 text-center">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <p className="mt-3 text-lg text-slate-300">{body}</p>
        <div className="mt-8 grid items-center gap-6 lg:grid-cols-[1fr_1fr_auto_1fr_1fr]">
          <ChaosOrb />
          <ListBox title="BEFORE NUVRIXA" color="rose" items={["Disconnected tools and data everywhere", "Manual, repetitive and time-consuming work", "Delayed responses and missed opportunities", "No visibility into what's happening", "Higher costs and lower productivity"]} />
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-violet-400 bg-violet-500/10 text-2xl">-&gt;</div>
          <ListBox title="AFTER NUVRIXA" color="cyan" items={["Connected systems and unified data", "Automated workflows and less manual work", "Faster responses and more opportunities won", "Real-time insights at your fingertips", "Lower costs and higher efficiency"]} />
          <ClarityOrb />
        </div>
      </Panel>
    );
  }

  return (
    <div className="mt-7 grid gap-6 lg:grid-cols-2">
      <Panel>
        <p className="text-cyan-300">OUR STORY</p>
        <h2 className="mt-2 text-3xl font-semibold">{title}</h2>
        <div className="mt-8 space-y-8 text-lg leading-8 text-slate-200">
          <p>We saw how businesses were held back by repetitive tasks, siloed tools and inefficient processes.</p>
          <p>We believe technology should simplify your day, not complicate it.</p>
          <p>That is why we build practical, scalable and intelligent systems that work for your business, not the other way around.</p>
        </div>
      </Panel>
      <Panel>
        <p className="text-cyan-300">FOUNDER</p>
        <h2 className="mt-2 text-3xl font-semibold">Sumaya Arumugam</h2>
        <p className="mt-2 text-lg text-fuchsia-400">Founder & Systems Architect</p>
        <Divider />
        <p className="text-lg leading-8 text-slate-200">With a background in business, training and operational systems, Sumaya founded Nuvrixa to help organisations replace repetitive work, disconnected tools and inefficient processes with practical AI-powered systems.</p>
        <p className="mt-5 text-lg leading-8 text-slate-200">Her focus is simple: understand how a business works, identify what is slowing it down and build a tailored system that creates clarity, saves time and supports sustainable growth.</p>
      </Panel>
    </div>
  );
}

function Cta({ page }: { page: PageContent }) {
  return (
    <section className="mt-7 grid items-center gap-8 rounded-lg border border-violet-500/55 bg-gradient-to-r from-violet-950/55 via-blue-950/45 to-[#061226] p-8 shadow-[0_0_55px_rgba(124,58,237,0.18)] lg:grid-cols-[210px_1fr_auto]">
      <CalendarIcon />
      <div>
        <h2 className="text-3xl font-semibold tracking-[-0.03em]">
          {page.ctaTitle} <span className="bg-gradient-to-r from-fuchsia-500 to-cyan-300 bg-clip-text text-transparent">{page.ctaAccent}</span>
        </h2>
        <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-300">{page.ctaBody}</p>
        <div className="mt-5 flex flex-wrap gap-7 text-sm text-slate-300">
          {["30 Minutes", "100% Free", "No Obligation", "Built Around Your Business"].map((item) => <span key={item}>OK {item}</span>)}
        </div>
      </div>
      <div className="text-center">
        <a href={integrationsConfig.calBookingUrl} className="inline-flex rounded-lg bg-gradient-to-r from-blue-600 to-fuchsia-600 px-10 py-5 text-lg font-semibold shadow-[0_0_35px_rgba(124,58,237,0.38)]">Book My Free 30-Minute Audit -&gt;</a>
        <p className="mt-5 text-sm text-slate-400">No credit card required.</p>
      </div>
    </section>
  );
}

function ProofRow({ items }: { items: [string, string][] }) {
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-3">
      {items.map(([title, body]) => (
        <div key={title} className="border-r border-blue-400/25 pr-6 last:border-r-0">
          <IconPill icon={title.slice(0, 2).toUpperCase()} small />
          <p className="mt-3 font-semibold">{title}</p>
          <p className="mt-1 text-sm leading-6 text-slate-300">{body}</p>
        </div>
      ))}
    </div>
  );
}

function renderVisual(kind: PageContent["heroVisual"]) {
  if (kind === "dashboard") return <DashboardVisual />;
  if (kind === "solutions") return <SolutionsVisual />;
  if (kind === "stack") return <StackVisual />;
  if (kind === "process") return <ProcessVisual />;
  if (kind === "results") return <ResultsVisual />;
  return <AboutVisual />;
}

function DashboardVisual() {
  return (
    <div className="relative mx-auto max-w-[760px]">
      <Wave />
      <div className="relative rotate-3 rounded-3xl border border-blue-300/40 bg-[#071225] p-5 shadow-[0_35px_110px_rgba(37,99,235,0.28)]">
        <div className="grid gap-4 lg:grid-cols-[150px_1fr]">
          <div className="rounded-2xl border border-blue-400/15 p-4">
            <Logo small />
            {["Dashboard", "Projects", "Automations", "Tasks", "Clients", "Reports"].map((item) => <p key={item} className="mt-4 text-sm text-slate-400">{item}</p>)}
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Overview</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {["23 Active", "1,248 Hours", "4,562 Tasks"].map((item) => <div key={item} className="rounded-xl border border-blue-400/20 p-4 text-center text-cyan-300">{item}</div>)}
            </div>
            <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_180px]">
              <Chart />
              <div className="rounded-xl border border-blue-400/20 p-5 text-center"><div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border-[16px] border-cyan-400 border-r-fuchsia-500 text-3xl font-semibold">68%</div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -right-4 bottom-6 w-44 rounded-3xl border border-blue-400/30 bg-[#061226] p-4 shadow-2xl">
        <p className="font-semibold">Automation Impact</p>
        {["Time Saved 1,248 hrs", "Tasks Automated 4,562", "Errors Reduced 87%"].map((item) => <p key={item} className="mt-3 rounded-lg border border-blue-400/15 p-2 text-xs text-slate-300">{item}</p>)}
      </div>
    </div>
  );
}

function SolutionsVisual() {
  return (
    <div className="relative mx-auto grid max-w-[780px] items-center gap-4 lg:grid-cols-[1fr_auto_1.2fr_1fr]">
      <ListBox title="THE CHAOS" color="rose" items={["Manual & repetitive work", "Disconnected systems", "Lost leads & opportunities", "Slow response times", "Human errors", "No real-time visibility"]} />
      <div className="text-6xl font-black text-cyan-300">-&gt;</div>
      <SystemPanel />
      <ListBox title="THE SOLUTION" color="cyan" items={["Automated workflows", "Integrated systems", "Captured leads", "Faster responses", "Reduced errors", "Real-time insights"]} />
    </div>
  );
}

function StackVisual() {
  return (
    <div className="relative mx-auto flex max-w-[760px] items-center justify-center py-12">
      <CircuitGrid />
      <div className="relative flex h-72 w-72 items-center justify-center rounded-[2rem] border border-cyan-300/40 bg-gradient-to-br from-blue-600/35 to-fuchsia-600/25 shadow-[0_0_90px_rgba(34,211,238,0.28)]">
        <Logo />
      </div>
      {["AUTOMATE WORKFLOWS", "INTEGRATE SYSTEMS", "AI ASSISTANTS", "UNIFIED DATA", "BETTER DECISIONS", "BUSINESS GROWTH"].map((item, index) => (
        <span key={item} className={`absolute rounded-lg border border-blue-400/30 bg-[#061226]/90 px-5 py-4 text-sm font-semibold ${index < 3 ? "left-0" : "right-0"} ${["top-4", "top-32", "bottom-6", "top-4", "top-32", "bottom-6"][index]}`}>
          {item}
        </span>
      ))}
    </div>
  );
}

function ProcessVisual() {
  return (
    <div className="relative mx-auto flex max-w-[780px] items-end justify-center gap-3 py-16">
      <CircuitGrid />
      {["01", "02", "03", "04", "05"].map((item, index) => (
        <div key={item} className="flex h-24 w-28 items-center justify-center rounded-xl border border-blue-400/50 bg-blue-600/20 text-4xl font-semibold text-cyan-200 shadow-[0_0_45px_rgba(37,99,235,0.35)]" style={{ transform: `translateY(${-index * 24}px)` }}>
          {item}
        </div>
      ))}
      <div className="-ml-2 mb-32 flex h-28 w-28 items-center justify-center rounded-full border border-fuchsia-400 text-3xl font-semibold text-fuchsia-300">GO</div>
    </div>
  );
}

function ResultsVisual() {
  return (
    <Panel className="mx-auto max-w-[760px]">
      <div className="flex justify-between">
        <h3 className="text-2xl font-semibold">Business Impact Overview</h3>
        <span className="rounded-lg border border-blue-400/30 px-4 py-2 text-sm">This Month</span>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-4">
        {["148 Hours", "1,248 Tasks", "72% Faster", "28% Reduction"].map((item) => <div key={item} className="rounded-lg border border-blue-400/25 p-4 text-2xl font-semibold">{item}<p className="mt-2 text-sm text-emerald-400">Up 52%</p></div>)}
      </div>
      <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_220px]">
        <Chart />
        <div className="rounded-xl border border-blue-400/20 p-5 text-center"><div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full border-[18px] border-blue-400 border-l-fuchsia-500 text-4xl font-semibold">84%</div></div>
      </div>
    </Panel>
  );
}

function AboutVisual() {
  return (
    <div className="relative mx-auto flex max-w-[760px] items-center justify-center py-12">
      <CircuitGrid />
      <div className="relative flex h-80 w-80 items-center justify-center rounded-[2rem] border border-cyan-300/40 bg-gradient-to-br from-blue-600/35 to-fuchsia-600/25 shadow-[0_0_100px_rgba(34,211,238,0.25)]">
        <Logo />
      </div>
      {["AI & AUTOMATION", "WORKFLOWS", "INTEGRATIONS", "DATA & INSIGHTS", "SYSTEMS", "GROWTH"].map((item, index) => (
        <span key={item} className={`absolute rounded-lg border border-blue-400/30 bg-[#061226]/90 px-5 py-4 text-sm font-semibold ${index % 2 === 0 ? "left-0" : "right-0"} ${["top-0", "top-0", "top-36", "top-36", "bottom-0", "bottom-0"][index]}`}>
          {item}
        </span>
      ))}
    </div>
  );
}

function Panel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`rounded-lg border border-blue-400/25 bg-[#041020]/75 p-6 shadow-[0_0_70px_rgba(2,132,199,0.07)] ${className}`}>{children}</section>;
}

function ListBox({ title, items, color }: { title: string; items: string[]; color: "rose" | "cyan" }) {
  const colorClass = color === "rose" ? "border-rose-500/50 text-rose-400" : "border-cyan-400/50 text-cyan-300";
  return (
    <div className={`rounded-lg border bg-[#061226]/85 p-5 ${colorClass}`}>
      <h3 className="font-semibold">{title}</h3>
      <CheckList items={items} color={color} />
    </div>
  );
}

function CheckList({ items, color }: { items: string[]; color: "cyan" | "violet" | "rose" }) {
  const tone = color === "cyan" ? "text-cyan-300" : color === "rose" ? "text-rose-400" : "text-fuchsia-400";
  return (
    <ul className="mt-4 space-y-2 text-sm text-slate-300">
      {items.map((item) => <li key={item} className="flex gap-2"><span className={tone}>{color === "rose" ? "x" : "ok"}</span><span>{item}</span></li>)}
    </ul>
  );
}

function Divider() {
  return <div className="my-5 h-px bg-blue-400/20" />;
}

function IconPill({ icon, small = false }: { icon: string; small?: boolean }) {
  return <div className={`${small ? "mx-auto h-12 w-12 text-sm" : "h-16 w-16 text-lg"} flex items-center justify-center rounded-full border border-cyan-400/70 bg-cyan-400/5 font-semibold text-cyan-300 shadow-[0_0_26px_rgba(34,211,238,0.12)]`}>{icon}</div>;
}

function CalendarIcon() {
  return <div className="flex h-32 w-40 items-center justify-center rounded-2xl border border-violet-400 bg-violet-500/10 text-5xl text-cyan-300 shadow-[0_0_45px_rgba(124,58,237,0.32)]">CAL</div>;
}

function Notice({ children }: { children: React.ReactNode }) {
  return <div className="mt-4 rounded-lg border border-blue-400/25 bg-[#041020]/80 px-6 py-3 text-center text-sm text-slate-400">i&nbsp;&nbsp; {children}</div>;
}

function Logo({ small = false }: { small?: boolean }) {
  return <span className={`${small ? "h-8 w-8 text-xl" : "h-12 w-12 text-3xl"} flex items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 via-blue-500 to-cyan-300 font-black tracking-[-0.16em]`}>N</span>;
}

function Backdrop() {
  return <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_32%,rgba(37,99,235,0.22),transparent_28rem),radial-gradient(circle_at_86%_62%,rgba(168,85,247,0.16),transparent_24rem)]" />;
}

function CircuitGrid() {
  return <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.07)_1px,transparent_1px)] bg-[size:44px_44px] opacity-60" />;
}

function Wave() {
  return <div className="absolute inset-x-0 top-1/2 h-44 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.28),transparent_62%),linear-gradient(100deg,transparent,rgba(37,99,235,0.34),rgba(168,85,247,0.3),transparent)] blur-sm" />;
}

function Chart() {
  return (
    <div className="relative h-52 rounded-xl border border-blue-400/20 bg-white/[0.025] p-4">
      <div className="absolute inset-4 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:100%_32px]" />
      <svg className="relative h-full w-full" viewBox="0 0 420 180" aria-hidden="true">
        <path d="M0 128 C42 90 60 48 102 84 C146 124 160 68 204 92 C252 118 268 30 320 58 C360 82 378 42 420 18" fill="none" stroke="#22d3ee" strokeWidth="4" />
        <path d="M0 128 C42 90 60 48 102 84 C146 124 160 68 204 92 C252 118 268 30 320 58 C360 82 378 42 420 18 L420 180 L0 180Z" fill="rgba(124,58,237,.3)" />
      </svg>
    </div>
  );
}

function SystemPanel() {
  return <div className="rounded-2xl border border-blue-400/35 bg-[#061226] p-6 shadow-[0_0_70px_rgba(37,99,235,0.2)]"><Chart /><div className="mt-4 grid grid-cols-3 gap-3">{["CRM", "AI", "DATA", "DOC", "PAY", "CHAT"].map((i) => <div key={i} className="rounded border border-cyan-400/25 p-2 text-center text-cyan-300">{i}</div>)}</div></div>;
}

function ChaosOrb() {
  return <div className="flex h-64 items-center justify-center rounded-full border border-rose-500/40 bg-rose-500/10 text-4xl text-rose-400 shadow-[0_0_55px_rgba(244,63,94,0.14)]">CHAOS</div>;
}

function ClarityOrb() {
  return <div className="flex h-64 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-400/10 text-4xl text-cyan-300 shadow-[0_0_55px_rgba(34,211,238,0.14)]">CLEAR</div>;
}
