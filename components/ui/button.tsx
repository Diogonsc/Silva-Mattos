import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 cursor-pointer items-center justify-center rounded-[2px] border border-transparent text-[0.86rem] font-semibold tracking-[0.04em] whitespace-nowrap transition-[transform,box-shadow,background-color,border-color,color] duration-300 outline-none select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:-translate-y-0.5 hover:shadow-gold",
        primary:
          "bg-primary text-primary-foreground hover:-translate-y-0.5 hover:shadow-gold",
        secondary:
          "border-blue-dark bg-transparent text-blue-dark hover:bg-blue-dark hover:text-white",
        outline:
          "border-border bg-background text-foreground hover:bg-muted",
        ghost:
          "border-white-warm/35 bg-transparent text-white-warm hover:border-gold hover:bg-gold/10",
        solid: "bg-blue-dark text-white hover:bg-blue",
        link: "text-primary underline-offset-4 hover:underline",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20",
      },
      size: {
        default: "h-auto px-8 py-4",
        sm: "h-auto px-[22px] py-[11px] text-[0.82rem] font-normal tracking-[0.05em]",
        lg: "h-auto px-8 py-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-xs": "size-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

type ButtonLinkProps = Omit<React.ComponentProps<"a">, "ref"> &
  VariantProps<typeof buttonVariants> & {
    href: string;
    ref?: React.Ref<HTMLAnchorElement>;
  };

function ButtonLink({
  className,
  variant,
  size,
  href,
  children,
  ref,
  ...props
}: ButtonLinkProps) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a ref={ref} href={href} {...props}>
        {children}
      </a>
    </Button>
  );
}

export { Button, ButtonLink, buttonVariants };
