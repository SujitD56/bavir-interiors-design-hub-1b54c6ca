import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-living-room.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury modern living room interior design by Bavir Interiors"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/20 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="opacity-0 animate-fade-up">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-foreground/70 mb-6 font-body">
            Luxury Interior Design Studio
          </span>
        </div>

        <h1 className="opacity-0 animate-fade-up stagger-1 font-heading text-4xl md:text-6xl lg:text-7xl font-medium leading-tight mb-6 text-balance">
          Transforming Spaces into
          <span className="italic"> Timeless</span> Interiors
        </h1>

        <p className="opacity-0 animate-fade-up stagger-2 font-body text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10">
          We craft bespoke interiors that blend elegance with functionality, 
          creating spaces that tell your unique story.
        </p>

        <div className="opacity-0 animate-fade-up stagger-3 flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="luxury" size="xl">
            Book Free Consultation
          </Button>
          <Button variant="luxury-outline" size="xl">
            View Our Work
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up stagger-5">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-foreground/60 font-body">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-foreground/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
