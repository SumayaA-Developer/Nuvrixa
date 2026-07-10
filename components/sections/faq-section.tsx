import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqs } from "@/data/site-content";

export function FaqSection() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Clear answers before the first call."
          description="A premium system should feel transparent from the start."
          align="center"
        />
        <div className="mx-auto mt-12 grid max-w-4xl gap-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 open:border-cyan-300/40 open:bg-cyan-300/10"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold text-white">
                <span className="mr-3 text-cyan-200">+</span>
                {faq.question}
              </summary>
              <p className="mt-4 leading-7 text-slate-300">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
