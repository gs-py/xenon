/** The five service rows from the XONE13 "Our Services" section. */

export interface Service {
  id: string;
  title: string;
  /** One-line positioning used in the services bento cells. */
  summary: string;
  highlights: string[];
  /** Optional finer print shown beneath the highlights. */
  note?: string;
}

export const services: Service[] = [
  {
    id: "social-media-marketing",
    title: "Social Media Marketing",
    summary:
      "Strategy, content, and paid campaigns that turn followers into customers.",
    highlights: [
      "Strategy & Content Planning",
      "Paid Advertising",
      "Multi-platform Management",
      "Community Engagement",
    ],
  },
  {
    id: "content-creation",
    title: "Content Creation",
    summary:
      "Scroll-stopping video, photography, and motion built for every platform.",
    highlights: [
      "Videography & Photography",
      "Motion Graphics",
      "Content Writing",
      "Creative Ads Designs",
    ],
  },
  {
    id: "design-branding",
    title: "Design & Branding",
    summary:
      "Identity systems and assets that make your brand instantly recognisable.",
    highlights: [
      "Logo & Brand Identity",
      "Social Media Design",
      "Brochures, Banners, Printable",
      "3D Visualization",
    ],
  },
  {
    id: "website-development",
    title: "Website Development",
    summary:
      "High-converting landing pages, funnels, and stores that load fast.",
    highlights: [
      "Landing Pages",
      "Sales Funnels",
      "Business Websites",
      "E-Commerce Websites",
    ],
  },
  {
    id: "photography-videography",
    title: "Photography & Videography",
    summary:
      "Cinematic production across product, real estate, hospitality, and more.",
    highlights: ["Professional Photography", "Cinematic Videography"],
    note: "Product, Real Estate, Hospitality, Event, Landscape, Corporate, Interior, Architectural etc",
  },
];
