import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { ArrowUpRight, BarChart } from "../icons";
import { cn } from "../../lib/cn";
import { EASE_PREMIUM } from "../../lib/motion";
import { whatsappWith } from "../../data/site";
import { packages, type PackageTier } from "../../data/packages";

export function PackageTiers() {
  const [activeId, setActiveId] = useState(packages[0].id);
  const category = packages.find((c) => c.id === activeId) ?? packages[0];

  return (
    <section
      id="packages"
      aria-label="Service packages"
      className="scroll-mt-24 pb-24 lg:pb-28"
    >
      <Container>
        {/* Category selector */}
        <Reveal className="flex justify-center">
          <div
            role="tablist"
            aria-label="Package categories"
            className="flex max-w-full gap-1 overflow-x-auto rounded-full border border-line bg-white p-1.5 shadow-card [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {packages.map((cat) => {
              const isActive = cat.id === activeId;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveId(cat.id)}
                  className={cn(
                    "relative whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide uppercase transition-colors duration-300",
                    isActive
                      ? "text-teal-dark"
                      : "text-teal/70 hover:text-teal",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="pkg-tab"
                      aria-hidden
                      className="absolute inset-0 -z-10 rounded-full bg-teal-soft"
                      transition={{ duration: 0.4, ease: EASE_PREMIUM }}
                    />
                  )}
                  {cat.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Tier cards — re-keyed per category so they re-reveal on switch */}
        <AnimatePresence mode="wait">
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: EASE_PREMIUM }}
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:items-stretch"
          >
            {category.tiers.map((tier) => (
              <TierCard
                key={tier.name}
                tier={tier}
                category={category.label}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}

function TierCard({
  tier,
  category,
}: {
  tier: PackageTier;
  category: string;
}) {
  const requestUrl = whatsappWith(
    `Hi XONE13 Studios, I'd like to request the ${category} — ${tier.name} package. Please share the details.`,
  );

  return (
    <div
      className={cn(
        "group relative flex h-full flex-col rounded-[28px] border p-7 transition duration-300 ease-[var(--ease-premium)] hover:-translate-y-1 hover:shadow-lift sm:p-8",
        tier.featured
          ? "border-teal/25 bg-gradient-to-b from-teal-soft/70 to-white shadow-lift ring-1 ring-teal/10 lg:-mt-3 lg:mb-3"
          : "border-line bg-gradient-to-b from-teal-soft/35 to-white shadow-card hover:border-teal/40",
      )}
    >
      {tier.featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1 text-[11px] font-semibold tracking-[0.16em] text-white uppercase shadow-button">
          Most Popular
        </span>
      )}

      <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-teal-soft text-teal transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
        <BarChart className="size-6" />
      </span>

      <h3 className="text-brand mt-5 text-2xl font-semibold sm:text-[28px]">
        {tier.name}
      </h3>
      <p className="mt-2 text-sm font-light leading-relaxed text-ink/70">
        {tier.tagline}
      </p>

      <ul className="mt-6 flex flex-col gap-3">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-md bg-teal-soft text-teal">
              <ArrowUpRight className="size-3.5" />
            </span>
            <span className="text-sm font-light leading-snug text-ink/85">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Button
        href={requestUrl}
        newTab
        withArrow
        size="lg"
        className="mt-8 w-full"
      >
        Request Package
      </Button>
    </div>
  );
}
