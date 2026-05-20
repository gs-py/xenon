import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { brand } from "../../data/site";
import { cn } from "../../lib/cn";

interface BrandProps {
  className?: string;
  /** Logo mark size in px. */
  size?: number;
  /** Show the wordmark beside the mark. */
  showName?: boolean;
}

export function Brand({ className, size = 44, showName = false }: BrandProps) {
  return (
    <Link
      to="/"
      aria-label={`${brand.name} — home`}
      className={cn("inline-flex items-center gap-3", className)}
    >
      <img
        src={logo}
        alt=""
        width={size}
        height={size}
        className="object-contain"
        style={{ width: size, height: size }}
      />
      {showName && (
        <span className="text-lg font-semibold tracking-tight text-ink">
          {brand.name}
        </span>
      )}
    </Link>
  );
}
