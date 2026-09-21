import { ArrowUpRight } from "../components/icons";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { SEO } from "../components/seo/SEO";

interface Project {
  name: string;
  category: string;
  url: string;
  domain: string;
  monogram: string;
  previewClass: string;
}

const projects: Project[] = [
  {
    name: "Tidy Point",
    category: "Cleaning services",
    url: "https://www.tidy-point.co.uk/",
    domain: "tidy-point.co.uk",
    monogram: "TP",
    previewClass: "bg-[#eaf3f6] text-[#164c68]",
  },
  {
    name: "Sky Handlers Logistics",
    category: "Logistics & transport",
    url: "https://www.skyhandlerslogistics.com/",
    domain: "skyhandlerslogistics.com",
    monogram: "SH",
    previewClass: "bg-[#e8edf1] text-[#193344]",
  },
  {
    name: "Pools & Landscaping",
    category: "Outdoor living",
    url: "https://pools-landscaping.ae/",
    domain: "pools-landscaping.ae",
    monogram: "P&L",
    previewClass: "bg-[#e6f2ef] text-[#0f6869]",
  },
  {
    name: "Impress Build",
    category: "Construction & interiors",
    url: "https://impressbuild.ae/",
    domain: "impressbuild.ae",
    monogram: "IB",
    previewClass: "bg-[#eeeae5] text-[#624d3f]",
  },
  {
    name: "Interior World",
    category: "Interior design",
    url: "https://interiorworld.in/",
    domain: "interiorworld.in",
    monogram: "IW",
    previewClass: "bg-[#f0ebe5] text-[#5f4e42]",
  },
  {
    name: "Hawks Hotels",
    category: "Hospitality",
    url: "https://www.hawkshotels.com/",
    domain: "hawkshotels.com",
    monogram: "HH",
    previewClass: "bg-[#e9edf6] text-[#273c68]",
  },
  {
    name: "IO Studio",
    category: "Creative studio",
    url: "https://iostudio.work/",
    domain: "iostudio.work",
    monogram: "IO",
    previewClass: "bg-[#eeeaf4] text-[#564276]",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal as="article" delay={index * 0.06} className="group">
      <div className="overflow-hidden rounded-[28px] border border-line bg-white shadow-[var(--shadow-card)] transition-all duration-500 ease-[var(--ease-premium)] group-hover:-translate-y-1 group-hover:shadow-[var(--shadow-lift)]">
        <div className="flex items-center justify-between gap-4 border-b border-line bg-[#fafcfb] px-4 py-3 sm:px-5">
          <div className="flex min-w-0 items-center gap-3">
            <div aria-hidden className="flex shrink-0 gap-1.5">
              <span className="size-2 rounded-full bg-[#f0a39a]" />
              <span className="size-2 rounded-full bg-[#e7c777]" />
              <span className="size-2 rounded-full bg-[#96c7b0]" />
            </div>
            <span className="truncate text-[11px] font-medium tracking-[0.08em] text-ink-muted">
              {project.domain}
            </span>
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={"Open " + project.name + " website"}
            className="grid size-8 shrink-0 place-items-center rounded-full border border-line bg-white text-teal transition-colors hover:border-teal hover:bg-teal-soft"
          >
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className={"relative aspect-[16/10] overflow-hidden " + project.previewClass}>
          <div aria-hidden className="absolute -right-10 -top-10 size-48 rounded-full border-[28px] border-current/10" />
          <div aria-hidden className="absolute bottom-[-35%] left-[-5%] h-[75%] w-[70%] rounded-[42%] border border-current/15" />
          <div className="absolute inset-x-6 top-6 flex items-center justify-between border-b border-current/15 pb-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] opacity-70">
              Live experience
            </span>
            <span className="size-2 rounded-full bg-current opacity-70" />
          </div>
          <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-5xl font-semibold tracking-[-0.08em] sm:text-6xl">
                {project.monogram}
              </p>
              <p className="mt-2 max-w-[15rem] text-xs font-medium uppercase tracking-[0.14em] opacity-70">
                {project.category}
              </p>
            </div>
            <span className="grid size-12 shrink-0 place-items-center rounded-full border border-current/20 bg-white/35 text-sm backdrop-blur-sm">
              <ArrowUpRight className="size-5" />
            </span>
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10"
          >
            <span className="sr-only">Visit {project.name}</span>
          </a>
        </div>

        <div className="flex items-center justify-between gap-4 px-5 py-5 sm:px-6">
          <div>
            <h2 className="text-lg font-semibold tracking-[-0.02em] text-ink-strong">
              {project.name}
            </h2>
            <p className="mt-1 text-sm font-light text-ink-muted">
              {project.category}
            </p>
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden shrink-0 items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-teal transition-colors hover:text-teal-dark sm:flex"
          >
            Visit site
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </Reveal>
  );
}

export default function WorkPage() {
  return (
    <>
      <SEO
        title="Our Work | Websites & Digital Experiences"
        description="Explore websites and digital experiences created by XONE13 Studios for ambitious brands across industries and markets."
        canonical="https://xone13.com/work"
        keywords={["website design portfolio", "web design Dubai", "digital experiences"]}
      />

      <section className="relative overflow-hidden bg-[#f7fbf9] pb-16 pt-32 sm:pb-20 lg:pb-24 lg:pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-28 size-[420px] rounded-full bg-teal/10 blur-3xl"
        />
        <Container className="relative">
          <div className="max-w-4xl">
            <Reveal as="p" className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-teal">
              Selected work
            </Reveal>
            <Reveal
              as="h1"
              delay={0.06}
              className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.045em] text-ink-strong sm:text-7xl lg:text-[92px]"
            >
              Websites that make brands{" "}
              <span className="font-serif font-normal italic text-teal-dark">stand out.</span>
            </Reveal>
            <Reveal
              as="p"
              delay={0.12}
              className="mt-7 max-w-2xl text-base font-light leading-relaxed text-ink/80 sm:text-lg"
            >
              A selection of digital experiences we have shaped across sectors,
              markets, and ambitions. Explore each live site below.
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-28" aria-labelledby="projects-heading">
        <Container>
          <div className="mb-10 flex items-end justify-between gap-6 sm:mb-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
                In the wild
              </p>
              <h2 id="projects-heading" className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-ink-strong sm:text-4xl">
                A closer look at our work
              </h2>
            </div>
            <p className="hidden max-w-xs text-right text-sm font-light leading-relaxed text-ink-muted sm:block">
              Click any preview to open the live experience.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.url} project={project} index={index} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
