/** Client testimonials for the "What Our Clients Say" section (from Figma). */

import propwebLogo from "../assets/clients/propweb.png";
import varshaLogo from "../assets/clients/varsha-carpentry.png";
import arabianLogo from "../assets/clients/arabian-frontrunner.png";
import tanwoodLogo from "../assets/clients/tanwood.png";
import aconceptLogo from "../assets/clients/a-concept.png";
import consultLogo from "../assets/clients/consult-valiant.png";
import impressLogo from "../assets/clients/impress.png";
import narratorLogo from "../assets/clients/desiign-narrator.png";
import greenvistaLogo from "../assets/clients/green-vista.png";

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  /** e.g. "Founder Propweb Reality" */
  role: string;
  /** Industry, shown italic. e.g. "Real Estate" */
  company: string;
  /** Client logo shown at the top of the card. */
  logo: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "suhan",
    quote:
      "They handled our marketing and production well, delivering quality leads and great videos.",
    name: "Suhan",
    role: "Founder Propweb Reality",
    company: "Real Estate",
    logo: propwebLogo,
  },
  {
    id: "aavar",
    quote:
      "They managed our social media and website, delivering quality leads through ads and strong production work.",
    name: "Aavar",
    role: "Co Founder Modern Varsha Carpentry",
    company: "Interior Design Studio",
    logo: varshaLogo,
  },
  {
    id: "sumeet",
    quote:
      "At GITEX, XONE13 Studios delivered great photos and videos with a helpful team and timely execution.",
    name: "Sumeet Gupta",
    role: "Founder Arabian Frontrunner",
    company: "Business & Economics Publication",
    logo: arabianLogo,
  },
  {
    id: "rinza",
    quote:
      "XONE13 Studios did our brochure, company profile, and branding really impressed with the result.",
    name: "Rinza Sherin",
    role: "Founder Tanwood Leather",
    company: "Leather Accessories",
    logo: tanwoodLogo,
  },
  {
    id: "amal",
    quote:
      "XONE13 Studios handled our brochure, company profile, branding, and Kerala project shoot highly recommended.",
    name: "Amal Benny",
    role: "Founder A Concept",
    company: "Architectural Studio",
    logo: aconceptLogo,
  },
  {
    id: "anant",
    quote:
      "Our event shoot was handled by Xone 13 Studios smoothly with timely delivery.",
    name: "Dr. Anant Digraskar",
    role: "CEO ConsultValiant",
    company: "Business Management & Consulting Firm",
    logo: consultLogo,
  },
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
