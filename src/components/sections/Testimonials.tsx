import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
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
        <ul className="animate-marquee flex w-max items-stretch px-4 py-8 [--marquee-duration:80s] hover:[animation-play-state:paused]">
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
    <li {...rest} className="mr-6 w-[340px] shrink-0 sm:w-[400px]">
      <motion.figure
        whileHover={{ y: -6 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="group/card relative flex h-full flex-col items-center gap-6 overflow-hidden rounded-[32px] border border-teal/15 bg-white px-8 py-10 text-center shadow-[0_10px_40px_-18px_rgba(0,71,76,0.35)] ring-1 ring-line/50 transition-all duration-300 hover:border-teal/35 hover:shadow-[0_24px_60px_-22px_rgba(0,71,76,0.45)]"
      >
        {/* Soft brand glow that warms on hover */}
        <span
          aria-hidden
          className="pointer-events-none absolute -top-16 left-1/2 size-44 -translate-x-1/2 rounded-full bg-brand opacity-0 blur-3xl transition-opacity duration-500 group-hover/card:opacity-15"
        />
        {/* Gradient top accent line */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-teal/40 to-transparent"
        />
        {/* Client logo */}
        <div className="flex h-16 items-center justify-center">
          <img
            src={t.logo}
            alt={`${t.role} logo`}
            loading="lazy"
            className="max-h-16 max-w-[200px] object-contain"
          />
        </div>

        <blockquote className="text-[15px] font-light leading-relaxed text-pretty text-ink sm:text-base">
          {t.quote}
        </blockquote>

        <figcaption className="mt-auto flex flex-col gap-0.5">
          <p className="text-2xl font-light text-ink">{t.name}</p>
          <p className="text-[15px] font-light text-ink sm:text-base">
            {t.role}
          </p>
          <p className="mt-0.5 text-sm font-medium text-ink/80 italic">
            {t.company}
          </p>
        </figcaption>
      </motion.figure>
    </li>
  );
}
