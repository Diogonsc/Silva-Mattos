import Image from "next/image";
import heroOffice from "@/app/assets/hero-office.png";
import { Container } from "@/app/components/ui/container";
import { Eyebrow } from "@/app/components/ui/eyebrow";
import { ButtonLink } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { heroStats } from "@/app/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden text-white-warm">
      <Image
        src={heroOffice}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[68%_78%] hero-fade"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-blue-dark/82" aria-hidden="true" />

      <div className="relative z-[1]">
        <Container className="py-20 md:py-28 lg:py-32">
          <div className="max-w-[40rem]">
            <div className="hero-enter">
              <Eyebrow>Atuação no Rio de Janeiro</Eyebrow>
            </div>

            <h1 className="hero-enter hero-enter-delay-1 mt-6 font-serif text-[clamp(2.5rem,5vw,4.1rem)] leading-[1.08] font-medium tracking-[0.01em] text-white">
              Defesa técnica, conduzida com{" "}
              <em className="italic text-gold">discrição e rigor</em>.
            </h1>

            <p className="hero-enter hero-enter-delay-2 mt-7 max-w-[34rem] text-[1.05rem] leading-relaxed text-white-warm/78">
              Escritório especializado em Direito Trabalhista, Previdenciário e
              Cível, com atendimento online e presencial, do primeiro contato à
              decisão.
            </p>

            <div className="hero-enter hero-enter-delay-3 mt-10 flex flex-wrap items-center gap-4">
              <ButtonLink
                href="#contato"
                variant="primary"
                className="w-full md:w-auto"
              >
                Agendar consulta
              </ButtonLink>
              <ButtonLink
                href="#areas"
                variant="ghost"
                className="w-full md:w-auto"
              >
                Conhecer as áreas
              </ButtonLink>
            </div>
          </div>
        </Container>

        <Separator className="bg-white-warm/12" />
        <div className="bg-blue-dark/35 backdrop-blur-[2px]">
          <Container className="grid grid-cols-1 md:grid-cols-3">
            {heroStats.map((stat, index) => (
              <div
                key={stat.value}
                className="relative px-0 py-7 md:px-8 md:py-9 first:md:pl-0 last:md:pr-0"
              >
                {index > 0 ? (
                  <>
                    <Separator className="absolute inset-x-0 top-0 bg-white-warm/12 md:hidden" />
                    <Separator
                      orientation="vertical"
                      className="absolute top-0 bottom-0 left-0 hidden bg-white-warm/12 md:block"
                    />
                  </>
                ) : null}
                <p className="font-serif text-[1.35rem] font-medium text-white md:text-[1.5rem]">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-[0.88rem] text-white-warm/55">
                  {stat.label}
                </p>
              </div>
            ))}
          </Container>
        </div>
      </div>
    </section>
  );
}
