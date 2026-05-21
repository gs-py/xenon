import { HeroSection } from "../ui/hero-section-with-smooth-bg-shader";
import { useInquiry } from "../ui/InquiryModal";

export function AboutHero() {
  const { open: openInquiry } = useInquiry();
  return (
    <HeroSection
      eyebrow="About XONE13 Studios"
      title="Good companies can change"
      highlightText="the world"
      description="We are a 360° marketing & production studio crafting brands that people remember — through creative storytelling, design, and unmistakable craft."
      buttonText="Get in touch"
      buttonArrow
      onButtonClick={openInquiry}
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
      // Slightly stronger veil so the headline + copy stay legible over the shader
      veilOpacity="bg-white/35"
      eyebrowClassName="!text-teal-dark"
      // Elegant display headline — tight tracking, controlled leading
      titleClassName="!font-semibold tracking-[-0.04em] !leading-[0.95] xl:text-[96px] text-ink-strong [text-shadow:0_1px_22px_rgba(255,255,255,0.55)]"
      // Serif italic accent for a refined, editorial contrast
      highlightClassName="font-serif italic font-normal text-teal-dark tracking-[-0.01em] xl:text-[1.05em]"
      // Description — darker ink for clear contrast against the light shader
      descriptionClassName="!text-ink-strong/90 !text-lg sm:!text-xl !max-w-xl !font-normal !leading-relaxed tracking-[0.01em] mt-3 [text-shadow:0_1px_16px_rgba(255,255,255,0.5)]"
      // Filled gradient pill — high-contrast, clearly tappable CTA
      buttonClassName="mt-2 !border-0 !bg-brand !text-white !px-9 !py-4 !text-xs font-semibold tracking-[0.22em] uppercase shadow-[var(--shadow-button)] transition-all duration-300 hover:!brightness-[1.06]"
    />
  );
}
