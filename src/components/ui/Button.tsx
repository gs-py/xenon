import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/cn";
import { ArrowUpRight } from "../icons";

type Variant = "primary" | "outline" | "ghost" | "onDark";
type Size = "md" | "lg";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  /** Append a circular arrow badge on the right (matches the Figma CTAs). */
  withArrow?: boolean;
  /** Give the arrow a gentle looping diagonal lift to draw the eye. */
  animatedArrow?: boolean;
  className?: string;
}

interface AnchorProps extends BaseProps {
  href: string;
  /** Open in a new tab (adds safe rel) — for external links like WhatsApp. */
  newTab?: boolean;
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
  // For placement on dark backgrounds (e.g. the final CTA panel).
  onDark:
    "border border-white/35 bg-transparent text-white hover:border-white/70 hover:bg-white/10",
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
  animatedArrow = false,
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
            variant === "primary" || variant === "onDark"
              ? "bg-white text-teal"
              : "bg-brand text-white",
          )}
        >
          {animatedArrow ? (
            <motion.span
              className="grid place-items-center"
              variants={{
                rest: { x: 0, y: 0, opacity: 1 },
                hover: {
                  x: [0, 10, -10, 0],
                  y: [0, -10, 10, 0],
                  opacity: [1, 0, 0, 1],
                  transition: {
                    duration: 0.8,
                    ease: "easeInOut",
                    times: [0, 0.45, 0.46, 1],
                    repeat: Infinity,
                    repeatDelay: 0.6,
                  },
                },
              }}
            >
              <ArrowUpRight className="size-[18px]" />
            </motion.span>
          ) : (
            <ArrowUpRight className="size-[18px]" />
          )}
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
    initial: "rest",
    animate: "rest",
    whileHover: "hover",
    whileTap: "tap",
    variants: {
      rest: { scale: 1 },
      hover: { scale: 1.02 },
      tap: { scale: 0.98 },
    },
  };

  if ("href" in rest && rest.href !== undefined) {
    const { newTab } = rest as AnchorProps;
    return (
      <motion.a
        href={rest.href}
        className={classes}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
        {...motionProps}
      >
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
