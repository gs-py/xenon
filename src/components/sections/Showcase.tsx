import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { links } from "../../data/site";
import { inViewOnce } from "../../lib/motion";

export function Showcase() {
  return (
    <section
      id="work"
      aria-label="Studio showreel"
      className="scroll-mt-24 py-10 lg:py-16"
    >
      <Container>
        <Reveal>
          <motion.a
            href={links.showreel}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Watch our 2024 showreel on YouTube"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={inViewOnce}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative block aspect-[16/9] w-full overflow-hidden rounded-[36px] bg-ink-strong shadow-[var(--shadow-panel)] sm:aspect-[21/10] sm:rounded-[52px]"
          >
            {/* Branded gradient "media" surface */}
            <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_20%_0%,#0a5a60_0%,#003b40_45%,#001f22_100%)]" />
            <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(115deg,transparent_30%,rgba(174,189,161,0.5)_50%,transparent_70%)]" />
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.07] [background-image:repeating-linear-gradient(90deg,#fff_0_1px,transparent_1px_64px)]"
            />

            {/* Play affordance + caption */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 text-white">
              <span className="grid size-20 place-items-center rounded-full bg-white/15 ring-1 ring-white/40 backdrop-blur-sm transition-transform duration-500 ease-[var(--ease-premium)] group-hover:scale-110">
                <span className="grid size-14 place-items-center rounded-full bg-white text-teal-dark">
                  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden>
                    <path d="M8 5.5v13l11-6.5-11-6.5Z" fill="currentColor" />
                  </svg>
                </span>
              </span>
              <div className="text-center">
                <p className="text-lg font-semibold sm:text-xl">
                  Watch our 2024 showreel
                </p>
                <p className="mt-1 text-sm font-light text-white/70">
                  Campaigns, productions &amp; brand films
                </p>
              </div>
            </div>
          </motion.a>
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
