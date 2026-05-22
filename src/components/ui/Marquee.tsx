import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "../../lib/cn";

interface MarqueeProps<T> {
  items: T[];
  /** Render one item. `dup` marks the second (looping) copy → aria-hidden. */
  renderItem: (item: T, dup: boolean) => ReactNode;
  /** Idle auto-scroll speed, px per second. */
  speed?: number;
  /** Classes for the inner <ul>. */
  className?: string;
  /** Classes for the outer positioning wrapper. */
  wrapperClassName?: string;
  ariaLabel?: string;
}

/**
 * Continuous auto-scrolling row that is ALSO manually scrollable on every
 * device. It renders two identical copies of `items` and advances the native
 * `scrollLeft` each frame, wrapping at the half-way point for a seamless loop.
 * Auto-scroll pauses on hover and while the user drags (mouse) or swipes /
 * trackpad-scrolls (touch / wheel), then resumes from wherever they left it.
 * Honours `prefers-reduced-motion` (no auto-advance; manual scroll still works).
 */
export function Marquee<T>({
  items,
  renderItem,
  speed = 45,
  className,
  wrapperClassName,
  ariaLabel,
}: MarqueeProps<T>) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let raf = 0;
    let last = 0;
    let pos = el.scrollLeft;
    let hover = false;
    let dragging = false;
    let interacting = false;
    let idleTimer: ReturnType<typeof setTimeout> | undefined;
    let dragStartX = 0;
    let dragStartScroll = 0;

    // Brief pause after a wheel / touch gesture, then resume.
    const bumpIdle = () => {
      interacting = true;
      if (idleTimer) clearTimeout(idleTimer);
      idleTimer = setTimeout(() => (interacting = false), 800);
    };

    const wrap = () => {
      const half = el.scrollWidth / 2;
      if (half <= 0) return;
      if (el.scrollLeft >= half) el.scrollLeft -= half;
      else if (el.scrollLeft < 0) el.scrollLeft += half;
    };

    const tick = (t: number) => {
      const dt = last ? Math.min((t - last) / 1000, 0.05) : 0;
      last = t;
      if (hover || dragging || interacting) {
        pos = el.scrollLeft; // stay in sync with the manual position
      } else {
        const half = el.scrollWidth / 2;
        if (half > 0) {
          pos += speed * dt;
          if (pos >= half) pos -= half;
          el.scrollLeft = pos;
        }
      }
      raf = requestAnimationFrame(tick);
    };

    const onEnter = () => (hover = true);
    const onLeave = () => (hover = false);
    const onWheel = () => bumpIdle();
    const onTouch = () => bumpIdle();

    // Click-and-drag scrolling for mouse users (touch uses native scrolling).
    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      dragging = true;
      dragStartX = e.clientX;
      dragStartScroll = el.scrollLeft;
      el.setPointerCapture(e.pointerId);
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) return;
      el.scrollLeft = dragStartScroll - (e.clientX - dragStartX);
    };
    const endDrag = (e: PointerEvent) => {
      if (!dragging) return;
      dragging = false;
      try {
        el.releasePointerCapture(e.pointerId);
      } catch {
        /* pointer already released */
      }
      wrap();
      bumpIdle();
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("wheel", onWheel, { passive: true });
    el.addEventListener("touchstart", onTouch, { passive: true });
    el.addEventListener("touchmove", onTouch, { passive: true });
    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", endDrag);
    el.addEventListener("pointercancel", endDrag);

    if (!reduced) raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      if (idleTimer) clearTimeout(idleTimer);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("touchstart", onTouch);
      el.removeEventListener("touchmove", onTouch);
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", endDrag);
      el.removeEventListener("pointercancel", endDrag);
    };
  }, [speed]);

  return (
    <div className={cn("relative", wrapperClassName)}>
      {/* Edge fades sit above the scroller so items melt at the edges. */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-28" />

      <div
        ref={scrollRef}
        aria-label={ariaLabel}
        className="cursor-grab touch-pan-x select-none overflow-x-auto overflow-y-hidden overscroll-x-contain [-webkit-overflow-scrolling:touch] [scrollbar-width:none] active:cursor-grabbing [&::-webkit-scrollbar]:hidden"
      >
        <ul className={cn("flex w-max", className)}>
          {items.map((it) => renderItem(it, false))}
          {items.map((it) => renderItem(it, true))}
        </ul>
      </div>
    </div>
  );
}
