import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-auto w-full min-w-0 rounded-none border-0 border-b border-input bg-transparent px-0.5 py-2.5 text-[0.98rem] text-foreground shadow-none transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-0 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive md:text-[0.98rem]",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
