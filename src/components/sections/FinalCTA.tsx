import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { useInquiry } from "../ui/InquiryModal";
import { brand } from "../../data/site";

export function FinalCTA() {
  const { open: openInquiry } = useInquiry();
  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      className="scroll-mt-24 py-20 lg:py-28"
    >
      <Container>
        <div className="relative overflow-hidden rounded-[36px] bg-ink-strong px-6 py-16 text-center sm:rounded-[48px] sm:px-12 sm:py-20">
          {/* Elegant background glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-0"
          >
            <div className="absolute -top-20 left-1/4 size-80 rounded-full bg-teal opacity-30 blur-[100px]" />
            <div className="absolute -bottom-24 right-1/4 size-80 rounded-full bg-sage opacity-25 blur-[100px]" />
          </div>

          <div className="relative">
            <Reveal
              as="h2"
              id="cta-heading"
              className="mx-auto max-w-2xl text-3xl font-semibold text-balance text-white sm:text-4xl lg:text-5xl"
            >
              Anything else you’re thinking about?
            </Reveal>
            <Reveal
              as="p"
              delay={0.06}
              className="mx-auto mt-5 max-w-xl text-base font-light text-pretty text-white/75 sm:text-lg"
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
                variant="onDark"
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
