import { motion } from "framer-motion";
import { modularKitchenData } from "../data";
import { Check, ShieldCheck, Sparkles, Maximize, Wrench, LayoutDashboard } from "lucide-react";

export function Features() {
  const { heading, points } = modularKitchenData.features;

  const icons = [
    <Maximize className="w-8 h-8" />,
    <Sparkles className="w-8 h-8" />,
    <Wrench className="w-8 h-8" />,
    <LayoutDashboard className="w-8 h-8" />,
    <ShieldCheck className="w-8 h-8" />,
    <Check className="w-8 h-8" />
  ];

  return (
    <section className="py-8 lg:py-10 bg-white relative">
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-border/40 -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-heading font-semibold text-foreground mb-4">
            {heading}
          </h2>
          <div className="h-1 w-16 bg-bronze mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-6 bg-secondary/20 rounded-[2rem] border border-border/50 hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-bronze shadow-sm mb-5 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                {icons[idx % icons.length]}
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground">
                {point}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
