import { useMemo, type ElementType, type ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp, inViewOnce, staggerContainer } from "../../lib/motion";

/** Memoise the motion component so a dynamic `as` doesn't remount each render. */
function useMotionTag(as: ElementType | undefined) {
  return useMemo(() => motion.create(as ?? "div"), [as]);
}

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Delay before this element animates in (seconds). */
  delay?: number;
  /** Render as a different element, e.g. "li", "h2", "span". */
  as?: ElementType;
  /** Forwarded to the underlying element (e.g. for aria-labelledby). */
  id?: string;
}

/**
 * Single fade-up reveal driven by Framer's in-view (IntersectionObserver).
 * Animates once when ~20% of the element enters the viewport.
 */
export function Reveal({ children, className, delay = 0, as, id }: RevealProps) {
  const Comp = useMotionTag(as);
  return (
    <Comp
      id={id}
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={inViewOnce}
      transition={{ delay }}
    >
      {children}
    </Comp>
  );
}

interface RevealGroupProps {
  children: ReactNode;
  className?: string;
  /** Seconds between each child's reveal. */
  stagger?: number;
  /** Delay before the first child animates. */
  delay?: number;
  as?: ElementType;
}

/**
 * Parent wrapper that staggers the reveal of its children. Pair with
 * <RevealItem> children so each picks up the staggered timing.
 */
export function RevealGroup({
  children,
  className,
  stagger = 0.1,
  delay = 0,
  as,
}: RevealGroupProps) {
  const Comp = useMotionTag(as);
  const variants = useMemo(
    () => staggerContainer(stagger, delay),
    [stagger, delay],
  );
  return (
    <Comp
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={inViewOnce}
    >
      {children}
    </Comp>
  );
}

interface RevealItemProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

/** Child of <RevealGroup>; inherits the staggered fade-up timing. */
export function RevealItem({ children, className, as }: RevealItemProps) {
  const Comp = useMotionTag(as);
  return (
    <Comp className={className} variants={fadeUp}>
      {children}
    </Comp>
  );
}
