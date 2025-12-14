import { MessageSquare, PenTool, Palette, Hammer, Key } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Consultation & Analysis",
    description: "We begin with an in-depth discussion to understand your vision, lifestyle, and requirements.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Concept & 3D Design",
    description: "Our designers create detailed concepts and photorealistic 3D visualizations of your space.",
  },
  {
    number: "03",
    icon: Palette,
    title: "Material Selection",
    description: "Choose from our curated selection of premium materials, finishes, and furnishings.",
  },
  {
    number: "04",
    icon: Hammer,
    title: "Execution & Installation",
    description: "Our skilled craftsmen bring the design to life with precision and attention to detail.",
  },
  {
    number: "05",
    icon: Key,
    title: "Final Handover",
    description: "We ensure every element is perfect before handing over your beautifully transformed space.",
  },
];

export function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background Video */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-10"
        >
          <source
            src="https://videos.pexels.com/video-files/5490245/5490245-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-background/95" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 block font-body"
          >
            How We Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title mb-4"
          >
            Our Design Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            A streamlined approach that transforms your ideas into reality with transparency and excellence.
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:block absolute top-[40px] left-0 right-0 h-px bg-border origin-left"
          />

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="relative text-center group"
              >
                {/* Icon Circle */}
                <motion.div
                  className="relative z-10 w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-background border-2 border-border group-hover:border-bronze transition-colors duration-500"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <step.icon size={28} strokeWidth={1.5} className="text-muted-foreground group-hover:text-bronze transition-colors duration-500" />
                </motion.div>

                {/* Step Number */}
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                  className="font-heading text-5xl font-light text-muted/50 absolute -top-4 left-1/2 -translate-x-1/2"
                >
                  {step.number}
                </motion.span>

                {/* Content */}
                <h3 className="font-heading text-lg font-medium mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
