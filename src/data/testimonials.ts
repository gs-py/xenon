/** Client testimonials from the "What Our Clients Say" section. */

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "vadim",
    quote:
      "Smooth process, great marketing support, strong engagement, and quality leads. Excellent team to work with.",
    name: "Vadim",
    role: "Founder, Impress Build",
    company: "Renovation & Fitout",
  },
  {
    id: "shikha",
    quote:
      "Great production, smooth delivery, and excellent editing for our interior shoot.",
    name: "Shikha",
    role: "Co-Founder, Desiignarrator",
    company: "Interior Design Studio",
  },
  {
    id: "greenvista",
    quote:
      "Our landscaping project shoot was delivered on time with amazing videos and photos.",
    name: "Marketing Head",
    role: "GreenVista Pools & Landscaping",
    company: "Landscape Company",
  },
];
