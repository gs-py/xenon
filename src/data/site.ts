/** Single source of truth for brand-level copy, nav, and contact details. */

export interface NavLink {
  label: string;
  href: string;
}

export const brand = {
  name: "XONE13 Studios",
  shortName: "XONE13",
  tagline: "Top marketing agencies in dubai",
  email: "hello@xone13.studio",
  phone: "+971 50 000 0000",
  whatsapp: "https://wa.me/971500000000",
  socials: {
    instagram: "https://instagram.com/xone13studios",
    linkedin: "https://linkedin.com/company/xone13studios",
    whatsapp: "https://wa.me/971500000000",
    email: "mailto:hello@xone13.studio",
  },
} as const;

export const navLinks: NavLink[] = [
  { label: "Services", href: "/#services" },
  { label: "Blogs", href: "/blogs" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
];

export const footerLinks: NavLink[] = [
  { label: "Terms of services", href: "#terms" },
  { label: "Privacy policy", href: "#privacy" },
  { label: "Cancellation & Refunds", href: "#refunds" },
];
