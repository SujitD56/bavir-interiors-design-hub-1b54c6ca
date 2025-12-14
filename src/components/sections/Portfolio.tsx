import { useState } from "react";
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

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section id="portfolio" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 block font-body">
            Our Work
          </span>
          <h2 className="section-title mb-4">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            Explore our portfolio of thoughtfully designed spaces that reflect our commitment to excellence.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-6 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-sm font-body tracking-wide pb-2 transition-all duration-300 relative ${
                activeCategory === category
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
              {activeCategory === category && (
                <span className="absolute bottom-0 left-0 w-full h-px bg-foreground" />
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer overflow-hidden"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} - Interior design project by Bavir Interiors in ${project.location}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-500" />
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-xs uppercase tracking-widest text-background/80 block mb-2 font-body">
                      {project.category}
                    </span>
                    <h3 className="font-heading text-xl text-background font-medium">
                      {project.title}
                    </h3>
                    <p className="text-sm text-background/80 font-body mt-1">
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
