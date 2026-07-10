import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const audiences = [
  ["Service businesses", "Teams handling client work, proposals, approvals, onboarding, delivery, and support."],
  ["Consultants and agencies", "Operators who need repeatable delivery systems without losing the premium client experience."],
  ["Founder-led teams", "Growing businesses where too much operational knowledge still lives in one person's head."],
  ["Operations-heavy teams", "Teams with enough tools, but not enough visibility, ownership, or connected workflow logic."],
];

export function AudienceSection() {
  return (
    <section id="audience" className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <SectionHeading
            eyebrow="Who this is for"
            title="Built for teams that have outgrown improvised operations."
            description="Nuvrixa is a strong fit when the business is moving, the tools exist, but the operating model is still too manual, scattered, or invisible."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {audiences.map(([title, detail]) => (
              <a
                key={title}
                href="#discovery"
                className="group rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/10"
              >
                <span className="mb-8 block h-2 w-16 rounded-full bg-gradient-to-r from-cyan-300 to-violet-400" />
                <h3 className="text-2xl font-semibold text-white">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{detail}</p>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
