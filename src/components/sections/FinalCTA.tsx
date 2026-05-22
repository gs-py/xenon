import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { useInquiry } from "../ui/InquiryModal";
import { cn } from "../../lib/cn";
import { brand } from "../../data/site";

interface FinalCTAProps {
  /** `dark` (default) = ink panel with white text; `light` = frosted panel for shader pages. */
  variant?: "dark" | "light";
}

export function FinalCTA({ variant = "dark" }: FinalCTAProps) {
  const { open: openInquiry } = useInquiry();
  const isLight = variant === "light";

  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      className="scroll-mt-24 py-20 lg:py-28"
    >
      <Container>
        <div
          className={cn(
            "relative overflow-hidden rounded-[36px] px-6 py-16 text-center sm:rounded-[48px] sm:px-12 sm:py-20",
            isLight
              ? "border border-black/10 bg-white/70 shadow-xl backdrop-blur-md"
              : "bg-ink-strong",
          )}
        >
          {/* Elegant background glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-0"
          >
            <div
              className={cn(
                "absolute -top-20 left-1/4 size-80 rounded-full bg-teal blur-[100px]",
                isLight ? "opacity-15" : "opacity-30",
              )}
            />
            <div
              className={cn(
                "absolute -bottom-24 right-1/4 size-80 rounded-full bg-sage blur-[100px]",
                isLight ? "opacity-15" : "opacity-25",
              )}
            />
          </div>

          <div className="relative">
            <Reveal
              as="h2"
              id="cta-heading"
              className={cn(
                "mx-auto max-w-2xl text-3xl font-semibold text-balance sm:text-4xl lg:text-5xl",
                isLight ? "text-ink-strong" : "text-white",
              )}
            >
              Anything else you’re thinking about?
            </Reveal>
            <Reveal
              as="p"
              delay={0.06}
              className={cn(
                "mx-auto mt-5 max-w-xl text-base font-light text-pretty sm:text-lg",
                isLight ? "text-ink/70" : "text-white/75",
              )}
            >
              Feel free to reach out to us with any questions — we usually reply
              within one business day.
            </Reveal>

            <Reveal
              delay={0.12}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Button onClick={openInquiry} size="lg" withArrow>
                Send an enquiry
              </Button>
              <Button
                href={brand.socials.email}
                variant={isLight ? "outline" : "onDark"}
                size="lg"
                withArrow
              >
                E-Mail us
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
