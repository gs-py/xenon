import { cn } from "../../lib/cn";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  /** Small label above the title. */
  eyebrow?: string;
  align?: "center" | "left";
  className?: string;
  /** Visual id for `aria-labelledby` wiring on the parent section. */
  titleId?: string;
}

export function SectionHeading({
  title,
  subtitle,
  eyebrow,
  align = "center",
  className,
  titleId,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <Reveal
          as="span"
          className="text-brand text-sm font-semibold uppercase tracking-[0.18em]"
        >
          {eyebrow}
        </Reveal>
      )}
      <Reveal
        as="h2"
        id={titleId}
        className="text-3xl font-semibold text-balance text-ink sm:text-4xl lg:text-5xl"
      >
        {title}
      </Reveal>
      {subtitle && (
        <Reveal
          as="p"
          delay={0.08}
          className={cn(
            "max-w-2xl text-base font-light text-pretty text-ink/80 sm:text-lg",
            align === "center" ? "mx-auto" : "",
          )}
        >
          {subtitle}
        </Reveal>
      )}
    </div>
  );
}
