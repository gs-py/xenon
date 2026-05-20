import blog1 from "../assets/blogs/blog-1.jpg";
import blog2 from "../assets/blogs/blog-2.jpg";
import blog3 from "../assets/blogs/blog-3.jpg";
import blog4 from "../assets/blogs/blog-4.jpg";

export interface Post {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  imageAlt: string;
}

export const posts: Post[] = [
  {
    id: "monetization-insights",
    category: "Monetization",
    title: "4 New Monetization and Marketing Insights from the Past Few Weeks",
    excerpt:
      "Instead of complicated sales funnels, some creators are offering a basic $1/month membership — no tiers, no paywalls, just support. The idea, popularized by Manuel Moreale, has inspired a growing community of $1/month creators. Maybe it's worth joining too.",
    date: "May 1, 2026",
    image: blog1,
    imageAlt: "A laptop and notebook on a wooden desk",
  },
  {
    id: "content-cadence",
    category: "Content Strategy",
    title: "The Content Cadence That Actually Compounds",
    excerpt:
      "Posting more rarely beats posting with intent. We break down the weekly rhythm we use with retainer clients — a mix of hero films, lightweight social cuts, and evergreen pieces — and why consistency outperforms volume every time.",
    date: "Apr 18, 2026",
    image: blog2,
    imageAlt: "A laptop displaying an analytics dashboard",
  },
  {
    id: "brand-photography-growth",
    category: "Production",
    title: "Turning Brand Photography Into a Growth Engine",
    excerpt:
      "Great photography isn't a cost line — it's an asset that keeps working. Here's how we plan shoots so a single production day fuels a quarter of campaigns, ads, and organic content across every channel.",
    date: "Apr 3, 2026",
    image: blog3,
    imageAlt: "A cinema camera lit with a burst of light",
  },
  {
    id: "small-budget-big-presence",
    category: "Branding",
    title: "Small Budget, Big Presence: A Playbook for New Brands",
    excerpt:
      "You don't need an enterprise budget to look established. We share the lean branding system — identity, templates, and a content engine — that helps early-stage brands punch far above their weight from day one.",
    date: "Mar 21, 2026",
    image: blog4,
    imageAlt: "A studio control desk in low light",
  },
];
