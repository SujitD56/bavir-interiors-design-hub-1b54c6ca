import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronRight } from "lucide-react";
import { unifiedServicesData } from "@/data/unifiedServicesData";
import { modularKitchenData } from "@/pages/ModularKitchen/data";

// Assets
import projectBedroom from "@/assets/project-bedroom.jpg";
import projectKitchen from "@/assets/project-kitchen.jpg";
import projectOffice from "@/assets/project-office.jpg";
import projectDining from "@/assets/project-dining.jpg";
import heroImage from "@/assets/hero-living-room.jpg";
import luxuryOffice from "@/assets/luxury-office.png";
import officeLounge from "@/assets/office-lounge.png";
import bathroomImage from "@/assets/project-bathroom.png";
import luxuryWardrobe from "@/assets/luxury-wardrobe.png";

const residentialCategories = ["All", "Living Room", "Kitchen", "Bedroom", "Bathroom", "Wardrobes", "Dining Room"];
const commercialCategories = ["All", "Office", "Retail", "Hospitality"];

const projects = [
  // Residential
  {
    id: 1,
    title: "Modern Living Space",
    type: "Residential",
    category: "Living Room",
    slug: "living-room",
    location: "Indiranagar, Bangalore",
    image: heroImage,
  },
  {
    id: 2,
    title: "Serene Master Bedroom",
    type: "Residential",
    category: "Bedroom",
    slug: "master-bedroom",
    location: "HSR Layout, Bangalore",
    image: projectBedroom,
  },
  {
    id: 3,
    title: "Contemporary Kitchen",
    type: "Residential",
    category: "Kitchen",
    slug: "modular",
    location: "Whitefield, Bangalore",
    image: projectKitchen,
  },
  {
    id: 4,
    title: "Minimalist Master Bath",
    type: "Residential",
    category: "Bathroom",
    slug: "bathroom",
    location: "Koramangala, Bangalore",
    image: bathroomImage,
  },
  {
    id: 5,
    title: "Elegant Dining Room",
    type: "Residential",
    category: "Dining Room",
    slug: "dining-room",
    location: "Jayanagar, Bangalore",
    image: projectDining,
  },
  {
    id: 6,
    title: "Bespoke Walk-in Closet",
    type: "Residential",
    category: "Wardrobes",
    slug: "wardrobe",
    location: "MG Road, Bangalore",
    image: luxuryWardrobe,
  },
  // Commercial
  {
    id: 101,
    title: "Innovate Tech HQ",
    type: "Commercial",
    category: "Office",
    slug: "study-room",
    location: "Sarjapur Road, Bangalore",
    image: luxuryOffice,
  },
  {
    id: 102,
    title: "Elite Business Lounge",
    type: "Commercial",
    category: "Hospitality",
    slug: "living-room",
    location: "Cunningham Road, Bangalore",
    image: officeLounge,
  },
  {
    id: 103,
    title: "Creative Studio Hub",
    type: "Commercial",
    category: "Office",
    slug: "study-room",
    location: "電子 City, Bangalore",
    image: projectOffice,
  },
];

export function Portfolio() {
  const [activeType, setActiveType] = useState("Residential");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = activeType === "Residential" ? residentialCategories : commercialCategories;

  const filteredProjects = projects.filter(
    (project) => 
      project.type === activeType && 
      (activeCategory === "All" || project.category === activeCategory)
  );

  const handleTypeChange = (type: string) => {
    setActiveType(type);
    setActiveCategory("All");
  };

  return (
    <section id="portfolio" className="section-padding bg-secondary/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 block font-body"
          >
            Portfolio
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
            A showcase of our finest work across residential and commercial sectors, where design meets purpose.
          </motion.p>
        </div>

        {/* Primary Filter: Residential vs Commercial */}
        <div className="flex justify-center mb-10">
          <div className="bg-white/50 backdrop-blur-sm p-1.5 rounded-full border border-border shadow-sm flex gap-1">
            {["Residential", "Commercial"].map((type) => (
              <button
                key={type}
                onClick={() => handleTypeChange(type)}
                className={`px-8 py-2 rounded-full text-sm font-heading transition-all duration-500 relative ${
                  activeType === type
                    ? "text-white"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="relative z-10">{type}</span>
                {activeType === type && (
                  <motion.div
                    layoutId="activeType"
                    className="absolute inset-0 bg-foreground rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Secondary Filter: Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-x-6 gap-y-4 mb-12"
        >
          {categories.map((category) => (
            <div key={category} className="flex flex-col items-center">
              <motion.button
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`text-sm font-body tracking-wide pb-1 transition-all duration-300 relative ${
                  activeCategory === category
                    ? "text-bronze font-medium"
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
            </div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4 }}
              >
                <div
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer overflow-hidden block h-full"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7 }}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                    
                    {/* Content */}
                    <motion.div
                      className="absolute inset-0 flex items-end p-8"
                    >
                      <div className="w-full">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="h-px w-6 bg-bronze" />
                          <span className="text-[10px] uppercase tracking-[0.2em] text-bronze font-medium">
                            {project.category}
                          </span>
                        </div>
                        <h3 className="font-heading text-2xl text-white font-medium mb-1 leading-tight group-hover:text-bronze transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2 text-white/60 text-xs font-body mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                           <span>Quick View Gallery</span>
                           <ChevronRight size={14} className="text-bronze" />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-muted-foreground font-body">No projects found in this category yet.</p>
          </motion.div>
        )}

        {/* Portfolio Gallery Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-5xl h-[90vh] flex flex-col p-0 overflow-hidden bg-background border-none gap-0">
            {selectedProject && (
              <>
                <div className="flex-1 overflow-y-auto custom-scrollbar p-6 lg:p-10">
                  <DialogHeader className="mb-8 text-left">
                    <div className="flex items-center gap-2 mb-2">
                       <span className="h-px w-8 bg-bronze" />
                       <span className="text-xs uppercase tracking-widest text-bronze font-medium">
                         {selectedProject.category} Gallery
                       </span>
                    </div>
                    <DialogTitle className="text-3xl lg:text-4xl font-heading font-medium">
                      {selectedProject.title}
                    </DialogTitle>
                    <DialogDescription className="text-muted-foreground mt-2 max-w-2xl">
                      Explore our design variations and craftsmanship for {selectedProject.title.toLowerCase()}. 
                      Every detail is meticulously planned to blend elegance with functionality.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {(selectedProject.slug === 'modular' 
                      ? modularKitchenData.portfolio 
                      : (unifiedServicesData[selectedProject.slug]?.designTypes || [])
                    ).map((design: any, idx: number) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="group relative overflow-hidden rounded-lg shadow-md bg-white border border-border"
                      >
                        <div className="aspect-[16/10] overflow-hidden">
                          <img 
                            src={design.image} 
                            alt={design.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-4 bg-white">
                          <h4 className="font-heading text-lg font-medium text-foreground mb-1">
                            {design.title}
                          </h4>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {design.desc || design.category}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-secondary/30 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-sm text-muted-foreground font-body italic">
                    Inspired by this work? Let's discuss your project.
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" onClick={() => setSelectedProject(null)}>
                      Close Gallery
                    </Button>
                    <Link to={`/services/${selectedProject.slug}`}>
                      <Button className="bg-bronze hover:bg-bronze-light">
                        View Service Details <ExternalLink size={14} className="ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
