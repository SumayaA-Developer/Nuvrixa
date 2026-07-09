import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: string; className?: string }) {
  return (
    <p
      className={cn(
        "text-sm font-medium uppercase tracking-[0.32em] text-cyan-200",
        className,
      )}
    >
      {children}
    </p>
  );
}
