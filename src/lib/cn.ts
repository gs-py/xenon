type ClassValue = string | number | false | null | undefined;

/**
 * Tiny classNames joiner — keeps the dependency surface minimal while letting
 * components compose conditional Tailwind classes cleanly.
 */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
