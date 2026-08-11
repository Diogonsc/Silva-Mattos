import * as React from "react";

import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type FieldProps = {
  id: string;
  label: string;
  children: React.ReactNode;
  className?: string;
};

function Field({ id, label, children, className }: FieldProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <Label htmlFor={id}>{label}</Label>
      {children}
    </div>
  );
}

export { Field };
