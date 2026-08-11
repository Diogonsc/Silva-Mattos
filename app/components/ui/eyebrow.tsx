import { cn } from "@/lib/utils";

type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <span
      className={cn(
        "font-sans text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold",
        className,
      )}
    >
      {children}
    </span>
  );
}
