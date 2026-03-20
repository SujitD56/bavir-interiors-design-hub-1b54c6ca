import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { CheckCircle2, Home, Layout, Sparkles, Clock, ShieldCheck, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import projectBedroom from "@/assets/project-bedroom.jpg";
import projectKitchen from "@/assets/project-kitchen.jpg";
import heroImage from "@/assets/hero-living-room.jpg";
import { useLeadModal } from "@/context/LeadContext";

const bhkData = {
  "1BHK": {
    title: "1BHK Interior Design – Smart Living in Compact Spaces",
    description: "A 1BHK home needs intelligent design to feel open and organised. Our 1BHK interior solutions focus on maximising usable space while keeping the home visually light and clutter-free.",
    focusPoints: [
      "Space-saving furniture and modular storage",
      "Multi-functional units like sofa-cum-beds and foldable tables",
      "Light colour palettes to enhance openness",
      "Compact kitchens with efficient layouts",
      "Minimal yet stylish décor"
    ],
    idealFor: "Perfect for young professionals, couples, and rental homes."
  },
  "2BHK": {
    title: "2BHK Interior Design – Balanced, Functional & Stylish",
    description: "A 2BHK home offers flexibility, but smart planning makes all the difference. We design 2BHK interiors that comfortably accommodate bedrooms, living spaces, kitchens, and dining areas—without feeling crowded.",
    focusPoints: [
      "Well-planned living and dining layouts",
      "Modular kitchens with optimal storage",
      "Custom wardrobes and hydraulic storage beds",
      "Thoughtful lighting for every room",
      "A cohesive design theme across the home"
    ],
    idealFor: "Ideal for small families and growing households."
  },
  "3BHK": {
    title: "3BHK Interior Design – Comfort with Personalised Luxury",
    description: "A 3BHK home allows room for individuality. Whether you need a home office, guest bedroom, or kids’ room, our designs ensure every space has a clear purpose and identity.",
    focusPoints: [
      "Zoning spaces for privacy and flow",
      "Layered lighting for warmth and depth",
      "Premium finishes and textures",
      "Custom furniture and storage solutions",
      "Statement elements like accent walls and panelling"
    ],
    idealFor: "Designed for families who want comfort with a touch of luxury."
  }
};

const servicesCovered = [
  "Space planning & layout design",
  "Modular kitchens and wardrobes",
  "Living room, bedroom & dining interiors",
  "Custom storage solutions",
  "Lighting, materials & finishes selection",
  "3D visualisation",
  "Project management & execution",
  "Post-installation support"
];

const designStyles = [
  "Modern & minimalist interiors",
  "Contemporary home designs",
  "Luxury & premium finishes",
  "Scandinavian-inspired homes",
  "Traditional with a modern twist",
  "Budget-friendly smart interiors"
];

const whyChooseUs = [
  "Personalised designs for every BHK size",
  "Experienced interior designers",
  "High-quality materials & fittings",
  "Transparent pricing—no surprises",
  "Timely execution & quality checks",
  "Reliable after-service support"
];

export function BHKDesigns() {
  const { openLeadModal } = useLeadModal();
  return (
    <section id="bhk-designs" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title mb-6"
          >
            Tailored Interiors for 1, 2 & 3BHK Homes
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-subtitle mx-auto"
          >
            Your home should reflect how you live—not just how it looks. At <strong>Bavir Interiors</strong>, we create thoughtfully planned home interiors that balance comfort, style, and everyday functionality.
          </motion.p>
        </div>

        {/* BHk Tabs */}
        <Tabs defaultValue="2BHK" className="w-full mb-24">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12 bg-secondary/50 p-1 rounded-full">
            <TabsTrigger value="1BHK" className="rounded-full data-[state=active]:bg-bronze data-[state=active]:text-white">1BHK</TabsTrigger>
            <TabsTrigger value="2BHK" className="rounded-full data-[state=active]:bg-bronze data-[state=active]:text-white">2BHK</TabsTrigger>
            <TabsTrigger value="3BHK" className="rounded-full data-[state=active]:bg-bronze data-[state=active]:text-white">3BHK</TabsTrigger>
          </TabsList>
          
          {Object.entries(bhkData).map(([key, data]) => (
            <TabsContent key={key} value={key}>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className="space-y-6">
                  <h3 className="text-3xl font-heading font-semibold text-foreground">
                    {data.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {data.description}
                  </p>
                  <ul className="space-y-3">
                    {data.focusPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-foreground/80">
                        <CheckCircle2 className="w-5 h-5 text-bronze shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="p-4 bg-secondary/30 rounded-xl border border-border">
                    <p className="font-medium italic text-bronze">{data.idealFor}</p>
                  </div>
                </div>
                <div className="relative aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-bronze/20 to-transparent z-10" />
                  <img 
                    src={key === "1BHK" ? projectKitchen : key === "2BHK" ? projectBedroom : heroImage} 
                    alt={data.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Grid Sections */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-24">
          {/* Services */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <Layout className="w-6 h-6 text-bronze" />
              <h4 className="text-xl font-heading font-semibold">What's Covered</h4>
            </div>
            <ul className="grid gap-3">
              {servicesCovered.map((s, i) => (
                <li key={i} className="flex items-center gap-2 text-muted-foreground text-sm">
                  <span className="w-1 h-1 bg-bronze rounded-full" /> {s}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Styles */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-bronze" />
              <h4 className="text-xl font-heading font-semibold">Design Styles</h4>
            </div>
            <ul className="grid gap-3">
              {designStyles.map((s, i) => (
                <li key={i} className="flex items-center gap-2 text-muted-foreground text-sm">
                  <span className="w-1 h-1 bg-bronze rounded-full" /> {s}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Why Bavir */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-bronze" />
              <h4 className="text-xl font-heading font-semibold">Why Choose Bavir</h4>
            </div>
            <ul className="grid gap-3">
              {whyChooseUs.map((s, i) => (
                <li key={i} className="flex items-center gap-2 text-muted-foreground text-sm">
                  <span className="w-1 h-1 bg-bronze rounded-full" /> {s}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[2rem] bg-secondary p-12 lg:p-20 text-center overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-bronze/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-bronze/10 rounded-full -ml-32 -mb-32 blur-3xl" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h3 className="text-3xl md:text-4xl font-heading font-semibold">
              Start Your Home Interior Journey Today
            </h3>
            <p className="text-lg text-muted-foreground">
              Looking to design or renovate your 1BHK, 2BHK, or 3BHK home? Get a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="luxury" 
                size="xl" 
                className="w-full sm:w-auto"
                onClick={() => openLeadModal('BHK Section - Consultation')}
              >
                <Clock className="mr-2 h-4 w-4" /> Book Free Consultation
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
