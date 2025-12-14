import { Home, Building2, ChefHat, Hammer, Armchair, Palette } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Interior Design",
    description: "Transform your home into a sanctuary of comfort and style with our bespoke residential design solutions.",
  },
  {
    icon: Building2,
    title: "Commercial Interior Design",
    description: "Create inspiring workspaces that boost productivity and leave lasting impressions on clients and employees.",
  },
  {
    icon: ChefHat,
    title: "Modular Kitchen & Wardrobes",
    description: "Custom-designed modular solutions that maximize space efficiency while maintaining aesthetic appeal.",
  },
  {
    icon: Hammer,
    title: "Turnkey Interior Solutions",
    description: "End-to-end project management from concept to completion, delivering hassle-free transformations.",
  },
  {
    icon: Armchair,
    title: "Custom Furniture & Décor",
    description: "Handcrafted furniture pieces and curated décor elements that add personality to your space.",
  },
  {
    icon: Palette,
    title: "Design Consultation",
    description: "Expert guidance on color schemes, materials, and layouts to help you make informed design decisions.",
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 block font-body">
            What We Offer
          </span>
          <h2 className="section-title mb-4">Our Services</h2>
          <p className="section-subtitle mx-auto">
            Comprehensive interior design solutions tailored to meet your unique needs and exceed your expectations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 bg-card border border-border hover:border-bronze/50 transition-all duration-500 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-bronze group-hover:text-bronze transition-colors duration-300 mb-6">
                <service.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-xl font-medium mb-3">{service.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
