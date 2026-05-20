import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/cn";
import { ArrowUpRight } from "../icons";

type Variant = "primary" | "outline" | "ghost";
type Size = "md" | "lg";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  /** Append a circular arrow badge on the right (matches the Figma CTAs). */
  withArrow?: boolean;
  className?: string;
}

interface AnchorProps extends BaseProps {
  href: string;
  onClick?: never;
  type?: never;
}

interface ButtonElProps extends BaseProps {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
}

type ButtonProps = AnchorProps | ButtonElProps;

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand text-white shadow-[var(--shadow-button)] hover:brightness-[1.06]",
  outline:
    "border border-teal/30 bg-white text-teal hover:border-teal/60 hover:bg-teal-soft/40",
  ghost: "text-teal hover:bg-teal-soft/50",
};

const sizeClasses: Record<Size, string> = {
  md: "h-12 pl-6 pr-6 text-sm",
  lg: "h-14 pl-8 pr-8 text-[15px]",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  withArrow = false,
  className,
  ...rest
}: ButtonProps) {
  const content = (
    <>
      <span className="font-semibold tracking-wide">{children}</span>
      {withArrow && (
        <span
          aria-hidden
          className={cn(
            "ml-1 grid place-items-center rounded-full transition-transform duration-300 ease-[var(--ease-premium)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
            size === "lg" ? "size-9" : "size-8",
            variant === "primary"
              ? "bg-white text-teal"
              : "bg-brand text-white",
          )}
        >
          <ArrowUpRight className="size-[18px]" />
        </span>
      )}
    </>
  );

  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-[filter,background-color,border-color] duration-300 ease-[var(--ease-premium)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal",
    withArrow && "pr-2",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
  };

  if ("href" in rest && rest.href !== undefined) {
    return (
      <motion.a href={rest.href} className={classes} {...motionProps}>
        {content}
      </motion.a>
    );
  }

  const { onClick, type = "button" } = rest as ButtonElProps;
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
}
