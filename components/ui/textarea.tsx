import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-[110px] w-full resize-y rounded-none border-0 border-b border-input bg-transparent px-0.5 py-2.5 text-[0.98rem] text-foreground shadow-none transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive md:text-[0.98rem]",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
