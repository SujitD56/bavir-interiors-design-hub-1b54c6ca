import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { modularKitchenData } from "../data";
import { Maximize2, X } from "lucide-react";

export function Portfolio() {
  const { portfolio } = modularKitchenData;
  const [filter, setFilter] = useState("All");
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const categories = ["All", ...Array.from(new Set(portfolio.map(p => p.category)))];

  const filteredPortfolio = filter === "All" 
    ? portfolio 
    : portfolio.filter(p => p.category === filter);

  return (
    <section className="py-8 lg:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-heading font-semibold text-foreground mb-4">
            Our Modular Kitchen Projects
          </h2>
          <div className="h-1 w-16 bg-bronze mx-auto rounded-full" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full border transition-all ${
                filter === cat 
                  ? "bg-foreground text-background border-foreground" 
                  : "bg-transparent text-foreground border-border/60 hover:border-bronze"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredPortfolio.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer"
                onClick={() => setLightboxImg(item.image)}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-bronze text-sm uppercase tracking-wider mb-1">{item.category}</span>
                  <h3 className="text-white text-lg font-heading font-medium flex justify-between items-center">
                    {item.title}
                    <Maximize2 className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity delay-100" />
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setLightboxImg(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              onClick={() => setLightboxImg(null)}
            >
              <X size={40} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightboxImg} 
              alt="Enlarged view" 
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
