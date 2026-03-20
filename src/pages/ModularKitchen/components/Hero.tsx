import { motion, useScroll, useTransform } from "framer-motion";
import { useLeadModal } from "@/context/LeadContext";
import { MessageCircle } from "lucide-react";
import { modularKitchenData } from "../data";
import { useRef } from "react";

export function Hero() {
  const { openLeadModal } = useLeadModal();
  const { title, subtext, image } = modularKitchenData.hero;
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative w-full h-[80vh] flex items-center overflow-hidden">
      {/* Background Video with Overlay */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 bg-black">
        <video 
          autoPlay loop muted playsInline poster={image}
          className="w-full h-full object-cover scale-105 opacity-80"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        >
          <source src="https://videos.pexels.com/video-files/5586071/5586071-uhd_2732_1440_30fps.mp4" type="video/mp4" />
        </video>
        <img src={image} alt="Modular Kitchen" className="w-full h-full object-cover scale-105 absolute inset-0 z-[-1] opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-white w-full pt-20 lg:pt-28">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-bronze font-medium uppercase tracking-[0.3em] mb-4 text-xs sm:text-sm drop-shadow-md">
            Premium Kitchen Designs
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold leading-tight mb-6 drop-shadow-xl">
            {title.split('–')[0]} <br/> <span className="text-base md:text-base font-light text-white/90"> {title.split('–')[1]}</span>
          </h1>
          <p className="text-base md:text-base text-white/90 leading-relaxed mb-6 max-w-2xl font-light drop-shadow">
            {subtext}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button 
              onClick={() => openLeadModal("Modular Kitchen - Free Consultation")}
              className="bg-bronze hover:bg-bronze/90 text-white px-8 py-4 rounded-full font-medium transition-all shadow-[0_0_20px_rgba(205,164,52,0.4)] hover:shadow-[0_0_30px_rgba(205,164,52,0.6)] transform hover:-translate-y-1"
            >
              Book Free Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
