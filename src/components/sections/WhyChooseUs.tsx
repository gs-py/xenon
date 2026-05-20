import type { ComponentType, SVGProps } from "react";
import { Container } from "../ui/Container";
import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";
import { ArrowUpRight, Layers, Pulse, Sparkle, Target } from "../icons";
import { brand } from "../../data/site";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

interface Differentiator {
  Icon: IconComponent;
  title: string;
  body: string;
}

const differentiators: Differentiator[] = [
  {
    Icon: Target,
    title: "A creative extension of your team",
    body: "We work shoulder-to-shoulder with founders — not at arm's length.",
  },
  {
    Icon: Layers,
    title: "360° production, in-house",
    body: "Strategy, content, photography, video and branding under one roof.",
  },
  {
    Icon: Pulse,
    title: "Built to drive results",
    body: "Marketing that compounds engagement, quality leads and revenue.",
  },
  {
    Icon: Sparkle,
    title: "Online & offline impact",
    body: "Powerful brand experiences across every customer touchpoint.",
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-us-heading"
      className="py-20 lg:py-28"
    >
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] border border-line bg-white p-8 shadow-[var(--shadow-panel)] sm:p-12 lg:rounded-[56px] lg:p-16">
            {/* Soft brand glow */}
            <div
              aria-hidden
              className="animate-float pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-brand opacity-10 blur-3xl"
            />

            <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col">
                <h2
                  id="why-us-heading"
                  className="text-3xl font-semibold text-balance text-ink sm:text-4xl"
                >
                  Why Choose <span className="text-brand">{brand.name}</span>?
                </h2>
                <p className="mt-6 text-base font-light leading-relaxed text-pretty text-ink/80">
                  We believe strong brands create lasting impact, and we help
                  businesses grow through creative marketing, production, and
                  digital solutions. From startups to established brands, we
                  work closely with our clients as a creative extension of
                  their team — delivering strategy, content, photography,
                  videography, branding, and marketing that drive engagement
                  and results.
                </p>
                <p className="mt-4 text-base font-light leading-relaxed text-pretty text-ink/80">
                  At {brand.name}, we combine creativity, storytelling, and
                  marketing expertise to build powerful brand experiences both
                  online and offline.
                </p>
                <a
                  href="#contact"
                  className="group mt-7 inline-flex items-center gap-2 self-start text-base font-medium text-teal"
                >
                  <span className="text-brand">View our company profile</span>
                  <span className="grid size-7 place-items-center rounded-full bg-teal-soft text-teal transition-transform duration-300 ease-[var(--ease-premium)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight className="size-4" />
                  </span>
                </a>
              </div>

              <RevealGroup className="grid gap-4 sm:grid-cols-2" stagger={0.1}>
                {differentiators.map(({ Icon, title, body }) => (
                  <RevealItem
                    key={title}
                    className="flex h-full flex-col gap-3 rounded-3xl border border-line bg-[#f7f7f4] p-6 transition-colors duration-300 hover:border-teal/30"
                  >
                    <span className="grid size-12 place-items-center rounded-2xl bg-brand text-white">
                      <Icon className="size-6" />
                    </span>
                    <h3 className="text-base font-semibold text-ink">
                      {title}
                    </h3>
                    <p className="text-sm font-light leading-relaxed text-ink/75">
                      {body}
                    </p>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
