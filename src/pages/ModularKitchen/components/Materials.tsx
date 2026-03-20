import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { modularKitchenData } from "../data";
import { CheckCircle2 } from "lucide-react";

export function Materials() {
  const { heading, categories } = modularKitchenData.materials;
  const [activeTab, setActiveTab] = useState(categories[0].id);

  return (
    <section className="py-4 lg:py-6 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-4">
          <h2 className="text-xl md:text-2xl font-heading font-semibold text-foreground mb-2">
            Premium Materials & Finishes
          </h2>
          <div className="h-1 w-16 bg-bronze mx-auto rounded-full" />
          <p className="mt-2 text-muted-foreground text-sm max-w-2xl mx-auto">
            We use only industry-leading materials that guarantee durability, resistance, and timeless beauty.
          </p>
        </div>

        {/* Custom Tabs implementation */}
        <div className="max-w-4xl mx-auto">
          {/* Tab Headers */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative px-6 py-3 rounded-full font-medium text-sm md:text-base transition-all duration-300 ${
                  activeTab === cat.id 
                    ? "text-white bg-primary shadow-lg shadow-primary/20 scale-105" 
                    : "text-foreground bg-secondary hover:bg-secondary/80"
                }`}
              >
                {cat.title}
                {activeTab === cat.id && (
                  <motion.div 
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-primary rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-secondary/20 rounded-3xl p-6 md:p-8 border border-border/50 min-h-[200px] shadow-inner">
            <AnimatePresence mode="wait">
              {categories.map((cat) => activeTab === cat.id && (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
                >
                  {cat.items.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-bronze/10 hover:border-bronze transition-colors group"
                    >
                      <CheckCircle2 className="w-6 h-6 text-bronze shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="font-medium text-foreground">{item}</span>
                    </div>
                  ))}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
