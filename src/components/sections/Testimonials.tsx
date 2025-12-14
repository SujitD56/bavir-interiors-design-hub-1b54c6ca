import { Quote } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    project: "Residential - Mumbai",
    quote: "Bavir Interiors transformed our apartment into a stunning home that perfectly reflects our style. Their attention to detail and professionalism exceeded our expectations.",
  },
  {
    id: 2,
    name: "Rahul Mehta",
    project: "Commercial - Bangalore",
    quote: "Working with Bavir was an absolute pleasure. They understood our brand vision and created an office space that inspires creativity and productivity.",
  },
  {
    id: 3,
    name: "Anjali Kapoor",
    project: "Residential - Delhi",
    quote: "From the initial consultation to the final handover, the team was exceptional. Our home now feels like a luxury retreat. Highly recommended!",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-foreground text-background overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] text-background/60 mb-4 block font-body"
          >
            Client Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-background/70 text-lg md:text-xl max-w-2xl mx-auto font-body"
          >
            Don't just take our word for it — hear from those who've experienced the Bavir difference.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative p-8 border border-background/20 hover:border-background/40 transition-colors duration-500"
            >
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Quote size={32} className="text-bronze/60 mb-6" />
              </motion.div>
              <p className="font-body text-background/90 leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <motion.div
                className="border-t border-background/20 pt-6"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <p className="font-heading text-lg font-medium">{testimonial.name}</p>
                <p className="text-sm text-background/60 font-body">{testimonial.project}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
