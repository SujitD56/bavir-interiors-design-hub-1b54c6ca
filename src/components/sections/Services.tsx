import { Home, Building2, ChefHat, Hammer, Armchair, Palette } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: Home,
    title: "Residential Interior Design",
    description: "Transform your home into a sanctuary of comfort and style with our bespoke residential design solutions.",
  },
  {
    icon: Building2,
    title: "Commercial Interior Design",
    description: "Create inspiring workspaces that boost productivity and leave lasting impressions on clients and employees.",
  },
  {
    icon: ChefHat,
    title: "Modular Kitchen & Wardrobes",
    description: "Custom-designed modular solutions that maximize space efficiency while maintaining aesthetic appeal.",
  },
  {
    icon: Hammer,
    title: "Turnkey Interior Solutions",
    description: "End-to-end project management from concept to completion, delivering hassle-free transformations.",
  },
  {
    icon: Armchair,
    title: "Custom Furniture & Décor",
    description: "Handcrafted furniture pieces and curated décor elements that add personality to your space.",
  },
  {
    icon: Palette,
    title: "Design Consultation",
    description: "Expert guidance on color schemes, materials, and layouts to help you make informed design decisions.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 block font-body"
          >
            What We Offer
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            Comprehensive interior design solutions tailored to meet your unique needs and exceed your expectations.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group p-8 bg-card border border-border hover:border-bronze/50 transition-all duration-500"
            >
              <motion.div
                className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-bronze group-hover:text-bronze transition-colors duration-300 mb-6"
                whileHover={{ rotate: 5, scale: 1.05 }}
              >
                <service.icon size={24} strokeWidth={1.5} />
              </motion.div>
              <h3 className="font-heading text-xl font-medium mb-3">{service.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
