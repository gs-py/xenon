import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { links } from "../../data/site";
import { inViewOnce } from "../../lib/motion";

/** YouTube id parsed from `links.showreel` (e.g. youtu.be/<id> or watch?v=<id>). */
const SHOWREEL_ID =
  links.showreel.match(/(?:youtu\.be\/|[?&]v=|\/embed\/)([\w-]{11})/)?.[1] ?? "";

export function Showcase() {
  return (
    <section
      id="work"
      aria-labelledby="showreel-heading"
      className="scroll-mt-24 py-10 lg:py-16"
    >
      <Container>
        <SectionHeading
          titleId="showreel-heading"
          eyebrow="Showreel"
          title="See Our Work in Motion"
          subtitle="Campaigns, productions, and brand films — a glimpse of what we create."
          className="mb-12 lg:mb-14"
        />
        <Reveal>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={inViewOnce}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative mx-auto block aspect-video w-full max-w-3xl overflow-hidden rounded-[36px] bg-ink-strong shadow-[var(--shadow-panel)] sm:rounded-[52px]"
          >
            {SHOWREEL_ID && (
              <>
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${SHOWREEL_ID}?autoplay=1&mute=1&loop=1&playlist=${SHOWREEL_ID}&playsinline=1&controls=1&rel=0&modestbranding=1`}
                  title="XONE13 Studios 2024 showreel"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 size-full"
                />
                {/* Pointer shield: blocks the mouse so YouTube auto-hides its
                    controls; releases on hover so the controls reappear. */}
                <div
                  aria-hidden
                  className="absolute inset-0 group-hover:pointer-events-none"
                />
              </>
            )}
          </motion.div>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex justify-center">
          <Button href={links.packages} size="lg">
            SEE OUR PACKAGES
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
