import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { BHKDesigns } from "@/components/sections/BHKDesigns";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Process />
      <BHKDesigns />
      <WhyChooseUs />
      <Contact />
    </main>
  );
};

export default Index;
