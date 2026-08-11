import { IconWhatsApp } from "@/app/components/icons/social";
import { Container } from "@/app/components/ui/container";
import { Eyebrow } from "@/app/components/ui/eyebrow";
import { Separator } from "@/components/ui/separator";
import { practiceAreas, site } from "@/app/lib/site";

const footerNav = [
  { href: "#escritorio", label: "O escritório" },
  { href: "#advogados", label: "Advogados" },
  { href: "#contato", label: "Contato" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blue-dark">
      <Container className="pt-20 pb-10 md:pt-[80px] md:pb-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10 lg:grid-cols-4 lg:gap-12">
          <div className="max-w-[18rem]">
            <a href="#" className="inline-flex items-baseline gap-2.5" aria-label="Souza & Mattos">
              <span
                aria-hidden="true"
                className="font-serif text-[1.35rem] font-medium leading-none tracking-[0.02em] text-white"
              >
                <span>S</span>
                <span className="-ml-[0.08em]">M</span>
              </span>
              <span className="font-serif text-[1.25rem] font-medium tracking-[0.01em] text-white">
                {site.name}
              </span>
            </a>
            <p className="mt-3 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-gray">
              Advocacia e Consultoria Jurídica
            </p>
          </div>

          <FooterColumn title="Áreas de atuação">
            {practiceAreas.map((area) => (
              <a
                key={area.id}
                href={`#${area.id}`}
                className="text-[0.9rem] text-white-warm/70 transition-colors hover:text-gold"
              >
                {area.title}
              </a>
            ))}
          </FooterColumn>

          <FooterColumn title="Navegação">
            {footerNav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.9rem] text-white-warm/70 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </FooterColumn>

          <FooterColumn title="Contato">
            <div className="flex items-center gap-2.5">
              <a
                href={site.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.9rem] text-white-warm/70 transition-colors hover:text-gold"
              >
                {site.whatsapp.display}
              </a>
              <a
                href={site.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex text-white-warm/70 transition-colors hover:text-gold"
              >
                <IconWhatsApp className="h-3.5 w-3.5" />
              </a>
            </div>
            <a
              href={site.email.href}
              className="text-[0.9rem] break-all text-white-warm/70 transition-colors hover:text-gold"
            >
              {site.email.display}
            </a>
            <p className="text-[0.9rem] text-white-warm/70">{site.location}</p>
          </FooterColumn>
        </div>

        <Separator className="my-10 bg-gold/25" />

        <div className="flex flex-col gap-4 text-[0.78rem] leading-relaxed text-gray md:flex-row md:items-center md:justify-between md:gap-8">
          <p>
            © {year} {site.name} Advogados — {site.oabRegistry}
          </p>
          <p className="md:text-right">{site.oabNote}</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Eyebrow className="mb-5 block">{title}</Eyebrow>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}
