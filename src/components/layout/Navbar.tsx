import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Brand } from "../ui/Brand";
import { Button } from "../ui/Button";
import { SmartLink, isRoutePath } from "../ui/SmartLink";
import { Close, Menu } from "../icons";
import { links, navLinks } from "../../data/site";
import { useScrolled } from "../../hooks/useScrolled";
import { cn } from "../../lib/cn";
import { EASE_PREMIUM } from "../../lib/motion";

export function Navbar() {
  const scrolled = useScrolled(24);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the sheet whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => isRoutePath(href) && pathname === href;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        initial={false}
        animate={{
          backgroundColor: scrolled
            ? "rgba(255,255,255,0.78)"
            : "rgba(255,255,255,0)",
          boxShadow: scrolled
            ? "0px 4px 18px rgba(0,0,0,0.06)"
            : "0px 0px 0px rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.4, ease: EASE_PREMIUM }}
        className={cn(
          "border-b transition-colors duration-300",
          scrolled ? "border-line/80 backdrop-blur-xl" : "border-transparent",
        )}
      >
        <Container size="wide">
          <nav className="flex h-20 items-center justify-between py-3">
            <Brand size={56} />

            <ul className="hidden items-center gap-9 lg:flex">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <SmartLink
                    to={link.href}
                    className="group relative text-[15px] font-medium text-ink/90 transition-colors hover:text-teal"
                  >
                    {link.label}
                    <span
                      className={cn(
                        "absolute -bottom-1.5 left-0 h-px w-full origin-left bg-brand transition-transform duration-300 ease-[var(--ease-premium)] group-hover:scale-x-100",
                        isActive(link.href) ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </SmartLink>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <div className="hidden sm:block">
                <Button href={links.googleCalendar} size="md" withArrow animatedArrow newTab>
                  Schedule a call
                </Button>
              </div>
              <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="grid size-11 place-items-center rounded-full border border-line bg-white/70 text-ink lg:hidden"
              >
                {open ? <Close /> : <Menu />}
              </button>
            </div>
          </nav>
        </Container>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: EASE_PREMIUM }}
            className="overflow-hidden border-b border-line bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <Container>
              <ul className="flex flex-col gap-1 py-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <SmartLink
                      to={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block rounded-xl px-3 py-3 text-base font-medium transition-colors hover:bg-teal-soft/50 hover:text-teal",
                        isActive(link.href) ? "text-teal" : "text-ink",
                      )}
                    >
                      {link.label}
                    </SmartLink>
                  </li>
                ))}
                <li className="px-1 pt-3">
                  <Button
                    href={links.googleCalendar}
                    withArrow
                    newTab
                    className="w-full"
                  >
                    Schedule a call
                  </Button>
                </li>
              </ul>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
