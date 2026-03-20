import { Home, Building2, ChefHat, Hammer, Armchair, Palette, Bath, LayoutGrid } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

// Service Images
import heroImage from "@/assets/hero-living-room.jpg";
import projectBedroom from "@/assets/project-bedroom.jpg";
import projectKitchen from "@/assets/project-kitchen.jpg";
import projectOffice from "@/assets/project-office.jpg";
import projectBathroom from "@/assets/project-bathroom.png";

const services = [
  {
    icon: Home,
    title: "Residential",
    image: heroImage,
    description:
      "Transform your home into a sanctuary of comfort and style with our bespoke residential design solutions.",
    href: "/services/residential",
  },
  {
    icon: Building2,
    title: "Commercial",
    image: projectOffice,
    description:
      "Create inspiring workspaces that boost productivity and leave lasting impressions on clients and employees.",
    href: "/services/commercial",
  },
  {
    icon: ChefHat,
    title: "Modular Kitchen",
    image: projectKitchen,
    description:
      "Smart, stylish, and fully customised kitchen solutions crafted to suit your lifestyle and space.",
    href: "/services/modular",
  },
  {
    icon: LayoutGrid,
    title: "Custom Wardrobes",
    image: projectBedroom,
    description:
      "Elegantly designed storage solutions that maximise your space without compromising on style.",
    href: "/services/wardrobe",
  },
  {
    icon: Bath,
    title: "Bathroom Design",
    image: projectBathroom,
    description:
      "Transform your bathroom into a private spa-like retreat with our comfort-focused design ideas.",
    href: "/services/bathroom",
  },
  {
    icon: Hammer,
    title: "Turnkey Solution",
    image: projectKitchen,
    description:
      "End-to-end project management from concept to completion, delivering hassle-free transformations.",
    href: "/services/turnkey",
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
          {services.map(service => (
            <Link
              key={service.title}
              to={service.href}
              className="group block"
            >
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-card border border-border
                 hover:border-bronze/50 transition-all duration-500
                 cursor-pointer h-full overflow-hidden"
              >
                {/* Image Preview */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-md border border-border group-hover:bg-bronze group-hover:text-white transition-colors duration-300">
                    <service.icon size={20} strokeWidth={1.5} />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-heading text-lg font-medium mb-2 group-hover:text-bronze transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground font-body text-xs leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
