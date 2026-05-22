
import { ShaderCanvas } from "../components/ui/ShaderCanvas";
import { PackagesHero } from "../components/sections/PackagesHero";
import { PackageTiers } from "../components/sections/PackageTiers";
import { FinalCTA } from "../components/sections/FinalCTA";
import { SEO } from "../components/seo/SEO";
import { SchemaMarkup } from "../components/seo/SchemaMarkup";
import { generateBreadcrumbSchema } from "../lib/seo/schemas";

export default function PackagesPage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <SEO
        title="Marketing Packages & Pricing"
        description="Transparent, results-driven marketing packages tailored for your growth. Find the right mix of SEO, PPC, and development services."
        canonical="https://www.xone13.com/packages"
      />
      <SchemaMarkup
        schema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Packages", url: "/packages" },
        ])}
      />
      {/* Animated WebGL background — fixed behind everything */}
      <ShaderCanvas />

      {/* Page content sits above the shader */}
      <div className="relative z-10">
        <PackagesHero />
        <PackageTiers />
        <FinalCTA variant="light" />
      </div>
    </div>
  );
}
