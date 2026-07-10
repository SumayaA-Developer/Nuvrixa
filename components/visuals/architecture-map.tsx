const nodes = [
  ["Capture", "Forms, calls, emails"],
  ["Reason", "AI routing and drafting"],
  ["Act", "Tasks, alerts, handovers"],
  ["Measure", "Dashboards and insights"],
  ["Improve", "Roadmap and iteration"],
];

export function ArchitectureMap() {
  return (
    <div className="glass-panel neon-border relative overflow-hidden rounded-[2rem] p-5">
      <div className="absolute left-1/2 top-10 h-[calc(100%-5rem)] w-px -translate-x-1/2 bg-gradient-to-b from-cyan-300/0 via-cyan-300/40 to-cyan-300/0 lg:left-1/2" />
      <div className="relative grid gap-4 lg:grid-cols-5 lg:items-center">
        {nodes.map(([title, detail], index) => (
          <a
            key={title}
            href="#discovery"
            className="group relative rounded-[1.5rem] border border-white/10 bg-slate-950/75 p-5 transition duration-300 hover:-translate-y-2 hover:border-cyan-300/50 hover:bg-cyan-300/10 hover:shadow-[0_0_40px_rgba(34,211,238,0.16)]"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-sm font-semibold text-cyan-100">
              {index + 1}
            </span>
            <h3 className="mt-8 text-xl font-semibold text-white">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{detail}</p>
            <span className="absolute -right-2 top-1/2 hidden h-px w-4 bg-cyan-300/40 lg:block" />
          </a>
        ))}
      </div>
    </div>
  );
}
