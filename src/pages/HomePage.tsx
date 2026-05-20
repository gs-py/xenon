import { Hero } from "../components/sections/Hero";
import { Showcase } from "../components/sections/Showcase";
import { Testimonials } from "../components/sections/Testimonials";
import { Services } from "../components/sections/Services";
import { Stats } from "../components/sections/Stats";
import { ClientsMarquee } from "../components/sections/ClientsMarquee";
import { WhyChooseUs } from "../components/sections/WhyChooseUs";
import { FinalCTA } from "../components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
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
