import { IconWhatsApp } from "@/app/components/icons/social";
import { site } from "@/app/lib/site";
import { cn } from "@/lib/utils";

type WhatsAppButtonProps = {
  className?: string;
};

export function WhatsAppButton({ className }: WhatsAppButtonProps) {
  return (
    <a
      href={site.whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Falar no WhatsApp: ${site.whatsapp.display}`}
      className={cn(
        "fixed right-5 bottom-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgb(37_211_102_/_0.35)] transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 md:right-8 md:bottom-8",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366] motion-safe:animate-[whatsapp-pulse_2s_ease-out_infinite]"
      />
      <IconWhatsApp className="relative z-[1] h-7 w-7" />
    </a>
  );
}
