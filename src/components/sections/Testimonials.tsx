import { Quote } from "lucide-react";

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

export function Testimonials() {
  return (
    <section className="section-padding bg-foreground text-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-background/60 mb-4 block font-body">
            Client Stories
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-4">
            What Our Clients Say
          </h2>
          <p className="text-background/70 text-lg md:text-xl max-w-2xl mx-auto font-body">
            Don't just take our word for it — hear from those who've experienced the Bavir difference.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative p-8 border border-background/20 hover:border-background/40 transition-colors duration-500"
            >
              <Quote size={32} className="text-background/20 mb-6" />
              <p className="font-body text-background/90 leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-background/20 pt-6">
                <p className="font-heading text-lg font-medium">{testimonial.name}</p>
                <p className="text-sm text-background/60 font-body">{testimonial.project}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
