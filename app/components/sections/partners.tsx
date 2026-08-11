import { Container } from "@/app/components/ui/container";
import { Reveal } from "@/app/components/ui/reveal";
import { SectionHeading } from "@/app/components/ui/section-heading";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { partners } from "@/app/lib/site";

export function Partners() {
  return (
    <section
      id="advogados"
      className="border-t border-border bg-background py-20 md:py-[120px]"
    >
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Advogados" title="Quem conduz sua causa." />
        </Reveal>

        <div className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2">
          {partners.map((partner, index) => (
            <Reveal
              as="article"
              key={partner.name}
              delay={index * 100}
              className="bg-background px-7 py-11 transition-[box-shadow] duration-200 hover:z-10 hover:shadow-[0_14px_30px_rgb(15_29_51_/_0.08)] md:px-11 md:py-14"
            >
              <Avatar
                size="lg"
                className="mb-7 size-14 after:border-gold after:mix-blend-normal"
              >
                <AvatarFallback className="bg-transparent font-serif text-[1.35rem] text-gold">
                  {partner.initials}
                </AvatarFallback>
              </Avatar>
              <h3 className="font-serif text-[1.85rem] font-medium tracking-[0.01em] text-blue-dark">
                {partner.name}
              </h3>
              <p className="mt-1.5 text-[0.92rem] text-muted-foreground">
                {partner.role}
              </p>
              <p className="mt-2 text-[0.78rem] uppercase tracking-[0.1em] text-gold">
                {partner.oab}
              </p>
              <Separator className="my-7 w-10" />
              <div className="flex flex-col gap-2 text-[0.9rem] text-blue">
                <a href={partner.phone.href} className="hover:text-gold">
                  {partner.phone.display}
                </a>
                <a href={partner.email.href} className="hover:text-gold">
                  {partner.email.display}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
