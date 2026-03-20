import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { modularKitchenData } from "../data";

export function Testimonials() {
  const { testimonials } = modularKitchenData;
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-8 lg:py-12 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/30 rounded-l-full -z-10 translate-x-1/3" />
      
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-heading font-semibold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <div className="h-1 w-16 bg-bronze mx-auto rounded-full" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-0 left-0 text-bronze/20 -translate-x-6 -translate-y-6">
            <Quote size={80} />
          </div>

          <div className="bg-white rounded-[2rem] p-8 md:p-14 shadow-2xl border border-bronze/10 text-center relative z-10 min-h-[300px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-base md:text-base text-foreground font-light leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].text}"
                </p>
                <div>
                  <h4 className="font-heading font-semibold text-base text-foreground">
                    {testimonials[currentIndex].author}
                  </h4>
                  <p className="text-bronze text-sm font-medium tracking-wide">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-border/60 flex items-center justify-center text-foreground hover:bg-bronze hover:text-white hover:border-bronze transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-border/60 flex items-center justify-center text-foreground hover:bg-bronze hover:text-white hover:border-bronze transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
