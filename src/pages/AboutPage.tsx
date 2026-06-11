import { AboutHero } from "../components/sections/AboutHero";
import { AboutStory } from "../components/sections/AboutStory";
import { WorkImpact } from "../components/sections/WorkImpact";
import { FinalCTA } from "../components/sections/FinalCTA";
import { SEO } from "../components/seo/SEO";
import { SchemaMarkup } from "../components/seo/SchemaMarkup";
import { generateBreadcrumbSchema } from "../lib/seo/schemas";

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Us | Our Story & Vision"
        description="Learn about XONE13's mission to transform digital experiences. Meet our team of experts dedicated to driving unprecedented growth for our clients."
        canonical="https://xone13.com/about"
      />
      <SchemaMarkup
        schema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "About Us", url: "/about" },
        ])}
      />
      <AboutHero />
      <AboutStory />
      <WorkImpact />
      <FinalCTA />
    </>
  );
}
