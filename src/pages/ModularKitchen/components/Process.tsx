import { motion } from "framer-motion";
import { modularKitchenData } from "../data";

export function Process() {
  const { process } = modularKitchenData;

  return (
    <section className="py-8 lg:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-heading font-semibold text-foreground mb-4">
            Our Modular Kitchen Process
          </h2>
          <div className="h-1 w-16 bg-bronze mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[34px] left-[5%] right-[5%] h-[2px] bg-border/60" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {process.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step Number Circle */}
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-secondary text-foreground group-hover:bg-primary group-hover:text-white flex items-center justify-center font-heading text-xl md:text-2xl font-semibold mb-6 border-4 border-white shadow-lg transition-colors duration-500 relative z-10">
                  {step.step}
                  {/* Outer pulse effect on hover */}
                  <div className="absolute inset-[-4px] rounded-full border border-primary/0 group-hover:border-primary/30 group-hover:animate-ping transition-all duration-500" />
                </div>

                {/* Content */}
                <h3 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Mobile/Tablet connecting line */}
                {idx !== process.length - 1 && (
                  <div className="block lg:hidden w-1 h-8 bg-border/60 mt-6" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
