const orbitNodes = [
  { label: "CRM", className: "left-4 top-20" },
  { label: "AI", className: "right-6 top-10" },
  { label: "Ops", className: "bottom-16 left-10" },
  { label: "Client", className: "bottom-10 right-8" },
];

const queueItems = [
  ["Lead intake", "Validated", "98%"],
  ["Proposal draft", "AI assisted", "12m"],
  ["Client handover", "Ready", "4 tasks"],
];

export function NuvrixaOsVisual() {
  return (
    <div className="glass-panel neon-border scanline float-slow relative mx-auto w-full max-w-xl overflow-hidden rounded-[2rem] p-4 sm:p-5">
      <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/85 p-4 sm:p-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-200">Nuvrixa OS</p>
            <p className="mt-1 text-sm text-slate-400">Live automation command layer</p>
          </div>
          <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100">
            Online
          </span>
        </div>

        <div className="relative mt-5 min-h-[19rem] overflow-hidden rounded-[1.25rem] border border-white/10 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.16),rgba(15,23,42,0.18)_32%,rgba(2,6,23,0.8)_70%)] sm:mt-6 sm:min-h-[25rem]">
          <div className="absolute inset-8 rounded-full border border-cyan-300/15" />
          <div className="absolute inset-16 rounded-full border border-violet-300/15" />
          <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/40 bg-slate-950/90 shadow-[0_0_60px_rgba(34,211,238,0.32)]">
            <div className="flex h-full flex-col items-center justify-center text-center">
              <span className="text-xs uppercase tracking-[0.24em] text-cyan-200">Core</span>
              <span className="mt-1 text-lg font-semibold text-white">N</span>
            </div>
          </div>

          <div className="absolute left-1/2 top-1/2 h-px w-[82%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-200/30 to-transparent" />
          <div className="absolute left-1/2 top-1/2 h-[82%] w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-violet-200/25 to-transparent" />
          <div className="absolute left-1/2 top-1/2 h-px w-[74%] -translate-x-1/2 rotate-45 bg-gradient-to-r from-transparent via-blue-300/25 to-transparent" />
          <div className="absolute left-1/2 top-1/2 h-px w-[74%] -translate-x-1/2 -rotate-45 bg-gradient-to-r from-transparent via-cyan-300/25 to-transparent" />

          {orbitNodes.map((node) => (
            <div
              key={node.label}
              className={`pulse-node group absolute ${node.className} rounded-2xl border border-white/10 bg-slate-950/85 px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-cyan-300/10`}
            >
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-cyan-300" />
              {node.label}
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-3">
          {queueItems.map(([title, status, metric]) => (
            <div key={title} className="grid grid-cols-[1fr_auto] gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
              <div>
                <p className="text-sm font-medium text-white">{title}</p>
                <p className="mt-1 text-xs text-slate-400">{status}</p>
              </div>
              <span className="self-center rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                {metric}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
