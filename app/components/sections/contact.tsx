"use client";

import { useState, type FormEvent } from "react";
import { IconWhatsApp, IconLinkedIn, IconInstagram } from "@/app/components/icons/social";
import { Container } from "@/app/components/ui/container";
import { Eyebrow } from "@/app/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { interestAreas, site } from "@/app/lib/site";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [area, setArea] = useState<string>(interestAreas[0]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contato" className="bg-white-warm py-20 md:py-[120px]">
      <Container>
        <div className="grid grid-cols-1 overflow-hidden border border-border md:grid-cols-[1fr_1.05fr]">
          <div className="bg-blue-dark px-7 py-11 text-white-warm md:px-12 md:py-14 lg:px-14">
            <Eyebrow>Contato</Eyebrow>
            <h2 className="mt-4 font-serif text-[clamp(1.55rem,2.5vw,2.05rem)] leading-[1.2] font-medium tracking-[0.01em] text-white">
              Descreva seu caso. Respondemos em até um dia útil.
            </h2>
            <p className="mt-5 max-w-[28rem] text-[0.98rem] leading-relaxed text-white-warm/65">
              Fale por telefone, WhatsApp ou e-mail — ou use o formulário ao
              lado.
            </p>

            <div className="mt-10 space-y-6">
              <ContactLine label="Telefone / WhatsApp">
                <a href={site.whatsapp.href}>{site.whatsapp.display}</a>
              </ContactLine>
              <ContactLine label="E-mail">
                <a href={site.email.href}>{site.email.display}</a>
              </ContactLine>
              <ContactLine label="Atendimento">{site.location}</ContactLine>
            </div>

            <div className=" flex mt-10 gap-2">
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="border-white-warm/20 text-white-warm hover:border-gold hover:bg-transparent hover:text-gold"
              >
                <a
                  href={site.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <IconWhatsApp />
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="border-white-warm/20 text-white-warm hover:border-gold hover:bg-transparent hover:text-gold"
              >
                <a
                  href={site.instagram.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <IconInstagram />
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="border-white-warm/20 text-white-warm hover:border-gold hover:bg-transparent hover:text-gold"
              >
                <a
                  href={site.linkedin.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <IconLinkedIn />
                </a>
              </Button>
            </div>
          </div>

          <form
            className="flex flex-col gap-6 bg-background px-7 py-11 md:px-12 md:py-14 lg:px-14"
            onSubmit={handleSubmit}
          >
            <Field id="nome" label="Nome">
              <Input
                id="nome"
                name="nome"
                type="text"
                placeholder="Seu nome completo"
                autoComplete="name"
                required
              />
            </Field>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Field id="email" label="E-mail">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  autoComplete="email"
                  required
                />
              </Field>
              <Field id="telefone" label="Telefone">
                <Input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  placeholder="(21) 90000-0000"
                  autoComplete="tel"
                />
              </Field>
            </div>

            <Field id="area" label="Área de interesse">
              <input type="hidden" name="area" value={area} />
              <Select value={area} onValueChange={setArea}>
                <SelectTrigger
                  id="area"
                  className="h-auto w-full rounded-none border-0 border-b border-input bg-transparent px-0.5 py-2.5 text-[0.98rem] shadow-none focus-visible:border-ring focus-visible:ring-0 dark:bg-transparent dark:hover:bg-transparent"
                >
                  <SelectValue placeholder="Selecione uma área" />
                </SelectTrigger>
                <SelectContent position="popper" align="start" className="w-(--radix-select-trigger-width)">
                  {interestAreas.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            <Field id="resumo" label="Resumo do caso">
              <Textarea
                id="resumo"
                name="resumo"
                placeholder="Descreva brevemente o seu caso"
                required
              />
            </Field>

            <Button type="submit" variant="solid" className="mt-1 self-start">
              Enviar mensagem
            </Button>

            {submitted ? (
              <p className="text-sm text-blue" role="status">
                Mensagem registrada. Em breve entraremos em contato.
              </p>
            ) : null}

            <p className="text-[0.8rem] leading-relaxed text-muted-foreground">
              As informações enviadas são tratadas sob sigilo profissional,
              nos termos do Código de Ética e Disciplina da OAB.
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}

function ContactLine({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <span className="mb-1 block text-[0.72rem] uppercase tracking-[0.14em] text-gold">
        {label}
      </span>
      <div className="text-[0.98rem] text-white-warm">{children}</div>
    </div>
  );
}
