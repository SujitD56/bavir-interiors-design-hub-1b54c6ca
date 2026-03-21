import { useState, useRef } from "react";
import { 
  Bed, 
  ChefHat, 
  Bath, 
  Armchair, 
  LayoutGrid, 
  Maximize2, 
  Sparkles, 
  Tv, 
  Utensils, 
  Home, 
  BookOpen, 
  Baby, 
  Layers, 
  Users
} from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Service Images
import heroImage from "@/assets/hero-living-room.jpg";
import projectBedroom from "@/assets/project-bedroom.jpg";
import projectKitchen from "@/assets/project-kitchen.jpg";
import projectBathroom from "@/assets/project-bathroom.png";
import projectDining from "@/assets/project-dining.jpg";
import luxuryLiving from "@/assets/luxury-living.png";
import luxuryOffice from "@/assets/luxury-office.png";
import luxuryWardrobe from "@/assets/luxury-wardrobe.png";

const services = [
  {
    icon: ChefHat,
    title: "Modular Kitchen",
    image: projectKitchen,
    description: "Smart, stylish, and fully customised kitchen solutions crafted to suit your lifestyle.",
    href: "/services/modular",
  },
  {
    icon: Bed,
    title: "Master Bedroom",
    image: projectBedroom,
    description: "Personalized bedroom designs that combine luxury, comfort, and intelligent storage.",
    href: "/services/master-bedroom",
  },
  {
    icon: Armchair,
    title: "Living Room",
    image: heroImage,
    description: "Transform the heart of your home with elegant furniture, smart layouts, and premium finishes.",
    href: "/services/living-room",
  },
  {
    icon: LayoutGrid,
    title: "Custom Wardrobes",
    image: luxuryWardrobe,
    description: "Elegantly designed storage solutions that maximise your space without compromising on style.",
    href: "/services/wardrobe",
  },
  {
    icon: Bath,
    title: "Bathroom Design",
    image: projectBathroom,
    description: "Transform your bathroom into a private spa-like retreat with our comfort-focused ideas.",
    href: "/services/bathroom",
  },
  {
    icon: Maximize2,
    title: "Space-Saving",
    image: heroImage,
    description: "Innovative multi-functional furniture and smart layouts designed to make small homes spacious.",
    href: "/services/space-saving",
  },
  {
    icon: Sparkles,
    title: "Pooja Room",
    image: heroImage,
    description: "Serene and Vastu-compliant pooja room designs that blend tradition with modern aesthetics.",
    href: "/services/pooja-room",
  },
  {
    icon: Tv,
    title: "Modular TV Unit",
    image: luxuryLiving,
    description: "Sleek and functional TV units that serve as a stunning focal point for your entertainment zone.",
    href: "/services/tv-unit",
  },
  {
    icon: Utensils,
    title: "Dining Room",
    image: projectDining,
    description: "Inviting dining spaces designed to bring people together for meals and lasting memories.",
    href: "/services/dining-room",
  },
  {
    icon: Home,
    title: "Home Interiors",
    image: heroImage,
    description: "Complete interior solutions for 1BHK, 2BHK, and 3BHK homes tailored to your lifestyle.",
    href: "/services/home-interiors",
  },
  {
    icon: BookOpen,
    title: "Study Room",
    image: luxuryOffice,
    description: "Focused and ergonomic study areas designed to boost productivity and creative thinking.",
    href: "/services/study-room",
  },
  {
    icon: Baby,
    title: "Kids Bedroom",
    image: projectBedroom,
    description: "Fun, safe, and adaptable kids' room designs that grow with your child's imagination.",
    href: "/services/kids-bedroom",
  },
  {
    icon: Layers,
    title: "False Ceiling",
    image: projectKitchen,
    description: "Modern false ceiling designs that enhance lighting, acoustics, and the overall look of your home.",
    href: "/services/false-ceiling",
  },
  {
    icon: Users,
    title: "Guest Bedroom",
    image: projectBedroom,
    description: "Welcoming and comfortable guest rooms that make your visitors feel truly at home.",
    href: "/services/guest-bedroom",
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
            Our Specialized Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            From concept to completion, we provide end-to-end interior solutions backed by definitive expertise.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          <AnimatePresence>
            {services.map(service => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  to={service.href}
                  className="group block h-full"
                >
                  <motion.div
                    variants={cardVariants}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    className="bg-card border border-border
                     hover:border-bronze/50 transition-all duration-500
                     cursor-pointer h-full overflow-hidden flex flex-col"
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

                    <div className="p-6 flex-grow">
                      <h3 className="font-heading text-lg font-medium mb-2 group-hover:text-bronze transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-muted-foreground font-body text-xs leading-relaxed line-clamp-2">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
