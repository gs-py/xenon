import { useEffect, useState } from "react";
import { contact, telHref } from "../data/site";

/**
 * Lightweight, network-free visitor-region detection.
 *
 * We only need a soft "is this visitor in India?" signal (to route the Call CTA
 * to the India number). The browser's resolved IANA timezone is unique to the
 * region (`Asia/Kolkata` / `Asia/Calcutta`) and needs no API key, no request,
 * and no rate limit; the `-IN` locale is a fallback. This is intentionally a
 * client-side heuristic — for stricter accuracy we could layer an IP lookup,
 * but timezone is more than enough for swapping a phone number.
 */
function detectIndia(): boolean {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone ?? "";
    if (/Asia\/(Kolkata|Calcutta)/i.test(tz)) return true;
  } catch {
    /* Intl unavailable — fall through to locale check */
  }
  const langs = [navigator.language, ...(navigator.languages ?? [])];
  return langs.some((l) => /-IN$/i.test(l ?? ""));
}

export interface Region {
  isIndia: boolean;
}

/** Returns `{ isIndia }`. Resolves after mount to stay render-safe. */
export function useRegion(): Region {
  const [isIndia, setIsIndia] = useState(false);

  useEffect(() => {
    setIsIndia(detectIndia());
  }, []);

  return { isIndia };
}

export interface RegionPhone {
  /** E.164-ish display string, e.g. "+971 56 775 7580" */
  display: string;
  /** Raw phone string for telHref, e.g. "+971567757580" */
  phone: string;
  /** Ready-to-use `tel:` href */
  href: string;
}

/**
 * Returns the correct call number for the visitor's detected region.
 *
 * - India timezone / locale  →  `contact.indiaPhone`
 * - Everyone else            →  `contact.phone` (UAE line)
 *
 * Safe to render immediately — falls back to UAE line on first render
 * before the effect has run.
 */
export function useRegionPhone(): RegionPhone {
  const { isIndia } = useRegion();
  const phone = isIndia ? contact.indiaPhone : contact.phone;
  const display = isIndia ? contact.indiaPhoneDisplay : contact.phoneDisplay;
  return { phone, display, href: telHref(phone) };
}
