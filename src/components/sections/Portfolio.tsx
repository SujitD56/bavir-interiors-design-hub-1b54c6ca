import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import projectBedroom from "@/assets/project-bedroom.jpg";
import projectKitchen from "@/assets/project-kitchen.jpg";
import projectOffice from "@/assets/project-office.jpg";
import projectDining from "@/assets/project-dining.jpg";
import heroImage from "@/assets/hero-living-room.jpg";

const categories = ["All", "Residential", "Commercial"];

const projects = [
  {
    id: 1,
    title: "Modern Living Space",
    category: "Residential",
    location: "Mumbai, Maharashtra",
    image: heroImage,
  },
  {
    id: 2,
    title: "Serene Master Bedroom",
    category: "Residential",
    location: "Pune, Maharashtra",
    image: projectBedroom,
  },
  {
    id: 3,
    title: "Contemporary Kitchen",
    category: "Residential",
    location: "Bangalore, Karnataka",
    image: projectKitchen,
  },
  {
    id: 4,
    title: "Executive Office",
    category: "Commercial",
    location: "Delhi NCR",
    image: projectOffice,
  },
  {
    id: 5,
    title: "Elegant Dining Room",
    category: "Residential",
    location: "Chennai, Tamil Nadu",
    image: projectDining,
  },
  {
    id: 6,
    title: "Corporate Workspace",
    category: "Commercial",
    location: "Hyderabad, Telangana",
    image: projectOffice,
  },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section id="portfolio" className="section-padding bg-secondary" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 block font-body"
          >
            Our Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            Explore our portfolio of thoughtfully designed spaces that reflect our commitment to excellence.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center gap-6 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`text-sm font-body tracking-wide pb-2 transition-all duration-300 relative ${
                activeCategory === category
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
              {activeCategory === category && (
                <motion.span
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 w-full h-px bg-bronze"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group cursor-pointer overflow-hidden"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={`${project.title} - Interior design project by Bavir Interiors in ${project.location}`}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-500" />
                  <motion.div
                    className="absolute inset-0 flex items-end p-6"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.div
                      initial={{ y: 20 }}
                      whileHover={{ y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-xs uppercase tracking-widest text-background/80 block mb-2 font-body">
                        {project.category}
                      </span>
                      <h3 className="font-heading text-xl text-background font-medium">
                        {project.title}
                      </h3>
                      <p className="text-sm text-background/80 font-body mt-1">
                        {project.location}
                      </p>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
