import type { ComponentType, SVGProps } from "react";
import { Container } from "../ui/Container";
import { Brand } from "../ui/Brand";
import { SmartLink } from "../ui/SmartLink";
import { Instagram, Linkedin, Mail, Phone, Whatsapp } from "../icons";
import { useRegion, useRegionPhone } from "../../hooks/useRegion";
import {
  brand,
  contact,
  emailUrl,
  footerLinks,
  navLinks,
  whatsappPrimaryUrl,
  whatsappSecondaryUrl,
} from "../../data/site";
import { services } from "../../data/services";

interface Social {
  label: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

/** Socials, with the region-specific Instagram account passed in. */
function buildSocials(instagram: string): Social[] {
  return [
    { label: "Instagram", href: instagram, Icon: Instagram },
    { label: "LinkedIn", href: brand.socials.linkedin, Icon: Linkedin },
    { label: "WhatsApp", href: brand.socials.whatsapp, Icon: Whatsapp },
    { label: "Email", href: brand.socials.email, Icon: Mail },
  ];
}

export function Footer() {
  const { display: phoneDisplay, href: phoneHref } = useRegionPhone();
  const { isIndia } = useRegion();
  const socials = buildSocials(
    isIndia ? brand.socials.instagramIndia : brand.socials.instagram,
  );
  return (
    <footer className="relative z-10 border-t border-line bg-white">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          {/* Brand + socials */}
          <div className="flex flex-col gap-5">
            <Brand size={48} showName />
            <p className="max-w-xs text-sm font-light leading-relaxed text-ink/75">
              A 360° marketing and production studio building strong online
              presence for ambitious brands in Dubai and beyond.
            </p>
            <ul className="flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid size-11 place-items-center rounded-full bg-brand text-white shadow-[var(--shadow-button)] transition-all duration-300 ease-[var(--ease-premium)] hover:-translate-y-0.5 hover:brightness-[1.06]"
                  >
                    <Icon className="size-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <FooterColumn
            title="Services"
            links={services.map((s) => ({
              label: s.title,
              href: "#services",
            }))}
          />

          <FooterColumn title="Company" links={navLinks} />

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold tracking-[0.16em] text-ink uppercase">
              Get in touch
            </h3>
            <a
              href={emailUrl}
              className="flex items-center gap-2.5 text-sm font-light text-ink/75 transition-colors hover:text-teal"
            >
              <Mail className="size-4 shrink-0 text-teal" />
              {contact.email}
            </a>
            <a
              href={phoneHref}
              className="flex items-center gap-2.5 text-sm font-light text-ink/75 transition-colors hover:text-teal"
            >
              <Phone className="size-4 shrink-0 text-teal" />
              {phoneDisplay}
            </a>
            <a
              href={whatsappPrimaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-sm font-light text-ink/75 transition-colors hover:text-teal"
            >
              <Whatsapp className="size-4 shrink-0 text-teal" />
              {contact.whatsappPrimaryDisplay}
            </a>
            <a
              href={whatsappSecondaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-sm font-light text-ink/75 transition-colors hover:text-teal"
            >
              <Whatsapp className="size-4 shrink-0 text-teal" />
              {contact.whatsappSecondaryDisplay}
            </a>
          </div>
        </div>

        {/* Legal bar */}
        <div className="mt-14 flex flex-col items-center gap-4 border-t border-line pt-7 text-sm font-light text-ink/70 sm:flex-row sm:justify-between">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <SmartLink
                  to={link.href}
                  className="transition-colors hover:text-teal"
                >
                  {link.label}
                </SmartLink>
              </li>
            ))}
          </ul>
          <p>© 2025 {brand.name}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

interface FooterColumnProps {
  title: string;
  links: { label: string; href: string }[];
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-sm font-semibold tracking-[0.16em] text-ink uppercase">
        {title}
      </h3>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <SmartLink
              to={link.href}
              className="text-sm font-light text-ink/75 transition-colors hover:text-teal"
            >
              {link.label}
            </SmartLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
