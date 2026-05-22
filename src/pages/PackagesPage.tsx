import { ShaderCanvas } from "../components/ui/ShaderCanvas";
import { PackagesHero } from "../components/sections/PackagesHero";
import { PackageTiers } from "../components/sections/PackageTiers";
import { FinalCTA } from "../components/sections/FinalCTA";

export default function PackagesPage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Animated WebGL background — fixed behind everything */}
      <ShaderCanvas />

      {/* Page content sits above the shader */}
      <div className="relative z-10">
        <PackagesHero />
        <PackageTiers />
        <FinalCTA />
      </div>
    </div>
  );
}
