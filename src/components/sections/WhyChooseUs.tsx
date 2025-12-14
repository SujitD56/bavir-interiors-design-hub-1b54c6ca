import { Sparkles, Shield, Clock, IndianRupee, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: Sparkles,
    title: "Customized Designs",
    description: "Every project is unique. We create bespoke solutions tailored to your specific needs and preferences.",
  },
  {
    icon: Shield,
    title: "Quality Craftsmanship",
    description: "We partner with skilled artisans and use premium materials to ensure exceptional quality.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "We respect your time and ensure projects are completed within agreed timelines.",
  },
  {
    icon: IndianRupee,
    title: "Transparent Pricing",
    description: "No hidden costs. We provide detailed quotes with complete transparency.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support",
    description: "Our team is always available to address your concerns and provide ongoing support.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 block font-body">
              Why Bavir
            </span>
            <h2 className="section-title mb-6">
              Why Choose Bavir Interiors?
            </h2>
            <p className="section-subtitle mb-10">
              We combine creativity, expertise, and dedication to deliver interior design solutions 
              that transform your vision into a beautiful reality.
            </p>

            <div className="space-y-6">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-border group-hover:border-bronze group-hover:text-bronze transition-colors duration-300">
                    <reason.icon size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-medium mb-1">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground font-body">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Stats Card */}
          <div className="relative">
            <div className="bg-card border border-border p-12">
              <div className="text-center mb-8">
                <span className="font-heading text-6xl lg:text-7xl font-light text-bronze">14+</span>
                <p className="text-muted-foreground font-body mt-2">Years of Excellence</p>
              </div>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border">
                <div className="text-center">
                  <span className="font-heading text-3xl font-medium">250+</span>
                  <p className="text-sm text-muted-foreground font-body mt-1">Happy Clients</p>
                </div>
                <div className="text-center">
                  <span className="font-heading text-3xl font-medium">15</span>
                  <p className="text-sm text-muted-foreground font-body mt-1">Design Awards</p>
                </div>
                <div className="text-center">
                  <span className="font-heading text-3xl font-medium">50+</span>
                  <p className="text-sm text-muted-foreground font-body mt-1">Team Members</p>
                </div>
                <div className="text-center">
                  <span className="font-heading text-3xl font-medium">8</span>
                  <p className="text-sm text-muted-foreground font-body mt-1">Cities Served</p>
                </div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-bronze -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
