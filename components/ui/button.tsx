import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "bg-cyan-300 text-slate-950 shadow-[0_0_35px_rgba(34,211,238,0.28)] hover:-translate-y-0.5 hover:bg-cyan-200 hover:shadow-[0_0_55px_rgba(34,211,238,0.38)]",
  secondary:
    "border border-white/15 bg-white/[0.04] text-white hover:-translate-y-0.5 hover:border-cyan-200/45 hover:bg-cyan-300/10",
  ghost: "text-slate-300 hover:text-white",
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <a
      className={cn(
        "focus-ring inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-300",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
