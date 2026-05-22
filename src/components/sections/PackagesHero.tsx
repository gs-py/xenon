import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { staggerContainer, fadeUp } from "../../lib/motion";

/**
 * Banner hero for the /packages page. An on-brand teal gradient banner with a
 * centred white headline — pale teal at the top (so the dark nav stays
 * readable), deepening to teal behind the headline, then fading to white to
 * blend into the tier grid below.
 */
export function PackagesHero() {
  return (
    <section
      aria-labelledby="packages-heading"
      className="relative flex min-h-[56vh] items-center overflow-hidden bg-gradient-to-b from-teal-soft via-teal to-white pt-28 pb-16 lg:min-h-[60vh]"
    >
      {/* Soft brand glows for depth */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-16 left-1/4 size-96 rounded-full bg-sage opacity-30 blur-[110px]" />
        <div className="absolute top-1/3 right-1/5 size-80 rounded-full bg-teal-dark opacity-25 blur-[120px]" />
      </div>
      {/* Faint dotted texture, echoing the knit weave in the source design */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12] [background-image:radial-gradient(rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:18px_18px]"
      />

      <Container className="relative text-center">
        <motion.div
          variants={staggerContainer(0.12, 0.05)}
          initial="hidden"
          animate="visible"
          className="mx-auto flex max-w-3xl flex-col items-center"
        >
          <motion.h1
            id="packages-heading"
            variants={fadeUp}
            className="text-5xl font-bold leading-[1.02] text-balance text-white [text-shadow:0_2px_28px_rgba(0,71,76,0.5)] sm:text-6xl lg:text-7xl"
          >
            Get Started Today!
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-xl text-lg font-light text-pretty text-white/95 [text-shadow:0_1px_18px_rgba(0,71,76,0.45)] sm:text-xl"
          >
            Let’s create something amazing together and grow your business.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
