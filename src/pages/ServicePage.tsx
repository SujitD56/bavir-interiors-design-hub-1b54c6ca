import { useParams } from "react-router-dom";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { serviceProjects, serviceContent, serviceProcess  } from "../data/service";
import { useLeadModal } from "@/context/LeadContext";

type ServiceType = keyof typeof serviceProjects;

interface ServiceContent {
  title: string;
  mainImage?: string;
  subtitle?: string;
  description: string;
  services: string[];
  highlights: string[];
  whatIsTitle?: string;
  whatIsDescription?: string;
  layouts?: { name: string; description: string }[];
  trends?: string[];
  costInfo?: string;
  footerText?: string;
}

type Project = {
  id: number;
  title: string;
  location: string;
  image: string;
  gallery?: string[];
};

export default function ServicePage() {
  const { type } = useParams<{ type: ServiceType }>();
  const { openLeadModal } = useLeadModal();
  const containerRef = useRef<HTMLDivElement>(null);

  const projects = type ? serviceProjects[type] : null;
  const content = type ? (serviceContent[type] as ServiceContent) : null;

  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  if (!projects || !content) {
    return <div className="pt-32 text-center">Service not found</div>;
  }

  return (
    <div ref={containerRef} className="bg-secondary/30 min-h-screen">
      {/* =====================
          HERO / INTRO (FULL SCREEN)
      ====================== */}
      {content.mainImage ? (
        <section className="relative h-[70vh] w-full overflow-hidden">
          <motion.div 
            style={{ y }}
            className="absolute inset-0 z-0"
          >
            <img 
              src={content.mainImage} 
              alt={content.title}
              className="w-full h-full object-cover scale-110"
            />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>

          <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="max-w-5xl"
            >
              <p className="text-bronze font-medium uppercase tracking-[0.4em] mb-2 text-[10px] drop-shadow-lg">
                {content.subtitle || "Premium Interiors"}
              </p>
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-heading font-medium tracking-tight mb-2 drop-shadow-2xl">
                {content.title}
              </h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "50px" }}
                transition={{ delay: 0.5, duration: 1 }}
                className="h-1 bg-bronze mx-auto mb-2"
              />
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div 
              style={{ opacity }}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] font-light">Scroll Explore</span>
              <div className="w-px h-12 bg-white/30 relative">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-bronze" />
              </div>
            </motion.div>
          </div>
        </section>
      ) : (
        <section className="pt-32 section-padding bg-secondary">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium"
            >
              {content.title}
            </motion.h1>
            {content.subtitle && (
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-bronze font-medium italic"
              >
                {content.subtitle}
              </motion.p>
            )}
          </div>
        </section>
      )}

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 space-y-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg leading-relaxed lg:text-2xl font-light italic"
          >
            "{content.description}"
          </motion.p>
        </div>

          {/* =====================
              WHAT IS SECTION
          ====================== */}
          {content.whatIsDescription && (
            <div className="bg-white p-8 lg:p-12 rounded-[2rem] border border-border/50">
              <div className="max-w-4xl mx-auto space-y-6 text-center">
                <h2 className="text-3xl font-heading font-semibold">
                  {content.whatIsTitle || `About Our ${content.title}`}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {content.whatIsDescription}
                </p>
              </div>
            </div>
          )}

          {/* =====================
              LAYOUTS SECTION
          ====================== */}
          {content.layouts && (
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-3xl font-heading font-semibold">
                  Popular <span className="text-bronze">Layouts</span> We Offer
                </h2>
                <p className="mt-4 text-muted-foreground">Tailored configurations to suit your space and lifestyle.</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {content.layouts.map((layout, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 bg-secondary/30 rounded-2xl border border-bronze/5 hover:border-bronze/30 transition-all group"
                  >
                    <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-bronze transition-colors">
                      {layout.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {layout.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* =====================
              TRENDS (Conditional)
          ====================== */}
          {content.trends && (
            <div className="space-y-12">
              <div className="text-center">
                 <h2 className="text-3xl font-heading font-semibold">
                  Latest Design <span className="text-bronze">Trends (2026)</span>
                </h2>
                <p className="mt-4 text-muted-foreground">Stay ahead with the newest kitchen trends curated by our experts.</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {content.trends.map((trend, i) => (
                  <div key={i} className="p-6 bg-secondary/30 rounded-xl border border-border flex items-center gap-3">
                    <div className="w-2 h-2 bg-bronze rounded-full" />
                    <span className="text-foreground/80">{trend}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =====================
              WHY CHOOSE US
          ====================== */}
          <div className="space-y-12">
            <div className="text-center">
              <p className="uppercase tracking-wider text-sm text-muted-foreground">
                Why Us
              </p>
              <h2 className="text-3xl font-heading font-semibold">
                Why Choose <span className="text-primary">This Service</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-6 bg-background rounded-2xl border text-center"
                >
                  <p className="font-medium">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* =====================
              WHAT'S INCLUDED
          ====================== */}
          <div className="space-y-12">
            <div className="text-center">
              <p className="uppercase tracking-wider text-sm text-muted-foreground">
                Services
              </p>
              <h2 className="text-3xl font-heading font-semibold">
                What’s <span className="text-primary">Included</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {content.services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold shrink-0">
                    ✓
                  </div>
                  <p className="text-muted-foreground">{service}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* =====================
              PROJECTS
          ====================== */}
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-heading font-semibold">
                Our <span className="text-primary">Projects</span>
              </h2>
              <p className="mt-3 text-muted-foreground">
                A glimpse of spaces we’ve designed and delivered.
              </p>
            </div>

            <motion.div
              layout
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence>
                {projects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="group overflow-hidden cursor-pointer"
                    onClick={() => setActiveProject(project)}
                  >
                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.4 }}
                      />
                      <div className="absolute inset-0 bg-foreground/40 opacity-0 group-hover:opacity-100 transition" />
                      <div className="absolute inset-0 flex items-end p-6">
                        <div>
                          <h3 className="text-xl text-white font-heading">
                            {project.title}
                          </h3>
                          <p className="text-sm text-white/80">
                            {project.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* =====================
        HOW WE WORK / PROCESS
         ====================== */}
      <div className="space-y-14">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-wider text-sm text-muted-foreground">
            How We Work
          </p>
          <h2 className="text-3xl font-heading font-semibold mt-2">
            {serviceProcess.title.split(" ").slice(0, 3).join(" ")}{" "}
            <span className="text-primary">
              {serviceProcess.title.split(" ").slice(3).join(" ")}
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            {serviceProcess.subtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceProcess.steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-background rounded-2xl border p-8 pt-14"
            >
              {/* Step Number Badge */}
              <div className="absolute -top-5 left-8 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-heading font-semibold shadow-md">
                {item.step}
              </div>

              <h3 className="text-xl font-heading font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

       </div>

        {/* =====================
            FOOTER CTA
        ====================== */}
        {content.footerText && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[2rem] bg-foreground text-background p-12 lg:p-20 text-center space-y-8 mt-20"
          >
            <h3 className="text-2xl md:text-3xl font-heading font-medium leading-relaxed max-w-4xl mx-auto">
              {content.footerText}
            </h3>
            {content.costInfo && (
              <p className="text-background/80 text-lg">{content.costInfo}</p>
            )}
            <div className="flex justify-center">
              <button 
                onClick={() => openLeadModal(`Service Page - ${content.title}`)}
                className="bg-bronze text-white px-8 py-4 rounded-full font-heading text-lg hover:bg-bronze/90 transition-all flex items-center gap-2"
              >
                Book a Free Consultation Today
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* =====================
          POPUP MODAL GALLERY
      ====================== */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background max-w-5xl w-full mx-4 rounded-2xl p-6 max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-2xl font-heading font-semibold">
                    {activeProject.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {activeProject.location}
                  </p>
                </div>

                <button
                  onClick={() => setActiveProject(null)}
                  className="text-2xl hover:text-primary"
                >
                  ×
                </button>
              </div>

              {/* Gallery */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {(activeProject.gallery ?? [activeProject.image]).map(
                  (img, index) => (
                    <div
                      key={index}
                      className="aspect-[4/5] overflow-hidden rounded-xl"
                    >
                      <img
                        src={img}
                        alt={`Gallery image ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition"
                      />
                    </div>
                  )
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
