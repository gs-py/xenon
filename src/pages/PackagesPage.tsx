import { PackagesHero } from "../components/sections/PackagesHero";
import { PackageTiers } from "../components/sections/PackageTiers";
import { FinalCTA } from "../components/sections/FinalCTA";

export default function PackagesPage() {
  return (
    <>
      <PackagesHero />
      <PackageTiers />
      <FinalCTA />
    </>
  );
}
