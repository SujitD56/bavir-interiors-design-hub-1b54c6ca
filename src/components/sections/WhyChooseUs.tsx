import { Sparkles, Shield, Clock, IndianRupee, HeartHandshake } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reasons = [
  {
    icon: Sparkles,
    title: "Customized Designs",
    description: "Every project is unique. We create bespoke solutions tailored to your specific needs and preferences.",
  },
  {
    icon: Shield,
    title: "Quality Craftsmanship",
    description: "We partner with skilled artisans and use premium materials to ensure exceptional quality.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "We respect your time and ensure projects are completed within agreed timelines.",
  },
  {
    icon: IndianRupee,
    title: "Transparent Pricing",
    description: "No hidden costs. We provide detailed quotes with complete transparency.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support",
    description: "Our team is always available to address your concerns and provide ongoing support.",
  },
];

const stats = [
  { value: "5+", label: "Years of Excellence" },
  { value: "150+", label: "Happy Clients" },
  { value: "95%", label: "Satisfaction Rate" },
  { value: "5+", label: "Cities Served" },
];

export function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 block font-body"
            >
              Why Bavir
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="section-title mb-6"
            >
              Why Choose Bavir Interiors?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="section-subtitle mb-10"
            >
              We combine creativity, expertise, and dedication to deliver interior design solutions 
              that transform your vision into a beautiful reality.
            </motion.p>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex gap-4 group"
                >
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-border group-hover:border-bronze group-hover:text-bronze transition-colors duration-300"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <reason.icon size={20} strokeWidth={1.5} />
                  </motion.div>
                  <div>
                    <h3 className="font-heading text-lg font-medium mb-1">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground font-body">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Decorative Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <motion.div
              className="bg-card border border-border p-12"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="text-center mb-8"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
              >
                <span className="font-heading text-6xl lg:text-7xl font-light text-bronze">5+</span>
                <p className="text-muted-foreground font-body mt-2">Years of Excellence</p>
              </motion.div>
              <div className="grid grid-cols-3 gap-4 lg:gap-8 pt-8 border-t border-border">
                {[
                  { value: "150+", label: "Happy Clients" },
                  { value: "95%", label: "Satisfaction" },
                  { value: "5+", label: "Cities" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                  >
                    <motion.span
                      className="font-heading text-2xl lg:text-3xl font-medium block"
                      whileHover={{ scale: 1.1, color: "hsl(var(--bronze))" }}
                    >
                      {stat.value}
                    </motion.span>
                    <p className="text-[10px] lg:text-xs text-muted-foreground font-body mt-1 uppercase tracking-wider">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            {/* Decorative Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-bronze -z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
