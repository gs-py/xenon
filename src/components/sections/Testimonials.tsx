import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealGroup, RevealItem } from "../ui/Reveal";
import { Quote } from "../icons";
import { testimonials, type Testimonial } from "../../data/testimonials";

function initials(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

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

        <RevealGroup
          className="mt-14 grid gap-6 md:grid-cols-3"
          stagger={0.12}
        >
          {testimonials.map((t) => (
            <RevealItem key={t.id}>
              <TestimonialCard testimonial={t} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}

function TestimonialCard({ testimonial: t }: { testimonial: Testimonial }) {
  return (
    <motion.figure
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="flex h-full flex-col items-center gap-5 rounded-[32px] border border-line/70 bg-white px-7 py-9 text-center shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-lift)]"
    >
      <div className="relative">
        <span className="grid size-20 place-items-center rounded-full bg-brand text-xl font-semibold text-white">
          {initials(t.name)}
        </span>
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
  );
}
