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
        title="Top Marketing Agencies in Dubai"
        description="Xone13 Marketing is one of the top marketing agencies in Dubai, combining strategy, brand, video production, social, performance marketing, and SEO."
        canonical="https://xone13.com/"
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
