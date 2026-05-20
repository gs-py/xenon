import type { ComponentType, SVGProps } from "react";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";
import { Camera, Code, Film, Megaphone, Palette } from "../icons";
import { services, type Service } from "../../data/services";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

/** Maps each service to a representative icon (not in Figma, added for clarity). */
const serviceIcons: Record<string, IconComponent> = {
  "social-media-marketing": Megaphone,
  "content-creation": Film,
  "design-branding": Palette,
  "website-development": Code,
  "photography-videography": Camera,
};

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-24 py-20 lg:py-28"
    >
      <Container>
        <SectionHeading
          titleId="services-heading"
          eyebrow="What we do"
          title="Our Services"
          subtitle="We create impactful digital solutions that help brands grow, engage audiences, and drive results in today’s competitive market."
        />

        <RevealGroup className="mt-14 flex flex-col gap-5" stagger={0.09}>
          {services.map((service, i) => (
            <RevealItem key={service.id}>
              <ServiceRow
                service={service}
                index={i}
                Icon={serviceIcons[service.id]}
              />
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-12 flex justify-center">
          <Button href="#work" size="lg" withArrow>
            VIEW OUR WORK
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}

interface ServiceRowProps {
  service: Service;
  index: number;
  Icon: IconComponent;
}

function ServiceRow({ service, index, Icon }: ServiceRowProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col gap-7 overflow-hidden rounded-[28px] border border-line bg-white p-7 shadow-[var(--shadow-card)] transition-[box-shadow,border-color] duration-300 hover:border-teal/30 hover:shadow-[var(--shadow-lift)] sm:p-9 lg:flex-row lg:items-center lg:justify-between lg:gap-12"
    >
      {/* Soft border glow on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 ring-1 ring-teal/20 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="flex items-center gap-5 lg:w-[40%]">
        <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-teal-soft text-teal transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
          <Icon className="size-7" />
        </span>
        <div>
          <span className="text-xs font-medium tracking-[0.2em] text-ink-muted">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-brand text-2xl font-semibold sm:text-[28px]">
            {service.title}
          </h3>
        </div>
      </div>

      <div className="lg:w-[55%]">
        <ul className="grid gap-x-10 gap-y-2.5 sm:grid-cols-2">
          {service.highlights.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 text-[15px] font-light text-ink-strong sm:text-base"
            >
              <span className="size-1.5 shrink-0 rounded-full bg-brand" />
              {item}
            </li>
          ))}
        </ul>
        {service.note && (
          <p className="mt-3 text-xs font-light text-ink-muted">
            {service.note}
          </p>
        )}
      </div>
    </motion.article>
  );
}
