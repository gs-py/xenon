import { useEffect, useRef } from "react";

/**
 * Tracks the cursor inside the returned element and writes its position to the
 * `--mouse-x` / `--mouse-y` CSS vars, so a `::before` / `::after` radial-gradient
 * can follow the pointer on hover. Pair with `.bento-spotlight` (glow behind
 * content) or `.photo-spotlight` (glow over a full-bleed image) in index.css.
 */
export function useSpotlight<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return ref;
}
