import { motion } from "framer-motion";
import aboutHero from "../../assets/about/hero.jpg";
import { Container } from "../ui/Container";
import { fadeUp, staggerContainer } from "../../lib/motion";

export function AboutHero() {
  return (
    <section
      aria-labelledby="about-hero-heading"
      className="relative flex min-h-[78vh] items-end overflow-hidden pt-32 pb-16 lg:min-h-[88vh] lg:pb-24"
    >
      <img
        src={aboutHero}
        alt=""
        aria-hidden
        className="absolute inset-0 -z-20 size-full object-cover"
        fetchPriority="high"
      />
      {/* White at top for navbar contrast → teal scrim at the bottom for the headline. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-white from-[16%] via-teal-dark/15 to-teal-dark/60"
      />

      <Container className="relative">
        <motion.div
          variants={staggerContainer(0.12, 0.05)}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.h1
            id="about-hero-heading"
            variants={fadeUp}
            className="text-4xl font-bold leading-[1.05] text-balance text-white drop-shadow-[0_2px_24px_rgba(0,40,43,0.4)] sm:text-6xl lg:text-7xl"
          >
            Good companies can change the world
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-2xl font-bold text-white/55 sm:text-4xl lg:text-5xl"
          >
            We help build them
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
