import { motion } from "framer-motion";
import { Phone, Whatsapp } from "../icons";
import { brand } from "../../data/site";
import { useRegionPhone } from "../../hooks/useRegion";
import { EASE_PREMIUM } from "../../lib/motion";

export function FloatingActions() {
  const { href: callHref } = useRegionPhone();

  const actions = [
    { label: "Chat on WhatsApp", href: brand.whatsapp, Icon: Whatsapp },
    { label: "Call us", href: callHref, Icon: Phone },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6, ease: EASE_PREMIUM }}
      className="fixed right-4 bottom-4 z-40 flex flex-col gap-3 sm:right-6 sm:bottom-6"
    >
      {actions.map(({ label, href, Icon }) => (
        <motion.a
          key={label}
          href={href}
          aria-label={label}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="grid size-13 place-items-center rounded-full bg-brand text-white shadow-[var(--shadow-button)] sm:size-14"
        >
          <Icon className="size-6" />
        </motion.a>
      ))}
    </motion.div>
  );
}
