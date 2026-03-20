import { motion } from "framer-motion";
import { modularKitchenData } from "../data";
import { Check } from "lucide-react";
import { useLeadModal } from "@/context/LeadContext";

export function Pricing() {
  const { pricing } = modularKitchenData;
  const { openLeadModal } = useLeadModal();

  return (
    <section className="py-8 lg:py-12 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-heading font-semibold text-foreground mb-4">
            Transparent Pricing Packages
          </h2>
          <div className="h-1 w-16 bg-bronze mx-auto rounded-full" />
          <p className="mt-3 text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            Choose a package that fits your budget and lifestyle. All packages include standard installation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-6 max-w-6xl mx-auto items-start">
          {pricing.map((tier, idx) => (
            <motion.div
              key={tier.tier}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className={`relative rounded-3xl p-8 bg-white border ${
                tier.highlight 
                  ? 'border-bronze shadow-[0_0_30px_rgba(205,164,52,0.15)] md:-translate-y-4' 
                  : 'border-border/60 hover:border-bronze shadow-lg'
              } transition-all duration-300 flex flex-col h-full`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-bronze text-white px-4 py-1 rounded-full text-sm font-medium tracking-wide">
                  Most Popular
                </div>
              )}
              <div className="p-6 md:p-8">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  {tier.tier}
                </h3>
                
                <div className="mb-8 mt-3">
                  <span className="text-2xl lg:text-3xl font-heading font-bold text-foreground">
                    {tier.priceRange}
                  </span>
                  <span className="text-muted-foreground text-sm ml-2">onwards</span>
                </div>
              </div>

              <div className="space-y-4 mb-6 flex-grow">
                {tier.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-bronze shrink-0 mt-0.5" />
                    <span className="text-foreground/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => openLeadModal(`Modular Kitchen - ${tier.tier}`)}
                className={`w-full py-4 rounded-full font-medium transition-all ${
                  tier.highlight 
                    ? 'bg-primary text-white hover:bg-primary/90 shadow-md' 
                    : 'bg-secondary text-foreground hover:bg-bronze hover:text-white'
                }`}
              >
                Book Free Consultation
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
