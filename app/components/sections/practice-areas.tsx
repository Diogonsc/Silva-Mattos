import { Container } from "@/app/components/ui/container";
import { Eyebrow } from "@/app/components/ui/eyebrow";
import { Separator } from "@/components/ui/separator";
import { practiceAreas } from "@/app/lib/site";

export function PracticeAreas() {
  return (
    <section id="areas" className="bg-white-warm py-20 md:py-[120px]">
      <Container className="grid grid-cols-1 items-center gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20 lg:gap-28">
        <div>
          <Eyebrow>Áreas de atuação</Eyebrow>
          <h2 className="mt-4 max-w-[16ch] font-serif text-[clamp(2rem,3.4vw,2.75rem)] leading-[1.15] font-medium tracking-[0.01em] text-blue-dark">
            Três frentes, uma mesma exigência de profundidade.
          </h2>
        </div>

        <ol className="border-t border-border">
          {practiceAreas.map((area) => (
            <li key={area.numeral} id={area.id}>
              <div className="grid grid-cols-[auto_1fr] gap-5 py-8 md:gap-8 md:py-10">
                <span
                  aria-hidden="true"
                  className="pt-1 font-serif text-[1.35rem] font-medium text-gold md:text-[1.5rem]"
                >
                  {area.numeral}
                </span>
                <div>
                  <h3 className="font-serif text-[1.55rem] font-medium tracking-[0.01em] text-blue-dark md:text-[1.7rem]">
                    {area.title}
                  </h3>
                  <p className="mt-3 max-w-[38rem] text-[0.98rem] leading-relaxed text-muted-foreground">
                    {area.description}
                  </p>
                </div>
              </div>
              <Separator />
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
