import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function GlowCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "glass-panel relative overflow-hidden rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/30",
        className,
      )}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="relative">{children}</div>
    </div>
  );
}
