import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";
import work1 from "../../assets/about/work-1.jpg";
import work2 from "../../assets/about/work-2.jpg";
import work3 from "../../assets/about/work-3.jpg";
import work4 from "../../assets/about/work-4.jpg";

interface GalleryImage {
  src: string;
  alt: string;
  /** Grid placement classes applied at the `lg` breakpoint. */
  place: string;
}

const gallery: GalleryImage[] = [
  { src: work1, alt: "Interior product photography", place: "lg:col-start-1 lg:row-span-2" },
  { src: work2, alt: "Behind-the-scenes production shoot", place: "lg:col-start-2 lg:row-start-1" },
  { src: work3, alt: "Studio audio recording session", place: "lg:col-start-2 lg:row-start-2" },
  { src: work4, alt: "Hospitality and lifestyle photography", place: "lg:col-start-3 lg:row-span-2" },
];

export function WorkImpact() {
  return (
    <section id="work" aria-labelledby="impact-heading" className="bg-brand py-20 text-white lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-start">
            <Reveal as="h2" id="impact-heading" className="text-4xl font-bold text-balance text-white sm:text-5xl">
              Work That Creates Impact
            </Reveal>
            <Reveal as="p" delay={0.08} className="mt-6 max-w-lg text-base font-light leading-relaxed text-pretty text-white/85 sm:text-lg">
              Every project we deliver is driven by creativity, strategy, and
              precision. We create experiences that not only look exceptional but
              also help brands grow, engage, and stand out in competitive markets.
            </Reveal>
            <Reveal delay={0.16} className="mt-9">
              <Button
                href="#contact"
                variant="outline"
                size="lg"
                withArrow
                className="border-transparent text-teal-dark shadow-[var(--shadow-button)]"
              >
                Get in touch
              </Button>
            </Reveal>
          </div>

          <RevealGroup
            className="grid grid-cols-2 gap-3 sm:gap-4 lg:h-[440px] lg:grid-cols-3 lg:grid-rows-2"
            stagger={0.1}
          >
            {gallery.map((img) => (
              <RevealItem
                key={img.src}
                className={`group h-44 overflow-hidden rounded-2xl sm:h-56 lg:h-full ${img.place}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover transition-transform duration-[600ms] ease-[var(--ease-premium)] group-hover:scale-105"
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
