import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface SmartLinkProps {
  /** "/about" → SPA route; "/#services" / "#work" / "mailto:" / "https:" → anchor. */
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  "aria-label"?: string;
}

/** True for internal route paths that should use client-side navigation. */
export function isRoutePath(to: string): boolean {
  return to.startsWith("/") && !to.includes("#");
}

/**
 * Renders a router <Link> for internal routes and a plain <a> for in-page
 * anchors or external URLs — so one nav config can mix pages and sections.
 */
export function SmartLink({ to, children, className, onClick, ...rest }: SmartLinkProps) {
  if (isRoutePath(to)) {
    return (
      <Link to={to} className={className} onClick={onClick} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={to} className={className} onClick={onClick} {...rest}>
      {children}
    </a>
  );
}
