import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** Wider track for full-bleed sections; default caps at ~1200px. */
  size?: "default" | "wide";
}

export function Container({
  children,
  className,
  size = "default",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8",
        size === "wide" ? "max-w-[1320px]" : "max-w-[1200px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
