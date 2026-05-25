import { Hero } from "../components/sections/Hero";
import { Showcase } from "../components/sections/Showcase";
import { Testimonials } from "../components/sections/Testimonials";
import { Services } from "../components/sections/Services";
import { Stats } from "../components/sections/Stats";
import { ClientsMarquee } from "../components/sections/ClientsMarquee";
import { WhyChooseUs } from "../components/sections/WhyChooseUs";
import { FinalCTA } from "../components/sections/FinalCTA";
import { SEO } from "../components/seo/SEO";
import { SchemaMarkup } from "../components/seo/SchemaMarkup";
import {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  generateWebSiteSchema,
} from "../lib/seo/schemas";

export default function HomePage() {
  return (
    <>
      <SEO
        title="Digital Marketing Agency | Drive Growth"
        description="XONE13 is a premier digital marketing agency driving growth through SEO, PPC, and cutting-edge web design. Transform your online presence today."
        canonical="https://www.xone13.com/"
        keywords={["digital marketing", "seo", "ppc", "web design", "agency"]}
      />
      <SchemaMarkup schema={generateOrganizationSchema()} />
      <SchemaMarkup schema={generateLocalBusinessSchema()} />
      <SchemaMarkup schema={generateWebSiteSchema()} />
      
      <Hero />
      <Showcase />
      <Testimonials />
      <Services />
      <Stats />
      <ClientsMarquee />
      <WhyChooseUs />
      <FinalCTA />
    </>
  );
}
