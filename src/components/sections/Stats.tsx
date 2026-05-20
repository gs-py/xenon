import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { useCountUp } from "../../hooks/useCountUp";
import { stats, type Stat } from "../../data/stats";

export function Stats() {
  return (
    <section
      id="about"
      aria-labelledby="stats-heading"
      className="scroll-mt-24 py-20 lg:py-28"
    >
      <Container className="text-center">
        <Reveal
          as="h2"
          id="stats-heading"
          className="mx-auto max-w-3xl text-3xl font-semibold text-balance text-ink sm:text-4xl lg:text-5xl"
        >
          The region’s leading digital marketing agency
        </Reveal>
        <Reveal
          as="p"
          delay={0.06}
          className="text-brand mt-4 text-2xl font-semibold opacity-30 sm:text-3xl"
        >
          Trusted by Hundreds of brands
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-12 sm:grid-cols-2">
          {stats.map((stat) => (
            <StatItem key={stat.id} stat={stat} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function StatItem({ stat }: { stat: Stat }) {
  const { ref, value } = useCountUp<HTMLParagraphElement>({ to: stat.value });
  return (
    <Reveal className="flex flex-col items-center">
      <p
        ref={ref}
        className="text-brand text-7xl font-semibold tabular-nums lg:text-8xl"
      >
        {value}
        {stat.suffix}
      </p>
      <p className="mt-2 text-lg font-light text-ink/80">{stat.label}</p>
    </Reveal>
  );
}
