import { Container } from "@/app/components/ui/container";
import { SectionHeading } from "@/app/components/ui/section-heading";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { partners } from "@/app/lib/site";

export function Partners() {
  return (
    <section id="advogados" className="border-t border-border bg-background py-20 md:py-[120px]">
      <Container>
        <SectionHeading eyebrow="Advogados" title="Quem conduz sua causa." />

        <div className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2">
          {partners.map((partner) => (
            <article
              key={partner.name}
              className="bg-background px-7 py-11 md:px-11 md:py-14"
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
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
