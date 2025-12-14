import projectBedroom from "@/assets/project-bedroom.jpg";

export function About() {
  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={projectBedroom}
                alt="Elegant bedroom interior design showcasing Bavir Interiors craftsmanship"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-bronze hidden lg:block" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 block font-body">
              About Us
            </span>
            <h2 className="section-title mb-6">
              Crafting Exceptional Interiors Since 2010
            </h2>
            <div className="space-y-4 text-muted-foreground font-body">
              <p>
                At Bavir Interiors, we believe that every space has a story waiting to be told. 
                Our passion lies in transforming ordinary rooms into extraordinary experiences 
                that reflect your personality and lifestyle.
              </p>
              <p>
                With over a decade of experience in luxury interior design, our team of skilled 
                designers and craftsmen work meticulously to bring your vision to life. We combine 
                timeless aesthetics with modern functionality, ensuring every detail is perfect.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-6 mt-10">
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
            </div>

            {/* Stats */}
            <div className="flex gap-12 mt-12">
              <div>
                <span className="font-heading text-4xl font-medium text-bronze">250+</span>
                <p className="text-sm text-muted-foreground font-body mt-1">Projects Completed</p>
              </div>
              <div>
                <span className="font-heading text-4xl font-medium text-bronze">14+</span>
                <p className="text-sm text-muted-foreground font-body mt-1">Years Experience</p>
              </div>
              <div>
                <span className="font-heading text-4xl font-medium text-bronze">98%</span>
                <p className="text-sm text-muted-foreground font-body mt-1">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
