import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { serviceProjects } from "../data/service";

export default function ServicePage() {
  const { type } = useParams<{ type: string }>();

  const projects = serviceProjects[type as keyof typeof serviceProjects];

  if (!projects) {
    return <div className="pt-32 text-center">Service not found</div>;
  }

  return (
    <section className="pt-32 section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title capitalize"
          >
            {type.replace("-", " ")} Services
          </motion.h1>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {projects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group overflow-hidden"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
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
    </section>
  );
}
