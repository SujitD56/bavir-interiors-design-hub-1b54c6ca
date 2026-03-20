import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { modularKitchenData } from "../data";

export function Layouts() {
  const layouts = modularKitchenData.layouts;
  const [selectedLayout, setSelectedLayout] = useState(layouts[0]);

  return (
    <section className="py-8 lg:py-12 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-heading font-semibold text-foreground mb-4">
            Types of Modular Kitchen Layouts
          </h2>
          <div className="h-1 w-16 bg-bronze mx-auto rounded-full" />
          <p className="mt-3 text-muted-foreground text-base max-w-2xl mx-auto">
            Choose from a variety of ergonomic layouts designed to maximize your space and cooking efficiency.
          </p>
        </div>

        {/* Visual Selector Interactive Area */}
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-border/50 mb-6">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            {/* Left: Layout List */}
            <div className="space-y-4">
              <h3 className="text-lg font-heading font-semibold mb-6">Interactive Visual Selector</h3>
              {layouts.map((layout, idx) => (
                <div 
                  key={idx}
                  onClick={() => setSelectedLayout(layout)}
                  className={`p-5 rounded-xl cursor-pointer transition-all border ${
                    selectedLayout.name === layout.name 
                      ? 'bg-primary text-white border-primary shadow-lg scale-[1.02]' 
                      : 'bg-secondary/30 border-transparent hover:border-bronze hover:bg-secondary/50 text-foreground'
                  }`}
                >
                  <h4 className="text-base font-heading font-medium">{layout.name}</h4>
                  <p className={`mt-2 text-sm ${selectedLayout.name === layout.name ? 'text-white/80' : 'text-muted-foreground'}`}>
                    {layout.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Right: Selected Image Display */}
            <div className="relative aspect-[16/9] lg:aspect-[5/3] rounded-2xl overflow-hidden shadow-lg border-4 border-white">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedLayout.name}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  src={selectedLayout.image}
                  alt={selectedLayout.name}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                <span className="font-heading font-semibold text-primary">{selectedLayout.name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
