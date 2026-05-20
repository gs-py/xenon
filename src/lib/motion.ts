import type { Variants, Transition } from "framer-motion";

/**
 * Centralised motion language so every section animates with the same refined,
 * Apple-like easing. Keep transitions short and subtle.
 */

export const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;

export const transition: Transition = {
  duration: 0.7,
  ease: EASE_PREMIUM,
};

/** Fade + rise — the workhorse reveal for headings, copy, and cards. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition,
  },
};

/** A gentler fade for backgrounds and large blocks. */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.9, ease: EASE_PREMIUM } },
};

/** Parent container that staggers its children's reveal. */
export const staggerContainer = (stagger = 0.08, delay = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

/** Shared viewport config — drives Framer's IntersectionObserver reveal. */
export const inViewOnce = { once: true, amount: 0.2 } as const;
