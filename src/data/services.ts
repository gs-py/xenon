/** The five service rows from the XONE13 "Our Services" section. */

export interface Service {
  id: string;
  title: string;
  highlights: string[];
  /** Optional finer print shown beneath the highlights. */
  note?: string;
}

export const services: Service[] = [
  {
    id: "social-media-marketing",
    title: "Social Media Marketing",
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
    highlights: ["Professional Photography", "Cinematic Videography"],
    note: "Product, Real Estate, Hospitality, Event, Landscape, Corporate, Interior, Architectural etc",
  },
];
