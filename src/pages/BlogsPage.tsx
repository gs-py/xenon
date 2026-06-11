import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Reveal } from "../components/ui/Reveal";
import { BlogCard } from "../components/sections/BlogCard";
import { FinalCTA } from "../components/sections/FinalCTA";
// import { cn } from "../lib/cn";
import { posts } from "../data/blogs";
import { SEO } from "../components/seo/SEO";
import { SchemaMarkup } from "../components/seo/SchemaMarkup";
import { generateBreadcrumbSchema } from "../lib/seo/schemas";

export default function BlogsPage() {
  return (
    <>
      <SEO
        title="Marketing Blog & Insights"
        description="Explore the latest insights, strategies, and case studies from our digital marketing experts to help scale your business."
        canonical="https://xone13.com/blogs"
      />
      <SchemaMarkup
        schema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Blogs", url: "/blogs" },
        ])}
      />
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16">
        <Container>
          <SectionHeading
            eyebrow="The Journal"
            title="Insights & Ideas"
            subtitle="Monetization, marketing, and creative production — field notes on what’s working right now."
          />
        </Container>
      </section>

      <section aria-label="Blog posts" className="pb-16 lg:pb-24">
        <Container>
          <div className="flex flex-col gap-20 lg:gap-28">
            {posts.map((post, i) => (
              <Reveal key={post.id}>
                <BlogCard post={post} flip={i % 2 === 1} />
              </Reveal>
            ))}
          </div>

          {/* <Reveal>
            <Pagination />
          </Reveal> */}
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}

// function Pagination() {
//   const pillBase =
//     "bg-brand text-white rounded-full px-5 py-2.5 text-sm font-semibold shadow-[var(--shadow-button)] transition-transform duration-300 ease-[var(--ease-premium)] hover:-translate-y-0.5";
//   return (
//     <nav
//       aria-label="Blog pagination"
//       className="mt-16 flex items-center justify-center gap-3 lg:mt-24"
//     >
//       <button type="button" className={pillBase}>
//         First
//       </button>
//       <div className="flex items-center gap-2">
//         {[1, 2].map((page) => (
//           <button
//             key={page}
//             type="button"
//             aria-label={`Page ${page}`}
//             aria-current={page === 1 ? "page" : undefined}
//             className={cn(
//               "grid size-9 place-items-center rounded-full text-sm font-semibold transition-colors",
//               page === 1
//                 ? "bg-brand text-white"
//                 : "border border-teal/40 text-teal hover:bg-teal-soft/50",
//             )}
//           >
//             {page}
//           </button>
//         ))}
//       </div>
//       <button type="button" className={pillBase}>
//         Last
//       </button>
//     </nav>
//   );
// }
