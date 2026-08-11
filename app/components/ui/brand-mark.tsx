import Image from "next/image";
import logo from "@/app/assets/logo-transparente.png";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: "h-8 w-auto",
  md: "h-10 w-auto",
  lg: "h-12 w-auto",
} as const;

export function BrandMark({ className, size = "md" }: BrandMarkProps) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src={logo}
        alt="Souza & Mattos"
        className={cn(sizeClasses[size])}
        priority
      />
    </span>
  );
}
