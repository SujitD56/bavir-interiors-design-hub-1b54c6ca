import { motion } from "framer-motion";
import { useLeadModal } from "@/context/LeadContext";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-living-room.jpg";

export function CTA() {
  const { openLeadModal } = useLeadModal();

  return (
    <section className="relative py-10 lg:py-16 bg-foreground overflow-hidden">
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Kitchen Design CTA" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground to-foreground/80 md:bg-gradient-to-r" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="w-16 h-1 bg-bronze mx-auto mb-8 rounded-full" />
          <h2 className="text-xl md:text-2xl font-heading font-semibold mb-6">
            Design Your <span className="text-bronze italic">Dream Kitchen</span> Today
          </h2>
          <p className="text-base md:text-base text-white/80 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
            Book a free consultation and get a personalized modular kitchen design conceptualized specifically for your lifestyle and space.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button 
              onClick={() => openLeadModal("Modular Kitchen - Final CTA")}
              className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-full font-medium text-base transition-all shadow-[0_0_30px_rgba(205,164,52,0.4)] transform hover:-translate-y-1 w-full sm:w-auto"
            >
              Book Free Consultation
            </button>
            <a 
              href="https://wa.me/1234567890?text=Hi%2C%20I'd%20love%20to%20design%20my%20kitchen!" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-full font-medium text-base transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)] transform hover:-translate-y-1 w-full sm:w-auto flex items-center justify-center gap-3"
            >
              <MessageCircle size={24} />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
