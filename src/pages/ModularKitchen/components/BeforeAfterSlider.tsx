import { useState, useRef, useEffect } from "react";
import { MoveHorizontal } from "lucide-react";
import heroImage from "@/assets/hero-living-room.jpg"; // Using as BEFORE placeholder
import projectKitchen from "@/assets/project-kitchen.jpg"; // Using as AFTER placeholder

export function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  return (
    <section className="py-8 lg:py-12 bg-foreground text-background">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-heading font-semibold mb-4">
            See the Transformation
          </h2>
          <div className="h-1 w-16 bg-bronze mx-auto rounded-full" />
          <p className="mt-3 text-background/80 text-base">
            Drag the slider to see how our premium modular designs can upgrade your space.
          </p>
        </div>

        <div 
          ref={containerRef}
          className="relative w-full aspect-[16/10] sm:aspect-[21/9] rounded-2xl overflow-hidden cursor-ew-resize select-none touch-none shadow-2xl"
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
        >
          {/* After Image (Background) */}
          <img 
            src={projectKitchen} 
            alt="After Transformation" 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
          <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded font-medium text-sm backdrop-blur-sm pointer-events-none">
            AFTER
          </div>

          {/* Before Image (Clipped) */}
          <div 
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
             <img 
              src={heroImage} 
              alt="Before Transformation" 
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              style={{ width: '100vw', maxWidth: containerRef.current?.offsetWidth || '1000px' }}
            />
            {/* Needs absolute width to prevent image shrinking */}
            <div className="absolute inset-0 w-[200vw] h-full">
               <img 
                src={heroImage} 
                alt="Before" 
                className="w-full h-full object-cover pointer-events-none"
                style={{ width: containerRef.current?.offsetWidth || '100%' }}
              />
            </div>
            
            <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded font-medium text-sm backdrop-blur-sm pointer-events-none z-10">
              BEFORE
            </div>
          </div>

          {/* Slider Line & Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 flex items-center justify-center pointer-events-none"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            <div className="w-10 h-10 bg-white rounded-full shadow-[0_0_15px_rgba(0,0,0,0.5)] flex items-center justify-center text-primary pointer-events-auto">
              <MoveHorizontal size={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
