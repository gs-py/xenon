import { useEffect, useRef, type ComponentType, type ReactNode, type SVGProps } from "react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";
import { Camera, Code, Film, Megaphone, Palette } from "../icons";
import { cn } from "../../lib/cn";
import { services, type Service } from "../../data/services";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const serviceIcons: Record<string, IconComponent> = {
  "social-media-marketing": Megaphone,
  "content-creation": Film,
  "design-branding": Palette,
  "website-development": Code,
  "photography-videography": Camera,
};

/** Bento placement per service (order matches the data module). */
const layout: string[] = [
  "sm:col-span-2 lg:col-span-2 lg:row-span-2", // Social Media Marketing — featured
  "sm:col-span-2 lg:col-span-2", // Content Creation — wide
  "sm:col-span-1 lg:col-span-1", // Design & Branding
  "sm:col-span-1 lg:col-span-1", // Website Development
  "sm:col-span-2 lg:col-span-4", // Photography & Videography — full width
];

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

        <RevealGroup
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[minmax(190px,auto)]"
          stagger={0.08}
        >
          {services.map((service, i) => (
            <RevealItem key={service.id} className={cn("h-full", layout[i])}>
              <ServiceCard
                service={service}
                Icon={serviceIcons[service.id]}
                featured={i === 0}
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

interface BentoItemProps {
  className?: string;
  children: ReactNode;
}

/** Card with a brand-teal spotlight that tracks the cursor (CSS var driven). */
function BentoItem({ className, children }: BentoItemProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "bento-spotlight group relative h-full overflow-hidden rounded-[28px] border border-line bg-white p-6 shadow-card transition duration-300 ease-[var(--ease-premium)] hover:-translate-y-1 hover:border-teal/40 hover:shadow-lift sm:p-7",
        className,
      )}
    >
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </div>
  );
}

interface ServiceCardProps {
  service: Service;
  Icon: IconComponent;
  featured: boolean;
}

function ServiceCard({ service, Icon, featured }: ServiceCardProps) {
  return (
    <BentoItem>
      <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-teal-soft text-teal transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
        <Icon className="size-6" />
      </span>

      <h3
        className={cn(
          "text-brand mt-5 font-semibold",
          featured ? "text-2xl sm:text-3xl" : "text-xl",
        )}
      >
        {service.title}
      </h3>
      <p className="mt-2 max-w-md text-sm font-light leading-relaxed text-ink/70">
        {service.summary}
      </p>

      <ul className="mt-auto flex flex-wrap gap-2 pt-5">
        {service.highlights.map((item) => (
          <li
            key={item}
            className="rounded-full border border-teal/15 bg-teal-soft/50 px-3 py-1 text-xs font-medium text-teal-dark"
          >
            {item}
          </li>
        ))}
      </ul>
      {service.note && (
        <p className="mt-3 text-xs font-light text-ink-muted">{service.note}</p>
      )}
    </BentoItem>
  );
}
