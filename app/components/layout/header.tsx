"use client";

import { MenuIcon } from "lucide-react";
import { BrandMark } from "@/app/components/ui/brand-mark";
import { Button, ButtonLink } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/app/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/92 backdrop-blur-[10px]">
      <nav className="mx-auto flex max-w-[1160px] items-center justify-between px-5 py-4 md:px-8">
        <a href="#" className="flex items-center gap-3" aria-label="Souza & Mattos">
          <BrandMark />
        </a>

        <div className="hidden items-center gap-10 text-[0.88rem] tracking-[0.03em] md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative py-1 text-blue transition-colors"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-[width] duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <ButtonLink
          href="#contato"
          variant="secondary"
          size="sm"
          className="hidden whitespace-nowrap md:inline-flex"
        >
          Fale conosco
        </ButtonLink>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              type="button"
              variant="outline"
              size="icon-sm"
              className="border-transparent md:hidden"
              aria-label="Abrir menu"
            >
              <MenuIcon className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-xs gap-0 bg-background p-0">
            <SheetHeader className="border-b border-border px-5 py-5">
              <SheetTitle className="font-serif text-lg text-blue-dark">
                Menu
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-1 px-5 py-6">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.href}>
                  <a href={link.href} className="py-3 text-blue">
                    {link.label}
                  </a>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <ButtonLink
                  href="#contato"
                  variant="secondary"
                  size="sm"
                  className="mt-3 self-start"
                >
                  Fale conosco
                </ButtonLink>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
