import { motion } from "framer-motion";
import { modularKitchenData } from "../data";

export function Intro() {
  const { heading, content, image } = modularKitchenData.intro;

  return (
    <section className="py-8 lg:py-12 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/30 rounded-l-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-heading font-semibold text-foreground">
              {heading}
            </h2>
            <div className="h-1 w-16 bg-bronze rounded-full" />
            <p className="text-base text-muted-foreground leading-relaxed">
              {content}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Image Wrapper */}
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={image} 
                alt="Modular Kitchen Details" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating gold accent box */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-bronze/10 rounded-2xl border border-bronze/30 backdrop-blur-sm -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
