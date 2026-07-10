const toolNodes = ["CRM", "Docs", "Forms", "Calendar", "Email", "Chat"];

export function EnergyBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(34,211,238,0.04)_1px,transparent_1px),linear-gradient(rgba(124,58,237,0.04)_1px,transparent_1px)] bg-[size:84px_84px]" />
      <div className="absolute -left-24 top-24 h-px w-[55rem] rotate-12 bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
      <div className="absolute -right-28 top-56 h-px w-[48rem] -rotate-12 bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />
      <div className="absolute bottom-10 left-1/2 h-52 w-[70rem] -translate-x-1/2 rounded-[50%] border border-cyan-300/10" />
      <div className="absolute bottom-16 left-1/2 h-36 w-[56rem] -translate-x-1/2 rounded-[50%] border border-violet-400/10" />
      {Array.from({ length: 18 }).map((_, index) => (
        <span
          key={index}
          className="particle-dot absolute h-1 w-1 rounded-full bg-cyan-200/70"
          style={{
            left: `${8 + ((index * 17) % 84)}%`,
            top: `${12 + ((index * 23) % 70)}%`,
            animationDelay: `${index * 180}ms`,
          }}
        />
      ))}
    </div>
  );
}

export function ProblemChaosVisual() {
  const alerts = [
    ["Inbox", "Unread requests", "12"],
    ["Tasks", "No owner", "7"],
    ["Files", "Pending review", "18"],
    ["Follow-up", "At risk", "5"],
  ];

  return (
    <div className="showcase-frame relative min-h-[34rem] overflow-hidden rounded-[2.5rem] p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(239,68,68,0.16),transparent_28rem)]" />
      <svg className="absolute inset-0 h-full w-full opacity-70" viewBox="0 0 640 420" aria-hidden="true">
        <path d="M80 90 C220 30 280 180 430 90 S560 130 590 60" stroke="rgba(248,113,113,.45)" strokeWidth="1.5" fill="none" strokeDasharray="8 10" />
        <path d="M50 310 C180 180 250 340 400 250 S530 250 610 340" stroke="rgba(124,58,237,.38)" strokeWidth="1.5" fill="none" strokeDasharray="4 12" />
        <path d="M110 190 C250 250 300 70 520 220" stroke="rgba(34,211,238,.32)" strokeWidth="1.5" fill="none" strokeDasharray="2 14" />
      </svg>
      <div className="relative grid min-h-[31rem] gap-4 sm:grid-cols-2">
        {alerts.map(([title, detail, count], index) => (
          <div
            key={title}
            className="chaos-card rounded-[1.5rem] border border-red-300/20 bg-slate-950/78 p-5 shadow-[0_0_40px_rgba(239,68,68,0.08)]"
            style={{ transform: `translateY(${index % 2 ? 34 : 0}px) rotate(${index % 2 ? -1.5 : 1.5}deg)` }}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.26em] text-red-200">{title}</p>
                <p className="mt-3 text-xl font-semibold text-white">{detail}</p>
              </div>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-red-500/15 text-sm font-bold text-red-100">
                {count}
              </span>
            </div>
            <div className="mt-8 space-y-2">
              <span className="block h-2 rounded-full bg-red-300/20" />
              <span className="block h-2 w-2/3 rounded-full bg-violet-300/20" />
              <span className="block h-2 w-1/2 rounded-full bg-cyan-300/15" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SolutionFlowVisual() {
  const stages = ["Capture", "Route", "Approve", "Report"];

  return (
    <div className="showcase-frame relative overflow-hidden rounded-[2.5rem] p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.16),transparent_25rem)]" />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 lg:flex-row lg:justify-between">
        {stages.map((stage, index) => (
          <div key={stage} className="group relative flex w-full flex-1 flex-col items-center text-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-cyan-300/35 bg-slate-950/80 shadow-[0_0_50px_rgba(34,211,238,0.18)] transition group-hover:-translate-y-1 group-hover:border-cyan-200/70">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">{stage}</span>
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-300">
              {["Inputs become structured.", "Owners and timing are clear.", "Humans stay in control.", "Leadership sees the system."][index]}
            </p>
            {index < stages.length - 1 ? (
              <span className="signal-line mt-6 hidden h-px w-full bg-gradient-to-r from-cyan-300 via-violet-400 to-cyan-300 lg:absolute lg:left-[62%] lg:top-12 lg:mt-0 lg:block" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export function CapabilityConstellation() {
  const modules = ["Workflow", "Integrations", "Dashboards", "Portal", "Governance", "Launch"];

  return (
    <div className="showcase-frame relative mt-12 overflow-hidden rounded-[2.5rem] p-6">
      <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20 bg-cyan-300/5" />
      <div className="relative grid gap-4 md:grid-cols-3">
        {modules.map((module, index) => (
          <a
            key={module}
            href="#discovery"
            className="group rounded-[1.5rem] border border-white/10 bg-slate-950/76 p-5 transition hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-cyan-300/10"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/25 bg-gradient-to-br from-cyan-300/15 to-violet-500/15 text-sm font-semibold text-cyan-100">
              0{index + 1}
            </span>
            <p className="mt-8 text-xl font-semibold text-white">{module}</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">Designed as part of one operating layer, not a disconnected deliverable.</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export function IntegrationOrbitVisual() {
  return (
    <div className="showcase-frame relative min-h-[34rem] overflow-hidden rounded-[2.5rem] p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_26rem)]" />
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/25" />
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/20" />
      <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/10" />
      <div className="relative flex min-h-[31rem] items-center justify-center">
        <div className="z-10 flex h-40 w-40 items-center justify-center rounded-full border border-cyan-200/45 bg-slate-950/90 text-center shadow-[0_0_90px_rgba(34,211,238,0.28)]">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-200">Nuvrixa</p>
            <p className="mt-2 text-lg font-semibold text-white">Core</p>
          </div>
        </div>
        {toolNodes.map((node, index) => {
          const angle = (index / toolNodes.length) * Math.PI * 2;
          const x = Math.cos(angle) * 205;
          const y = Math.sin(angle) * 150;
          return (
            <div
              key={node}
              className="orbit-node absolute rounded-2xl border border-white/10 bg-slate-950/82 px-5 py-4 text-sm font-semibold text-white shadow-[0_0_32px_rgba(34,211,238,0.12)]"
              style={{ transform: `translate(${x}px, ${y}px)` }}
            >
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-cyan-300" />
              {node}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function ProcessPipelineVisual() {
  const steps = ["Discover", "Map", "Design", "Launch", "Improve"];

  return (
    <div className="showcase-frame relative mt-12 overflow-hidden rounded-[2.5rem] p-6">
      <div className="absolute left-10 right-10 top-1/2 hidden h-px bg-gradient-to-r from-violet-400 via-cyan-300 to-blue-400 lg:block" />
      <div className="relative grid gap-4 lg:grid-cols-5">
        {steps.map((step, index) => (
          <div key={step} className="rounded-[1.5rem] border border-white/10 bg-slate-950/76 p-5 text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-300 text-lg font-bold text-white shadow-[0_0_34px_rgba(34,211,238,0.24)]">
              {index + 1}
            </span>
            <p className="mt-6 text-xl font-semibold text-white">{step}</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">A clear checkpoint with visible outputs and next actions.</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DashboardPreviewVisual() {
  return (
    <div className="showcase-frame relative overflow-hidden rounded-[2.5rem] p-5">
      <div className="rounded-[2rem] border border-white/10 bg-slate-950/86 p-5">
        <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-200">Client portal</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">Project operating view</h3>
          </div>
          <div className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-xs text-cyan-100">Live status layer</div>
        </div>
        <div className="mt-5 grid gap-4 lg:grid-cols-[0.75fr_1.25fr_0.75fr]">
          <div className="space-y-3">
            {["Dashboard", "Projects", "Tasks", "Files", "Messages"].map((item, index) => (
              <div key={item} className={`rounded-2xl border border-white/10 p-3 text-sm ${index === 0 ? "bg-violet-500/30 text-white" : "bg-white/[0.035] text-slate-300"}`}>
                {item}
              </div>
            ))}
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5">
            <p className="font-semibold text-white">Blueprint progress</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-4">
              {["Discovery", "Planning", "Design", "Launch"].map((item, index) => (
                <div key={item} className="text-center">
                  <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-xs text-cyan-100">{index + 1}</span>
                  <p className="mt-3 text-xs text-slate-300">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 h-3 rounded-full bg-white/10">
              <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-cyan-300 to-violet-400" />
            </div>
          </div>
          <div className="space-y-3">
            {["Approval needed", "Proposal uploaded", "Next session booked"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm text-slate-200">
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-cyan-300" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function BlueprintStoryVisual() {
  const columns = [
    ["Before", "Scattered intake", "Manual routing", "Hidden status"],
    ["Blueprint", "Mapped workflow", "AI-assisted drafts", "Human checkpoints"],
    ["Result", "Clear next steps", "Visible owners", "Improvement loop"],
  ];

  return (
    <div className="showcase-frame rounded-[2.5rem] p-5">
      <div className="grid gap-4 lg:grid-cols-3">
        {columns.map(([title, first, second, third], index) => (
          <div key={title} className="rounded-[1.5rem] border border-white/10 bg-slate-950/76 p-5">
            <p className={`text-sm font-semibold uppercase tracking-[0.28em] ${index === 0 ? "text-red-200" : "text-cyan-200"}`}>{title}</p>
            {[first, second, third].map((item) => (
              <div key={item} className="mt-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm text-slate-200">
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function DiscoveryWorkflowVisual() {
  return (
    <div className="showcase-frame relative overflow-hidden rounded-[2.5rem] p-5">
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-[1.5rem] border border-violet-300/20 bg-slate-950/78 p-5">
          <p className="text-xs uppercase tracking-[0.28em] text-violet-200">Tell us about operations</p>
          {["Name", "Email", "Primary bottleneck", "Workflow notes"].map((field) => (
            <div key={field} className="mt-4 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-slate-400">
              {field}
            </div>
          ))}
        </div>
        <div className="rounded-[1.5rem] border border-cyan-300/20 bg-slate-950/78 p-5">
          <p className="text-xs uppercase tracking-[0.28em] text-cyan-200">Select audit session</p>
          <div className="mt-5 grid grid-cols-5 gap-2">
            {Array.from({ length: 20 }).map((_, index) => (
              <span key={index} className={`h-9 rounded-lg border ${index % 4 === 0 ? "border-cyan-300/50 bg-cyan-300/15" : "border-white/10 bg-white/[0.035]"}`} />
            ))}
          </div>
          <div className="mt-5 rounded-2xl bg-cyan-300 px-4 py-3 text-center text-sm font-semibold text-slate-950">Book AI Systems Audit</div>
        </div>
      </div>
    </div>
  );
}

export function TransformationCtaVisual() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-950/20 bg-white/20 blur-sm" />
      <div className="absolute left-1/2 top-1/2 h-px w-[120%] -translate-x-1/2 rotate-6 bg-gradient-to-r from-transparent via-slate-950/30 to-transparent" />
      <div className="absolute left-1/2 top-1/2 h-px w-[120%] -translate-x-1/2 -rotate-6 bg-gradient-to-r from-transparent via-slate-950/20 to-transparent" />
    </div>
  );
}
