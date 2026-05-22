import { useState, type MouseEvent, type CSSProperties, type ReactNode } from "react";

interface RippleState {
  key: number;
  x: number;
  y: number;
  size: number;
}

interface RippleButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
  newTab?: boolean;
  rippleColor?: string;
  rippleDuration?: number;
}

/**
 * Button / anchor with a click-ripple effect.
 * If `href` is provided it renders as an <a>, otherwise a <button>.
 */
export function RippleButton({
  children,
  href,
  onClick,
  className = "",
  disabled = false,
  newTab = false,
  rippleColor = "rgba(0,121,130,0.18)",
  rippleDuration = 600,
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<RippleState[]>([]);

  const createRipple = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    const key = Date.now();
    setRipples((prev) => [...prev, { key, x, y, size }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.key !== key));
    }, rippleDuration);
  };

  const rippleElements = (
    <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
      {ripples.map((r) => (
        <span
          key={r.key}
          className="absolute animate-[ripple-expand_var(--dur)_ease-out_forwards] rounded-full"
          style={
            {
              left: r.x,
              top: r.y,
              width: r.size,
              height: r.size,
              backgroundColor: rippleColor,
              "--dur": `${rippleDuration}ms`,
            } as CSSProperties
          }
        />
      ))}
    </span>
  );

  const baseClasses = `relative isolate overflow-hidden ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
        className={baseClasses}
        onClick={(e) => createRipple(e)}
      >
        <span className="relative z-[1]">{children}</span>
        {rippleElements}
      </a>
    );
  }

  return (
    <button
      type="button"
      disabled={disabled}
      className={baseClasses}
      onClick={(e) => {
        createRipple(e);
        onClick?.(e);
      }}
    >
      <span className="relative z-[1]">{children}</span>
      {rippleElements}
    </button>
  );
}
