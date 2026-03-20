import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import projectBedroom from "@/assets/project-bedroom.jpg";

const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "5+", label: "Years Experience" },
  { value: "95%", label: "Client Satisfaction" },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-secondary" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <motion.img
                src={projectBedroom}
                alt="Elegant bedroom interior design showcasing Bavir Interiors craftsmanship"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
              />
            </div>
            {/* Decorative Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-bronze hidden lg:block"
            />
          </motion.div>

          {/* Content */}
          <div className="lg:pl-8">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 block font-body"
            >
              About Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="section-title mb-6"
            >
              Crafting Exceptional Interiors Since 2021
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-muted-foreground font-body leading-relaxed"
            >
              <p>
                Welcome to Bavir Interiors, where your dream space becomes a reality. We understand 
                that starting a renovation or designing a new home can be overwhelming. That’s why 
                we’ve built a design hub centered around collaboration, transparency, and creativity.
              </p>
              <p>
                Whether you are looking for a modern minimalist kitchen, a cozy traditional living room, 
                or a complete home transformation, our mission is to deliver designs that are as functional 
                as they are beautiful. We pride ourselves on our attention to detail and our commitment 
                to finishing every project on time and within budget. Let’s build something beautiful together.
              </p>
            </motion.div>

            {/* Mission & Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid sm:grid-cols-2 gap-6 mt-10"
            >
              <div className="border-l-2 border-bronze pl-6">
                <h3 className="font-heading text-xl font-medium mb-2">Our Mission</h3>
                <p className="text-sm text-muted-foreground font-body">
                  To create spaces that inspire, comfort, and stand the test of time.
                </p>
              </div>
              <div className="border-l-2 border-bronze pl-6">
                <h3 className="font-heading text-xl font-medium mb-2">Our Vision</h3>
                <p className="text-sm text-muted-foreground font-body">
                  To be the leading interior design studio known for exceptional craftsmanship.
                </p>
              </div>
            </motion.div>

            {/* Stats */}
            <div className="flex gap-12 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <motion.span
                    className="font-heading text-4xl font-medium text-bronze block"
                    initial={{ scale: 0.5 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1, type: "spring" }}
                  >
                    {stat.value}
                  </motion.span>
                  <p className="text-sm text-muted-foreground font-body mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
