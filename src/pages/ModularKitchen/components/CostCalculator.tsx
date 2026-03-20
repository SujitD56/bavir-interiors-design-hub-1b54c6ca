import { useState } from "react";
import { Calculator } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function CostCalculator() {
  const [layout, setLayout] = useState("L-Shaped");
  const [size, setSize] = useState<number>(100); // Ex: 100 sq ft
  const [finish, setFinish] = useState("Laminate");
  const [calculatedCost, setCalculatedCost] = useState<number | null>(null);

  const calculateCost = (e: React.FormEvent) => {
    e.preventDefault();
    let baseRate = 1500; // Base rate per sq ft
    
    // Layout multiplier
    if (layout === "Island") baseRate += 300;
    if (layout === "U-Shaped") baseRate += 200;

    // Finish multiplier
    if (finish === "Acrylic") baseRate += 400;
    if (finish === "PU") baseRate += 600;
    if (finish === "Membrane") baseRate += 200;

    const total = baseRate * size;
    setCalculatedCost(total);
  };

  return (
    <section className="py-4 lg:py-6 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-4">
          <div className="bg-white/10 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3 backdrop-blur-md border border-white/20">
            <Calculator className="text-bronze" size={24} />
          </div>
          <h2 className="text-lg md:text-xl font-heading font-semibold mb-2 drop-shadow-md">
            Kitchen Cost Calculator
          </h2>
          <div className="h-1 w-16 bg-bronze mx-auto rounded-full mb-3" />
          <p className="mt-2 text-background/80 text-sm">
            Get an instant estimate for your dream kitchen.
          </p>
        </div>

        <div className="bg-white text-foreground p-6 md:p-8 rounded-[2rem] shadow-2xl relative overflow-hidden">
          {/* Decorative accents */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/50 rounded-bl-full -z-0" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-bronze/10 rounded-tr-full -z-0" />

          <form onSubmit={calculateCost} className="relative z-10 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              {/* Layout Select */}
              <div className="space-y-3">
                <label className="text-sm font-medium uppercase tracking-wider text-muted-foreground mr-1">Kitchen Layout</label>
                <select 
                  value={layout} 
                  onChange={(e) => setLayout(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border/60 bg-secondary/30 focus:border-bronze focus:ring-1 focus:ring-bronze outline-none transition-all"
                >
                  <option value="L-Shaped">L-Shaped Kitchen</option>
                  <option value="Straight">Straight Kitchen</option>
                  <option value="U-Shaped">U-Shaped Kitchen</option>
                  <option value="Parallel">Parallel Kitchen</option>
                  <option value="Island">Island Kitchen</option>
                </select>
              </div>

              {/* Finish Select */}
              <div className="space-y-3">
                <label className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Preferred Finish</label>
                <select 
                  value={finish} 
                  onChange={(e) => setFinish(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border/60 bg-secondary/30 focus:border-bronze focus:ring-1 focus:ring-bronze outline-none transition-all"
                >
                  <option value="Laminate">Laminate (Budget Friendly)</option>
                  <option value="Membrane">Membrane</option>
                  <option value="Acrylic">Acrylic (Premium Gloss)</option>
                  <option value="PU">PU (Luxury Finish)</option>
                </select>
              </div>
            </div>

            {/* Size Input */}
            <div className="space-y-3">
              <label className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Kitchen Size (Sq. Ft.)</label>
              <div className="flex items-center gap-4">
                <input 
                  type="range" 
                  min="50" 
                  max="500" 
                  step="10"
                  value={size} 
                  onChange={(e) => setSize(Number(e.target.value))}
                  className="flex-grow h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-bronze"
                />
                <div className="w-16 px-3 py-2 bg-secondary/50 border border-border/60 rounded-xl text-center font-heading font-medium">
                  {size} sq ft
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4 text-center">
              <button 
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full font-medium transition-all shadow-lg transform hover:-translate-y-1 w-full md:w-auto"
              >
                Calculate Estimate
              </button>
            </div>
          </form>

          {/* Result Area */}
          <AnimatePresence>
            {calculatedCost !== null && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 pt-6 border-t border-border/40 text-center"
              >
                <p className="text-muted-foreground mb-1 text-sm">Estimated Cost</p>
                <div className="text-3xl md:text-4xl font-heading font-bold text-bronze mb-2">
                  ₹{calculatedCost.toLocaleString('en-IN')}
                </div>
                <p className="text-sm text-muted-foreground max-w-md mx-auto">
                  *This is an approximate estimate. Final cost depends on specific material choices, hardware, and site conditions.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
