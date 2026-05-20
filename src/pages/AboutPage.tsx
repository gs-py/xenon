import { AboutHero } from "../components/sections/AboutHero";
import { AboutStory } from "../components/sections/AboutStory";
import { WorkImpact } from "../components/sections/WorkImpact";
import { FinalCTA } from "../components/sections/FinalCTA";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <WorkImpact />
      <FinalCTA />
    </>
  );
}
