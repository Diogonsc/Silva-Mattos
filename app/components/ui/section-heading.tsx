import { cn } from "@/lib/utils";
import { Eyebrow } from "./eyebrow";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  className?: string;
  titleClassName?: string;
  eyebrowClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  className,
  titleClassName,
  eyebrowClassName,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 max-w-[640px] md:mb-16", className)}>
      <Eyebrow className={eyebrowClassName}>{eyebrow}</Eyebrow>
      <h2
        className={cn(
          "mt-3.5 font-serif text-[clamp(2rem,3.4vw,2.8rem)] font-medium tracking-[0.01em] text-blue-dark",
          titleClassName,
        )}
      >
        {title}
      </h2>
    </div>
  );
}
