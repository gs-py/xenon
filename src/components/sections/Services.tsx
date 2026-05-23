import { type ComponentType, type ReactNode, type SVGProps } from "react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";
import { ArrowUpRight, Camera, Code, Film, Megaphone, Palette } from "../icons";
import { cn } from "../../lib/cn";
import { useRegion } from "../../hooks/useRegion";
import { useSpotlight } from "../../hooks/useSpotlight";
import { services, type Service } from "../../data/services";
import { whatsappPrimaryUrl } from "../../data/site";

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
  const { isIndia } = useRegion();
  // India visitors don't see the Photography & Videography offering.
  const visibleServices = isIndia
    ? services.filter((s) => s.id !== "photography-videography")
    : services;

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
          {visibleServices.map((service, i) => (
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
          <Button href={whatsappPrimaryUrl} size="lg" withArrow newTab>
            CONNECT WITH US
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
  const ref = useSpotlight<HTMLDivElement>();

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

      {featured && <MarketingVisual />}

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

/**
 * Decorative engagement-growth visual for the featured services cell — a
 * gradient area chart with floating metric chips. Pure SVG/CSS (no assets).
 */
function MarketingVisual() {
  return (
    <div className="relative mt-6 min-h-[200px] flex-1 overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-teal-soft/45 via-white to-white">
      {/* Dotted grid */}
      <div
        aria-hidden
        className="absolute inset-0 [background-image:radial-gradient(rgba(0,121,130,0.09)_1px,transparent_1px)] [background-size:20px_20px]"
      />
      {/* Soft glow */}
      <div
        aria-hidden
        className="absolute -top-10 left-1/3 size-40 rounded-full bg-brand opacity-15 blur-3xl"
      />

      {/* Area chart anchored to the bottom */}
      <svg
        aria-hidden
        viewBox="0 0 340 150"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-3/5 w-full"
      >
        <defs>
          <linearGradient id="svc-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#007982" stopOpacity="0.24" />
            <stop offset="100%" stopColor="#007982" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="svc-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="14%" stopColor="#007982" />
            <stop offset="100%" stopColor="#aebda1" />
          </linearGradient>
        </defs>
        <path
          d="M0,120 C46,112 70,92 108,84 S180,66 210,52 S292,26 340,16 L340,150 L0,150 Z"
          fill="url(#svc-area)"
        />
        <path
          d="M0,120 C46,112 70,92 108,84 S180,66 210,52 S292,26 340,16"
          fill="none"
          stroke="url(#svc-line)"
          strokeWidth="3"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Floating metric chips */}
      <div className="animate-float absolute top-5 left-5 flex items-center gap-2.5 rounded-2xl border border-line bg-white/90 px-3.5 py-2.5 shadow-card backdrop-blur-sm [--float-duration:6s]">
        <span className="grid size-8 place-items-center rounded-full bg-brand text-white">
          <ArrowUpRight className="size-4" />
        </span>
        <div className="leading-tight">
          <p className="text-[11px] font-light text-ink-muted">Engagement</p>
          <p className="text-sm font-bold text-teal-dark">+142%</p>
        </div>
      </div>

      <div className="animate-float absolute right-5 bottom-6 rounded-2xl border border-line bg-white/90 px-3.5 py-2.5 text-right shadow-card backdrop-blur-sm [--float-duration:7.5s]">
        <p className="text-[11px] font-light text-ink-muted">Monthly reach</p>
        <p className="text-sm font-bold text-teal-dark">84.2k</p>
      </div>
    </div>
  );
}
