import storyImg from "../../assets/about/story.jpg";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

/** Brand wordmark with the signature gradient, reused across the prose. */
function Mark({ className = "" }: { className?: string }) {
  return <span className={`text-brand font-semibold ${className}`}>XONE13 STUDIOS</span>;
}

export function AboutStory() {
  return (
    <section id="story" className="py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <Reveal as="p" className="text-lg font-light leading-relaxed text-pretty text-ink/85">
              <Mark className="text-2xl font-bold" /> is a creative marketing and
              production partner helping brands build a strong and consistent
              presence through strategic content, branding, and digital
              execution.
            </Reveal>

            <Reveal as="p" delay={0.06} className="font-light leading-relaxed text-pretty text-ink/80">
              Founded in 2023 with a focus on photography, videography, and social
              media content, <Mark /> has grown into a full-service creative and
              marketing execution team offering branding, advertising, web
              presence, social media management, and digital marketing solutions.
            </Reveal>

            <Reveal as="p" delay={0.1} className="font-light leading-relaxed text-pretty text-ink/80">
              Operating across India and the UAE, we work with brands in
              interiors, luxury, hospitality, retail, real estate, cafes, and
              lifestyle sectors — delivering creative solutions with clarity,
              consistency, and long-term vision.
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
