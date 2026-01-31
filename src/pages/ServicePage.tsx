import { useParams } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { serviceProjects, serviceContent, serviceProcess  } from "../data/service";

type ServiceType = keyof typeof serviceProjects;

type Project = {
  id: number;
  title: string;
  location: string;
  image: string;
  gallery?: string[];
};

export default function ServicePage() {
  const { type } = useParams<{ type: ServiceType }>();

  const projects = type ? serviceProjects[type] : null;
  const content = type ? serviceContent[type] : null;

  const [activeProject, setActiveProject] = useState<Project | null>(null);

  if (!projects || !content) {
    return <div className="pt-32 text-center">Service not found</div>;
  }

  return (
    <>
      <section className="pt-32 section-padding bg-secondary">
        <div className="max-w-7xl mx-auto space-y-20">

          {/* =====================
              HERO / INTRO
          ====================== */}
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="section-title"
            >
              {content.title}
            </motion.h1>
            <p className="mt-4 text-muted-foreground text-lg">
              {content.description}
            </p>
          </div>

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

        </div>
      </section>
      

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
      
    </>
  );
}
