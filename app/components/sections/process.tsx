import { Container } from "@/app/components/ui/container";
import { Reveal } from "@/app/components/ui/reveal";
import { SectionHeading } from "@/app/components/ui/section-heading";
import { processSteps, site } from "@/app/lib/site";

export function Process() {
  return (
    <section
      id="atendimento"
      className="bg-blue-dark py-20 text-white-warm md:py-[120px]"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Como atendemos"
            title="Um método previsível, do primeiro contato à decisão."
            className="max-w-[70%]"
            titleClassName="text-white max-w-none"
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {processSteps.map((step, index) => (
            <Reveal
              as="article"
              key={step.number}
              delay={index * 100}
              className="bg-blue px-7 py-11 transition-[box-shadow] duration-200 hover:shadow-[0_16px_32px_rgb(0_0_0_/_0.28)] md:px-11 md:py-14"
            >
              <span className="font-serif text-[2.5rem] font-normal italic leading-none text-gold/90 md:text-[2.75rem]">
                {step.number}
              </span>
              <h3 className="mt-7 font-serif text-[1.4rem] font-medium text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-white-warm/65">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-10 max-w-[44rem] text-[0.92rem] leading-relaxed text-white-warm/55 md:mt-12">
            {site.attendanceNote}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
