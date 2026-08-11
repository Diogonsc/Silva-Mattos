import { Container } from "@/app/components/ui/container";
import { Eyebrow } from "@/app/components/ui/eyebrow";
import { Separator } from "@/components/ui/separator";
import { officeQuote } from "@/app/lib/site";

export function About() {
  return (
    <section id="escritorio" className="bg-background py-20 md:py-[120px]">
      <Container className="grid grid-cols-1 items-center gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20 lg:gap-28">
        <div>
          <Eyebrow>O escritório</Eyebrow>
          <h2 className="mt-4 max-w-[18ch] font-serif text-[clamp(2rem,3.4vw,2.75rem)] leading-[1.15] font-medium tracking-[0.01em] text-blue-dark">
            Uma banca formada para durar.
          </h2>
        </div>

        <div>
          <p className="max-w-[36rem] text-[1.02rem] leading-relaxed text-blue">
            O Souza & Mattos nasceu da união entre trajetórias jurídicas
            complementares, unidas por um mesmo padrão de exigência: cada caso
            recebe estudo aprofundado antes de qualquer decisão.
          </p>
          <p className="mt-4 max-w-[36rem] text-[1.02rem] leading-relaxed text-blue">
            Atendemos de forma online e presencial no Rio de Janeiro, adaptando
            o formato à necessidade de cada cliente — sem abrir mão do rigor
            técnico.
          </p>

          <blockquote className="relative mt-10 max-w-[36rem] pl-7 md:mt-12 md:pl-10">
            <Separator
              orientation="vertical"
              className="absolute top-0 bottom-0 left-0 w-0.5 bg-gold data-vertical:w-0.5"
            />
            <p className="font-serif text-[clamp(1.45rem,2.6vw,2rem)] leading-[1.35] font-medium italic text-blue-dark">
              “{officeQuote.text}”
            </p>
            <footer className="mt-6 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-gold">
              {officeQuote.author} — {officeQuote.role}
            </footer>
          </blockquote>
        </div>
      </Container>
    </section>
  );
}
