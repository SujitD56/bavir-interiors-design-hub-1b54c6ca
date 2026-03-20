import React, { useEffect } from "react";
import { Hero } from "./components/Hero";
import { Intro } from "./components/Intro";
import { Layouts } from "./components/Layouts";
import { Materials } from "./components/Materials";
import { Features } from "./components/Features";
import { Process } from "./components/Process";
import { Pricing } from "./components/Pricing";
import { CostCalculator } from "./components/CostCalculator";
import { FAQ } from "./components/FAQ";
import { CTA } from "./components/CTA";

export default function ModularKitchen() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <Hero />
      <Intro />
      <Layouts />
      <Materials />
      <Features />
      <Process />
      <Pricing />
      <CostCalculator />
      <FAQ />
      <CTA />
    </div>
  );
}
