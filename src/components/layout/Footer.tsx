import type { ComponentType, SVGProps } from "react";
import { Container } from "../ui/Container";
import { Brand } from "../ui/Brand";
import { SmartLink } from "../ui/SmartLink";
import { Instagram, Linkedin, Mail, Whatsapp } from "../icons";
import { brand, contact, footerLinks, navLinks, telHref } from "../../data/site";
import { services } from "../../data/services";
import { useRegion } from "../../hooks/useRegion";

interface Social {
  label: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const socials: Social[] = [
  { label: "Instagram", href: brand.socials.instagram, Icon: Instagram },
  { label: "LinkedIn", href: brand.socials.linkedin, Icon: Linkedin },
  { label: "WhatsApp", href: brand.socials.whatsapp, Icon: Whatsapp },
  { label: "Email", href: brand.socials.email, Icon: Mail },
];

export function Footer() {
  const { isIndia } = useRegion();
  const callPhone = isIndia ? contact.indiaPhone : contact.phone;
  return (
    <footer className="border-t border-line bg-white">
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
              href={brand.socials.email}
              className="text-sm font-light text-ink/75 transition-colors hover:text-teal"
            >
              {brand.email}
            </a>
            <a
              href={telHref(callPhone)}
              className="text-sm font-light text-ink/75 transition-colors hover:text-teal"
            >
              {callPhone}
            </a>
            <a
              href={brand.whatsapp}
              className="text-sm font-light text-ink/75 transition-colors hover:text-teal"
            >
              Chat on WhatsApp
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
