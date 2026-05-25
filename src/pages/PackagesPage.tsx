
import { useEffect, useState } from "react";
import { MeshGradient } from "@paper-design/shaders-react";
import { PackageTiers } from "../components/sections/PackageTiers";
import { FinalCTA } from "../components/sections/FinalCTA";
import { SEO } from "../components/seo/SEO";
import { SchemaMarkup } from "../components/seo/SchemaMarkup";
import { generateBreadcrumbSchema } from "../lib/seo/schemas";

const BG_COLORS = [
  "#007982",
  "#4f9ca0",
  "#aebda1",
  "#cfe0d2",
  "#e3f0f1",
  "#eef6f3",
];

export default function PackagesPage() {
  const [dims, setDims] = useState<{ width: number; height: number } | null>(null);

  useEffect(() => {
    const update = () =>
      setDims({ width: window.innerWidth, height: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

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

      {/* Mesh gradient background — same palette as About hero */}
      <div className="fixed inset-0 z-0">
        {dims && (
          <>
            <MeshGradient
              width={dims.width}
              height={dims.height}
              colors={BG_COLORS}
              distortion={1.2}
              speed={0.8}
              grainMixer={0}
              grainOverlay={0}
            />
            <div className="absolute inset-0 pointer-events-none bg-white/35" />
          </>
        )}
      </div>

      {/* Page content */}
      <div className="relative z-10">
        <PackageTiers />
        <FinalCTA variant="light" />
      </div>
    </div>
  );
}
