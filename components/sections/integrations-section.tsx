import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { IntegrationOrbitVisual } from "@/components/visuals/section-visuals";
import { integrations } from "@/data/site-content";

const integrationGroups = [
  ["Intake", "Forms, email, WhatsApp, calendar"],
  ["Knowledge", "Docs, folders, notes, proposals"],
  ["Delivery", "CRM, project tools, approvals"],
  ["Visibility", "Dashboards, alerts, summaries"],
];

export function IntegrationsSection() {
  return (
    <section id="integrations" className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <SectionHeading
            eyebrow="Integrations"
            title="Connect everything. Work as one."
            description="Nuvrixa connects the tools your business already trusts without implying a forced platform switch or full stack rebuild."
          />
          <div>
            <IntegrationOrbitVisual />
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {integrations.slice(0, 6).map((integration) => (
                <a key={integration} href="#discovery" className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm font-medium text-slate-100 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/10">
                  <span className="mr-3 inline-block h-2 w-2 rounded-full bg-cyan-300" />
                  {integration}
                </a>
              ))}
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {integrationGroups.map(([title, detail]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <p className="font-semibold text-white">{title}</p>
                  <p className="mt-1 text-sm text-slate-400">{detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4 text-sm leading-6 text-cyan-50">
              Interface concepts are illustrative. Final integrations depend on each client&apos;s current tools, permissions, and workflow priorities.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
