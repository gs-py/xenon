import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroBg from "../../assets/hero-bg.jpg";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { brand } from "../../data/site";
import { EASE_PREMIUM, staggerContainer, fadeUp } from "../../lib/motion";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Subtle parallax: the backdrop drifts down and fades as the hero scrolls away.
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.32, 0.7]);

  return (
    <section
      id="top"
      ref={ref}
      aria-labelledby="hero-heading"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-28 pb-20 lg:min-h-screen"
    >
      {/* Backdrop */}
      <motion.img
        src={heroBg}
        alt=""
        aria-hidden
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0 -z-20 size-full scale-110 object-cover"
        fetchPriority="high"
      />
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white/40 via-white/30 to-white"
      />

      <Container className="relative">
        <motion.div
          variants={staggerContainer(0.12, 0.05)}
          initial="hidden"
          animate="visible"
          className="mx-auto flex max-w-3xl flex-col items-center rounded-[40px] border border-white/60 bg-white/55 px-6 py-12 text-center shadow-[0_30px_80px_-40px_rgba(0,71,76,0.35)] backdrop-blur-md sm:px-12 sm:py-16"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-white/70 px-4 py-1.5 text-xs font-medium tracking-[0.14em] text-teal uppercase sm:text-sm"
          >
            <span className="size-1.5 rounded-full bg-brand" />
            {brand.tagline}
          </motion.span>

          <motion.h1
            id="hero-heading"
            variants={fadeUp}
            className="mt-6 text-4xl font-semibold leading-[1.08] text-balance text-ink sm:text-5xl lg:text-[3.6rem]"
          >
            We help founders grow and manage their business online.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-base font-light leading-relaxed text-pretty text-ink/85 sm:text-lg"
          >
            At <span className="font-medium text-teal-dark">{brand.name}</span>,
            we are a freelance 360° marketing and production agency helping
            brands in interiors, retail, cafés, luxury, and lifestyle build a
            strong online presence through creative storytelling, photography,
            videography, branding, and digital marketing.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Button href="#contact" size="lg">
              GET IN TOUCH
            </Button>
            <Button href="#work" variant="outline" size="lg" withArrow>
              View our work
            </Button>
          </motion.div>

          <motion.p
            variants={fadeUp}
            transition={{ ease: EASE_PREMIUM }}
            className="mt-8 text-sm font-light text-ink/65"
          >
            Trusted by{" "}
            <span className="font-medium text-ink">100+ brands</span> across
            interiors, retail &amp; hospitality.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
