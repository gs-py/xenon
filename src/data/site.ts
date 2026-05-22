/** Single source of truth for brand-level copy, nav, contacts, and outbound links. */

export interface NavLink {
  label: string;
  href: string;
}

/**
 * Contact channels. WhatsApp numbers are stored digits-only for wa.me URLs.
 *  - Primary   +971 52 158 9011  → sales / enquiries (all forms route here)
 *  - Secondary +971 56 775 7580  → voice line + secondary WhatsApp
 */
export const contact = {
  email: "info@xone13.com",
  whatsappPrimary: "971521589011",
  whatsappSecondary: "971567757580",
  // Display-formatted versions of the WhatsApp lines (for showing in the UI).
  whatsappPrimaryDisplay: "+971 52 158 9011",
  whatsappSecondaryDisplay: "+971 56 775 7580",
  // Default (UAE) voice line.
  phone: "+971 56 775 7580",
  // TODO(client): Abel's India number — visitors detected in India see this
  // as the "Call" number instead of the UAE line.
  indiaPhone: "+91 00000 00000",
} as const;

/**
 * Outbound destinations. Values marked TODO(client) are pending links the
 * client will share (social pages, showreel, packages). Swap the value in here
 * and every CTA across the site updates — nothing else needs to change.
 */
export const links = {
  // TODO(client): Google Calendar scheduling link for "Schedule a call".
  googleCalendar: "https://calendar.google.com/calendar/u/0/r",
  // TODO(client): official Instagram profile — used by "View our work".
  instagram: "https://instagram.com/xone13studios",
  // TODO(client): LinkedIn company page (to be created and shared).
  linkedin: "https://linkedin.com/company/xone13studios",
  // TODO(client): YouTube showreel video — link to be shared by Navas.
  showreel: "https://youtube.com/@xone13studios",
  // Dedicated packages page.
  packages: "/packages",
  // TODO(client): company-profile PDF. Drop the file at
  // `public/xone13-company-profile.pdf` and it downloads from this path.
  companyProfile: "/xone13-company-profile.pdf",
} as const;

export const whatsappPrimaryUrl = `https://wa.me/${contact.whatsappPrimary}`;
export const whatsappSecondaryUrl = `https://wa.me/${contact.whatsappSecondary}`;
export const emailUrl = `mailto:${contact.email}`;

/** Build a `tel:` href from a display phone number (strips spaces/symbols). */
export function telHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export const phoneUrl = telHref(contact.phone);

/** Build a wa.me link to the primary line with a pre-filled message. */
export function whatsappWith(message: string): string {
  return `${whatsappPrimaryUrl}?text=${encodeURIComponent(message)}`;
}

export const brand = {
  name: "XONE13 Studios",
  shortName: "XONE13",
  tagline: "Top marketing agencies in dubai",
  email: contact.email,
  phone: contact.phone,
  whatsapp: whatsappPrimaryUrl,
  socials: {
    instagram: links.instagram,
    linkedin: links.linkedin,
    whatsapp: whatsappPrimaryUrl,
    email: emailUrl,
  },
} as const;

export const navLinks: NavLink[] = [
  { label: "Services", href: "/#services" },
  { label: "Packages", href: "/packages" },
  { label: "Blogs", href: "/blogs" },
  { label: "About", href: "/about" },
];

export const footerLinks: NavLink[] = [
  { label: "Terms of services", href: "#terms" },
  { label: "Privacy policy", href: "#privacy" },
  { label: "Cancellation & Refunds", href: "#refunds" },
];
