import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Quote } from "../icons";
import { testimonials, type Testimonial } from "../../data/testimonials";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-20 lg:py-28"
    >
      <Container>
        <SectionHeading
          titleId="testimonials-heading"
          eyebrow="Testimonials"
          title="What Our Clients Say"
          subtitle="Client satisfaction is the true measure of our success."
        />
      </Container>

      {/* Auto-scrolling marquee — same continuous loop as "Our Clients". */}
      <div className="group relative mt-14 overflow-hidden">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-28" />

        {/* Two copies → translateX(-50%) loops seamlessly; pauses on hover. */}
        <ul className="animate-marquee flex w-max items-stretch [--marquee-duration:48s] hover:[animation-play-state:paused]">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
          {testimonials.map((t) => (
            <TestimonialCard key={`dup-${t.id}`} testimonial={t} aria-hidden />
          ))}
        </ul>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial: t,
  ...rest
}: {
  testimonial: Testimonial;
  "aria-hidden"?: boolean;
}) {
  return (
    <li {...rest} className="mr-6 w-[320px] shrink-0 sm:w-[380px]">
      <motion.figure
        whileHover={{ y: -6 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="flex h-full flex-col items-center gap-5 rounded-[32px] border border-line/70 bg-white px-7 py-9 text-center shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-lift)]"
      >
        <div className="relative">
          <img
            src={t.logo}
            alt={`${t.role} logo`}
            loading="lazy"
            className="size-20 rounded-2xl border border-line object-cover"
          />
          <span className="absolute -right-1 -bottom-1 grid size-8 place-items-center rounded-full bg-white text-teal shadow-sm">
            <Quote className="size-4" />
          </span>
        </div>

        <blockquote className="text-pretty text-ink/80 font-light leading-relaxed">
          “{t.quote}”
        </blockquote>

        <figcaption className="mt-auto">
          <p className="text-lg font-semibold text-ink">{t.name}</p>
          <p className="mt-0.5 text-sm font-light text-ink/70">{t.role}</p>
          <p className="mt-1 text-xs font-medium text-teal italic">
            {t.company}
          </p>
        </figcaption>
      </motion.figure>
    </li>
  );
}
