import { MessageSquare, PenTool, Palette, Hammer, Key } from "lucide-react";

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
  return (
    <section id="process" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 block font-body">
            How We Work
          </span>
          <h2 className="section-title mb-4">Our Design Process</h2>
          <p className="section-subtitle mx-auto">
            A streamlined approach that transforms your ideas into reality with transparency and excellence.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2" />

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={step.number} className="relative text-center group">
                {/* Icon Circle */}
                <div className="relative z-10 w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-background border-2 border-border group-hover:border-bronze transition-colors duration-500">
                  <step.icon size={28} strokeWidth={1.5} className="text-muted-foreground group-hover:text-bronze transition-colors duration-500" />
                </div>

                {/* Step Number */}
                <span className="font-heading text-5xl font-light text-muted/50 absolute -top-4 left-1/2 -translate-x-1/2">
                  {step.number}
                </span>

                {/* Content */}
                <h3 className="font-heading text-lg font-medium mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
