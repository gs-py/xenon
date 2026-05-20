import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface CountUpOptions {
  /** Final value to count to. */
  to: number;
  /** Duration of the animation in ms. */
  duration?: number;
}

/**
 * Counts from 0 → `to` once the returned ref scrolls into view (via Framer's
 * IntersectionObserver). Respects `prefers-reduced-motion` by snapping to the
 * final value. Returns a ref to attach and the current display value.
 */
export function useCountUp<T extends Element = HTMLElement>({
  to,
  duration = 1600,
}: CountUpOptions) {
  const ref = useRef<T>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setValue(to);
      return;
    }

    let raf = 0;
    const start = performance.now();
    // easeOutExpo — fast then settling, matching the site's premium feel.
    const ease = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(ease(progress) * to));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration, reduceMotion]);

  return { ref, value };
}
