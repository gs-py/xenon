import { HeroSection } from "../ui/hero-section-with-smooth-bg-shader";

export function AboutHero() {
  return (
    <HeroSection
      eyebrow="About XONE13 Studios"
      title="Good companies can change"
      highlightText="the world"
      description="We are a 360° marketing & production studio crafting brands that people remember — through creative storytelling, design, and unmistakable craft."
      buttonText="Get in touch"
      buttonArrow
      onButtonClick={() => {
        window.location.href = "#contact";
      }}
      fontFamily="Montserrat, sans-serif"
      fontWeight={600}
      maxWidth="max-w-5xl"
      distortion={1.2}
      speed={0.8}
      // On-brand teal → sage flowing palette
      colors={[
        "#007982", // brand teal
        "#4f9ca0", // mid teal
        "#aebda1", // sage
        "#cfe0d2", // pale sage
        "#e3f0f1", // teal-soft
        "#eef6f3", // near-white wash
      ]}
      eyebrowClassName="!text-teal-dark/70"
      // Elegant display headline — tight tracking, controlled leading
      titleClassName="!font-semibold tracking-[-0.04em] !leading-[0.95] xl:text-[96px] text-ink-strong"
      // Serif italic accent for a refined, editorial contrast
      highlightClassName="font-serif italic font-normal text-teal tracking-[-0.01em] xl:text-[1.05em]"
      // Airy, light description
      descriptionClassName="!text-ink/70 !text-lg sm:!text-xl !max-w-xl font-light !leading-relaxed tracking-[0.01em] mt-3"
      // Elegant ghost pill — teal-dark sweeps up to fill on hover
      buttonClassName="mt-2 !border !border-teal-dark/30 !bg-transparent !text-teal-dark !px-9 !py-4 !text-xs font-semibold tracking-[0.22em] uppercase backdrop-blur-sm transition-all duration-500 hover:!text-white hover:!border-teal-dark before:absolute before:inset-0 before:-z-0 before:translate-y-full before:bg-teal-dark before:transition-transform before:duration-500 before:ease-[cubic-bezier(0.16,1,0.3,1)] hover:before:translate-y-0"
    />
  );
}
