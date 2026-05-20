import storyImg from "../../assets/about/story.jpg";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { brand } from "../../data/site";

/** Brand wordmark with the signature gradient, reused across the prose. */
function Mark({ className = "" }: { className?: string }) {
  return <span className={`text-brand font-semibold ${className}`}>XONE13 STUDIOS</span>;
}

export function AboutStory() {
  return (
    <section id="story" className="py-20 lg:py-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <Reveal as="p" className="text-lg font-light leading-relaxed text-pretty text-ink/85">
              <Mark className="text-2xl font-bold" /> is a creative marketing and
              production partner built for brands that require more than
              fragmented execution. We integrate into businesses as a structured
              creative and marketing execution team, bringing clarity,
              consistency, and direction to how brands grow and communicate.
            </Reveal>

            <Reveal as="p" delay={0.06} className="font-light leading-relaxed text-pretty text-ink/80">
              Founded in 2023, <Mark /> began with photography, videography, and
              social media content creation. By 2025, it evolved into a
              full-scale execution system covering branding, advertising, content
              production, social media management, design, web presence, and
              digital marketing solutions.
            </Reveal>

            <Reveal as="p" delay={0.1} className="font-light leading-relaxed text-pretty text-ink/80">
              Operating across India and the United Arab Emirates, we work with
              brands from multiple industries including interiors, luxury, retail,
              hospitality, cafes, real estate, and lifestyle businesses. Our
              approach is built on long-term partnerships, structured
              communication, and execution that remains consistent over time.
            </Reveal>

            <Reveal as="p" delay={0.14} className="font-light leading-relaxed text-pretty text-ink/80">
              We believe strong brands are built through clarity, consistency,
              and creative execution. At {brand.name}, we work as a reliable
              creative and marketing partner, ensuring photography, videography,
              branding, and digital presence are managed with precision,
              stability, and purpose.
            </Reveal>
          </div>

          <Reveal className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-[32px] shadow-[var(--shadow-panel)]">
              <img
                src={storyImg}
                alt="A copy of “This Is Marketing” by Seth Godin on a concrete surface"
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] size-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
