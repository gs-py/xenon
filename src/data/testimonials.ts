/** Client testimonials from the "What Our Clients Say" section. */

import impressLogo from "../assets/testimonials/impress-build.jpg";
import narratorLogo from "../assets/testimonials/design-narrator.jpg";
import greenvistaLogo from "../assets/testimonials/green-vista.jpg";

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  /** Client logo shown on the card. */
  logo: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "vadim",
    quote:
      "Smooth process, great marketing support, strong engagement, and quality leads. Excellent team to work with.",
    name: "Vadim",
    role: "Founder, Impress Build",
    company: "Renovation & Fitout",
    logo: impressLogo,
  },
  {
    id: "shikha",
    quote:
      "Great production, smooth delivery, and excellent editing for our interior shoot.",
    name: "Shikha",
    role: "Co-Founder, Desiignarrator",
    company: "Interior Design Studio",
    logo: narratorLogo,
  },
  {
    id: "greenvista",
    quote:
      "Our landscaping project shoot was delivered on time with amazing videos and photos.",
    name: "Marketing Head",
    role: "GreenVista Pools & Landscaping",
    company: "Landscape Company",
    logo: greenvistaLogo,
  },
];
