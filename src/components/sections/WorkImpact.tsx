import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { Spotlight } from "../ui/Spotlight";
import { SplineScene } from "../ui/SplineScene";

const SPLINE_SCENE =
  "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

export function WorkImpact() {
  return (
    <section
      id="work"
      aria-labelledby="impact-heading"
      className="py-20 lg:py-28"
    >
      <Container>
        <div className="relative overflow-hidden rounded-[32px] bg-black/[0.96] shadow-2xl sm:rounded-[40px]">
          <Spotlight
            className="-top-40 left-0 md:-top-20 md:left-60"
            fill="white"
          />

          <div className="flex flex-col md:h-[520px] md:flex-row">
            {/* Left — copy */}
            <div className="relative z-10 flex flex-1 flex-col items-start justify-center p-8 sm:p-12">
              <Reveal
                as="h2"
                id="impact-heading"
                className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold text-balance text-transparent sm:text-5xl"
              >
                Work That Creates Impact
              </Reveal>
              <Reveal
                as="p"
                delay={0.08}
                className="mt-6 max-w-lg text-base font-light leading-relaxed text-pretty text-neutral-300 sm:text-lg"
              >
                Every project we deliver is driven by creativity, strategy, and
                precision. We create experiences that not only look exceptional
                but also help brands grow, engage, and stand out in competitive
                markets.
              </Reveal>
              <Reveal delay={0.16} className="mt-9">
                <Button href="#contact" size="lg" withArrow>
                  Get in touch
                </Button>
              </Reveal>
            </div>

            {/* Right — interactive 3D scene */}
            <div className="relative h-[320px] w-full md:h-auto md:flex-1">
              <SplineScene scene={SPLINE_SCENE} className="h-full w-full" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
