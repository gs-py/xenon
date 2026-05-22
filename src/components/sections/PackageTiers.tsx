import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Briefcase,
  Camera,
  Monitor,
  Megaphone,
  Image,
  Check,
} from "lucide-react";
import { Container } from "../ui/Container";
import { RippleButton } from "../ui/RippleButton";
import { cn } from "../../lib/cn";
import { EASE_PREMIUM } from "../../lib/motion";
import { whatsappWith } from "../../data/site";
import {
  packages,
  type PackageCategory,
  type PackageTier,
} from "../../data/packages";

/* ── Category icon map ────────────────────────────────────────────────────── */
const categoryIcons: Record<string, React.ReactNode> = {
  "social-media": <Megaphone size={15} />,
  branding: <Briefcase size={15} />,
  website: <Monitor size={15} />,
  ads: <Image size={15} />,
  "photography-videography": <Camera size={15} />,
};

/* ── Tab switcher ─────────────────────────────────────────────────────────── */
function CategoryTabs({
  categories,
  activeId,
  onSelect,
}: {
  categories: PackageCategory[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="flex justify-center">
      <div className="relative mx-auto flex w-fit flex-wrap justify-center gap-1 rounded-full border border-black/10 bg-white/30 p-1.5 backdrop-blur-md shadow-sm">
        {categories.map((cat) => {
          const isActive = cat.id === activeId;
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelect(cat.id)}
              className={cn(
                "relative flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-semibold tracking-wide transition-colors duration-300",
                isActive
                  ? "text-white"
                  : "text-ink/50 hover:text-ink/80",
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="pkg-tab-bg"
                  aria-hidden
                  className="absolute inset-0 rounded-full bg-teal shadow-[0_4px_14px_rgba(0,121,130,0.35)]"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative flex items-center gap-1.5">
                {categoryIcons[cat.id]}
                {cat.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ── Glassy pricing card ──────────────────────────────────────────────────── */
function GlassyTierCard({
  tier,
  category,
  index,
}: {
  tier: PackageTier;
  category: string;
  index: number;
}) {
  const requestUrl = whatsappWith(
    `Hi XONE13 Studios, I'd like to enquire about the ${category} — ${tier.name} package. Please share the details.`,
  );

  return (
    <div
      className={cn(
        "flex-1 max-w-xs",
        tier.featured && "scale-105 relative z-10",
      )}
    >
      <div
        className={cn(
          "flex h-full flex-col rounded-2xl px-7 py-8 shadow-xl transition-all duration-300",
          "backdrop-blur-md bg-white/30 border border-black/10",
          tier.featured &&
          "ring-2 ring-teal/30 shadow-2xl",
        )}
      >
        {/* Popular badge */}
        {tier.featured && (
          <div className="absolute -top-4 right-4 rounded-full bg-teal px-3 py-1 text-[12px] font-semibold text-white">
            Most Popular
          </div>
        )}

        {/* Plan name — large, extralight */}
        <div className="mb-3">
          <h3 className="text-[42px] font-extralight tracking-[-0.03em] text-ink-strong leading-tight">
            {tier.name}
          </h3>
          <p className="mt-1 text-[15px] font-light text-ink/60">
            {tier.tagline}
          </p>
        </div>

        {/* Divider */}
        <div className="my-5 h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />

        {/* Feature list */}
        <ul className="mb-6 flex flex-col gap-2.5 text-[14px] text-ink/80">
          {tier.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2.5">
              <Check size={14} className="shrink-0 text-teal" strokeWidth={3} />
              <span className="font-light">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA — pushed to bottom */}
        <div className="mt-auto">
          <RippleButton
            href={requestUrl}
            newTab
            rippleColor="rgba(0,121,130,0.2)"
            className={cn(
              "block w-full rounded-xl py-3 text-center text-[14px] font-semibold transition-all duration-200",
              tier.featured
                ? "bg-teal text-white hover:brightness-110"
                : "border border-black/15 bg-black/[0.06] text-ink-strong hover:bg-black/[0.1]",
            )}
          >
            Request Package
          </RippleButton>
        </div>
      </div>
    </div>
  );
}

/* ── Main section ─────────────────────────────────────────────────────────── */
export function PackageTiers() {
  const [activeId, setActiveId] = useState(packages[0].id);
  const category = packages.find((c) => c.id === activeId) ?? packages[0];

  return (
    <section
      id="packages"
      aria-label="Service packages"
      className="relative scroll-mt-24 pb-20 lg:pb-28"
    >
      <Container className="relative z-10">
        {/* Category tab switcher */}
        <CategoryTabs
          categories={packages}
          activeId={activeId}
          onSelect={setActiveId}
        />

        {/* Glassy cards */}
        <div className="mt-14 flex flex-col items-center justify-center gap-8 md:flex-row md:gap-6">
          {category.tiers.map((tier, i) => (
            <GlassyTierCard
              key={tier.name}
              tier={tier}
              category={category.label}
              index={i}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
