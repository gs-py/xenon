import { Button } from "../ui/Button";
import { cn } from "../../lib/cn";
import type { Post } from "../../data/blogs";

interface BlogCardProps {
  post: Post;
  /** When true, the image sits on the right (alternating layout). */
  flip?: boolean;
}

export function BlogCard({ post, flip = false }: BlogCardProps) {
  return (
    <article
      id={post.id}
      className="grid scroll-mt-28 items-center gap-8 lg:grid-cols-2 lg:gap-14"
    >
      {/* Image + decorative gradient edge bar */}
      <div className={cn("relative", flip ? "lg:order-2" : "lg:order-1")}>
        <span
          aria-hidden
          className={cn(
            "absolute inset-y-8 -z-10 w-24 rounded-[28px] bg-brand",
            flip ? "-right-4 lg:-right-6" : "-left-4 lg:-left-6",
          )}
        />
        <div className="overflow-hidden rounded-[28px] shadow-[var(--shadow-card)]">
          <img
            src={post.image}
            alt={post.imageAlt}
            loading="lazy"
            decoding="async"
            className="aspect-[16/12] w-full object-cover transition-transform duration-[600ms] ease-[var(--ease-premium)] hover:scale-[1.04]"
          />
        </div>
      </div>

      {/* Content */}
      <div
        className={cn(
          "flex flex-col items-start",
          flip ? "lg:order-1" : "lg:order-2",
        )}
      >
        <span className="text-brand text-xs font-semibold tracking-[0.18em] uppercase">
          {post.category}
        </span>
        <h2 className="text-brand mt-3 text-2xl font-bold text-balance sm:text-3xl lg:text-[34px] lg:leading-[1.15]">
          {post.title}
        </h2>
        <p className="mt-4 line-clamp-3 max-w-xl font-light leading-relaxed text-pretty text-ink/80">
          {post.excerpt}
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-4">
          {/* <Button href={`#${post.id}`} withArrow>
            Read More
          </Button> */}
          <span className="inline-flex items-center rounded-full border border-teal/50 px-4 py-2 text-sm font-medium text-teal">
            {post.date}
          </span>
        </div>
      </div>
    </article>
  );
}
