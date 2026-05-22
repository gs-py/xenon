import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { VerticalCutReveal } from "../ui/VerticalCutReveal";
import { staggerContainer } from "../../lib/motion";

/**
 * Heading for the /packages page — transparent background (shader shows
 * through), large gradient heading via VerticalCutReveal, subtitle.
 * Matches the animated-glassy-pricing reference aesthetic.
 */
export function PackagesHero() {
  return (
    <section
      aria-labelledby="packages-heading"
      className="relative w-full pt-36 pb-14 lg:pt-40 lg:pb-16"
    >
      <Container className="relative z-10 text-center">
        <motion.div
          variants={staggerContainer(0.1, 0.04)}
          initial="hidden"
          animate="visible"
          className="mx-auto flex max-w-5xl flex-col items-center"
        >
          <h1
            id="packages-heading"
            className="text-5xl font-extralight leading-tight tracking-[-0.03em] text-ink-strong sm:text-6xl lg:text-[72px] whitespace-nowrap"
          >
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.12}
              staggerFrom="first"
              reverse={true}
              containerClassName="flex-wrap justify-center gap-x-3 lg:gap-x-4"
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 40,
                delay: 0,
              }}
            >
              Find the Perfect Package
            </VerticalCutReveal>
          </h1>

        </motion.div>
      </Container>
    </section>
  );
}
