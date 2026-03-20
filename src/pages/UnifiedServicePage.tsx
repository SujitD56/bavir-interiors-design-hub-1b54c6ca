import { useParams } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { unifiedServicesData, UnifiedServiceTemplate } from "../data/unifiedServicesData";
import { useLeadModal } from "@/context/LeadContext";
import { serviceProjects } from "../data/service";

// Icons
import { CheckCircle2, MessageSquare, Paintbrush, Hammer, Key, Shield, Clock, Gem, Handshake, Phone, ChevronDown, Plus, Minus, Star, Play, Layers, MessageCircle, Check, Sparkles, Calculator } from "lucide-react";

// --- Generic Section Content ---
const processSteps = [
  { step: "01", title: "Consultation", icon: <MessageSquare className="w-5 h-5" />, desc: "Discussing your vision and layout." },
  { step: "02", title: "Design", icon: <Paintbrush className="w-5 h-5" />, desc: "3D visuals & spatial layouts." },
  { step: "03", title: "Material Selection", icon: <Layers className="w-5 h-5" />, desc: "Curating premium textures." },
  { step: "04", title: "Execution", icon: <Hammer className="w-5 h-5" />, desc: "Precision factory manufacturing." },
  { step: "05", title: "Handover", icon: <Key className="w-5 h-5" />, desc: "Delivering your finished space." },
];

const genericTestimonials = [
  { name: "Rahul Sharma", text: "Bavir transformed our space completely. The design is highly functional and absolutely beautiful.", rating: 5 },
  { name: "Sneha Reddy", text: "Incredible attention to detail and zero delays. The materials used feel extremely premium.", rating: 5 },
  { name: "Vikram Singh", text: "The team is very professional. They mapped out our entire home requirements within our strict budget.", rating: 5 },
];

function GenericCostCalculator({ serviceTitle, calculator }: { serviceTitle: string; calculator: any }) {
  const { openLeadModal } = useLeadModal();
  const [opt1, setOpt1] = useState(calculator.options1[0]);
  const [size, setSize] = useState<number>(100);
  const [opt2, setOpt2] = useState(calculator.options2[0]);
  const [calculatedCost, setCalculatedCost] = useState<number | null>(null);

  const calculateCost = (e: React.FormEvent) => {
    e.preventDefault();
    let baseRate = 1200; 
    
    // Simple logic: add 20% for each index in the options
    const idx1 = calculator.options1.indexOf(opt1);
    const idx2 = calculator.options2.indexOf(opt2);
    
    baseRate = baseRate * (1 + (idx1 * 0.15)) * (1 + (idx2 * 0.2));

    const total = Math.round(baseRate * size);
    setCalculatedCost(total);
  };

  return (
    <div className="bg-white text-foreground p-6 md:p-8 rounded-[2rem] shadow-2xl relative overflow-hidden max-w-4xl mx-auto">
      {/* Decorative accents */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/50 rounded-bl-full -z-0" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-bronze/10 rounded-tr-full -z-0" />

      <form onSubmit={calculateCost} className="relative z-10 space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3 text-left">
            <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80">{calculator.label1}</label>
            <select 
              value={opt1} 
              onChange={(e) => setOpt1(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-border/60 bg-secondary/30 focus:border-bronze focus:ring-1 focus:ring-bronze outline-none transition-all text-sm"
            >
              {calculator.options1.map((opt: string) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div className="space-y-3 text-left">
            <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80">{calculator.label2}</label>
            <select 
              value={opt2} 
              onChange={(e) => setOpt2(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-border/60 bg-secondary/30 focus:border-bronze focus:ring-1 focus:ring-bronze outline-none transition-all text-sm"
            >
              {calculator.options2.map((opt: string) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-3 text-left">
          <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80">{serviceTitle.split('–')[0]} Size (Sq. Ft.)</label>
          <div className="flex items-center gap-6">
            <input 
              type="range" 
              min="50" 
              max="1000" 
              step="10"
              value={size} 
              onChange={(e) => setSize(Number(e.target.value))}
              className="flex-grow h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-bronze"
            />
            <div className="w-24 px-3 py-2 bg-secondary/50 border border-border/60 rounded-xl text-center font-heading font-bold text-sm">
              {size} sq ft
            </div>
          </div>
        </div>

        <div className="pt-4 text-center">
          <button 
            type="submit"
            className="bg-foreground hover:bg-foreground/90 text-white px-12 py-4 rounded-full font-heading font-semibold transition-all shadow-xl transform hover:-translate-y-1 w-full md:w-auto uppercase tracking-widest text-xs"
          >
            Calculate Estimate
          </button>
        </div>
      </form>

      <AnimatePresence>
        {calculatedCost !== null && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-8 pt-8 border-t border-border/40 text-center"
          >
            <p className="text-muted-foreground mb-1 text-xs uppercase tracking-widest font-medium">Estimated Investment</p>
            <div className="text-4xl md:text-5xl font-heading font-bold text-bronze mb-4">
              ₹{calculatedCost.toLocaleString('en-IN')}
            </div>
            <p className="text-[11px] text-muted-foreground max-w-sm mx-auto mb-8 italic">
              *Approximate estimate based on standard material indices. Book a consultation for a site-specific quote.
            </p>
            <button onClick={() => openLeadModal(`${serviceTitle} Calculator Result`)} className="bg-bronze hover:bg-bronze/90 text-white px-10 py-4 rounded-full font-medium transition-all shadow-lg">
              Book Free Consultation
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function UnifiedServicePage() {
  const { type } = useParams<{ type: string }>();
  const { openLeadModal } = useLeadModal();
  const containerRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedDesign, setSelectedDesign] = useState<any>(null);
  const [activeMatTab, setActiveMatTab] = useState<string>("");

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  const service: UnifiedServiceTemplate | undefined = type ? unifiedServicesData[type] : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (service) {
      setSelectedDesign(service.designTypes[0]);
      if (service.materialCats) setActiveMatTab(service.materialCats[0].id);
    }
  }, [type, service]);

  if (!service) return <div className="pt-32 text-center text-xl font-heading min-h-[50vh]">Service not found.</div>;

  const stitle = service.title.split('–')[0].trim();

  return (
    <div ref={containerRef} className="bg-white min-h-screen font-body relative overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
       <section className="relative h-[80vh] w-full overflow-hidden flex items-center">
        <motion.div style={{ y }} className="absolute inset-0 z-0 bg-black">
          {service.bgVideo ? (
            <video autoPlay loop muted playsInline className="w-full h-full object-cover scale-105 opacity-80" onError={(e) => { e.currentTarget.style.display = 'none'; }}>
              <source src={service.bgVideo} type="video/mp4" />
            </video>
          ) : null}
          <img src={service.introImage} alt={service.title} className="w-full h-full object-cover scale-105 absolute inset-0 z-[-1] opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-white w-full pt-20 lg:pt-28">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <p className="text-bronze font-medium uppercase tracking-[0.3em] mb-4 text-xs sm:text-sm drop-shadow-md">Premium {stitle}</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold leading-tight mb-6 drop-shadow-xl">
              {stitle} <br/> <span className="text-base md:text-base font-light text-white/90"> {service.tagline}</span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button onClick={() => openLeadModal(`Hero - ${service.title}`)} className="bg-bronze hover:bg-bronze/90 text-white px-8 py-4 rounded-full font-medium transition-all shadow-[0_0_20px_rgba(205,164,52,0.4)] hover:shadow-[0_0_30px_rgba(205,164,52,0.6)] transform hover:-translate-y-1">
                Book Free Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-xl md:text-2xl font-heading font-semibold mb-4">Understanding <span className="text-bronze">{stitle}</span></h2>
              <div className="w-16 h-1 bg-bronze mb-6 rounded-full" />
              <p className="text-base text-muted-foreground leading-relaxed">{service.intro}</p>
            </motion.div>
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-lg">
              <img src={service.introImage} alt="Intro" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE VISUAL SELECTOR (LAYOUTS) */}
      <section className="py-8 lg:py-12 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-6">
            <h2 className="text-xl md:text-2xl font-heading font-semibold mb-4">Design Variations</h2>
            <div className="h-1 w-16 bg-bronze mx-auto rounded-full" />
          </div>
          
          <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-border/50">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-lg font-heading font-semibold mb-6">Interactive Visual Selector</h3>
                {service.designTypes.map((dt, idx) => (
                  <div key={idx} onClick={() => setSelectedDesign(dt)} className={`p-5 rounded-xl cursor-pointer transition-all border ${selectedDesign?.title === dt.title ? 'bg-primary text-white border-primary shadow-lg scale-[1.02]' : 'bg-secondary/30 border-transparent hover:border-bronze hover:bg-secondary/50 text-foreground'}`}>
                    <h4 className="text-base font-heading font-medium">{dt.title}</h4>
                    <p className={`mt-1 text-xs ${selectedDesign?.title === dt.title ? 'text-white/80' : 'text-muted-foreground'}`}>{dt.desc}</p>
                  </div>
                ))}
              </div>
              <div className="relative aspect-[16/9] lg:aspect-[5/3] rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                <AnimatePresence mode="wait">
                  <motion.img key={selectedDesign?.title} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} src={selectedDesign?.image} alt={selectedDesign?.title} className="w-full h-full object-cover" />
                </AnimatePresence>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                   <span className="font-heading font-semibold text-primary text-sm">{selectedDesign?.title}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TABBED MATERIALS */}
      {service.materialCats && (
        <section className="py-8 lg:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-6">
              <h2 className="text-xl md:text-2xl font-heading font-semibold mb-4">Premium Materials & Finishes</h2>
              <div className="h-1 w-16 bg-bronze mx-auto rounded-full" />
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {service.materialCats.map((cat) => (
                  <button key={cat.id} onClick={() => setActiveMatTab(cat.id)} className={`px-6 py-3 rounded-full font-medium text-sm transition-all ${activeMatTab === cat.id ? "text-white bg-primary shadow-lg" : "text-foreground bg-secondary hover:bg-secondary/80"}`}>
                    {cat.title}
                  </button>
                ))}
              </div>
              <div className="bg-secondary/20 rounded-3xl p-6 md:p-8 border border-border/50 shadow-inner">
                <AnimatePresence mode="wait">
                  {service.materialCats.map((cat) => activeMatTab === cat.id && (
                    <motion.div key={cat.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {cat.items.map((item, idy) => (
                        <div key={idy} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-bronze/10 hover:border-bronze transition-all group">
                          <CheckCircle2 className="w-5 h-5 text-bronze group-hover:scale-110 transition-transform" />
                          <span className="text-sm font-medium">{item}</span>
                        </div>
                      ))}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5. FEATURES - Why Choose Section */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-heading font-semibold text-foreground mb-4">Why Choose {stitle}?</h2>
            <div className="h-1 w-16 bg-bronze mx-auto rounded-full" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group p-6 bg-secondary/20 rounded-[2rem] border border-border/50 hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center flex flex-col items-center">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-bronze shadow-sm mb-5 group-hover:bg-primary group-hover:text-white transition-all">
                  {feature.icon || <Sparkles className="w-6 h-6" />}
                </div>
                <h3 className="text-base font-heading font-semibold text-foreground">{feature.text}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PROCESS */}
      <section className="py-8 lg:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-heading font-semibold text-foreground mb-4">Our {stitle} Process</h2>
            <div className="h-1 w-16 bg-bronze mx-auto rounded-full" />
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-[34px] left-[5%] right-[5%] h-[2px] bg-border/60" />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
              {processSteps.map((step, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="relative flex flex-col items-center text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-secondary text-foreground group-hover:bg-primary group-hover:text-white flex items-center justify-center font-heading text-xl md:text-2xl font-semibold mb-6 border-4 border-white shadow-lg transition-colors duration-500 relative z-10">
                    {idx + 1}
                    <div className="absolute inset-0 rounded-full border border-primary/0 group-hover:animate-[ping_1.5s_infinite] border-primary/30" />
                  </div>
                  <h3 className="text-base md:text-lg font-heading font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-[10px] leading-relaxed max-w-[140px]">{step.desc}</p>
                  {idx !== processSteps.length - 1 && <div className="block lg:hidden w-[1px] h-8 bg-border/60 mt-6" />}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. TRANSPARENT PRICING PACKAGES */}
      <section className="py-8 lg:py-12 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-heading font-semibold text-foreground mb-4">Transparent Pricing Packages</h2>
            <div className="h-1 w-16 bg-bronze mx-auto rounded-full mb-4" />
            <p className="mt-3 text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">Choose a package that fits your budget and lifestyle. All packages include standard installation.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto text-left">
            {['Basic', 'Premium', 'Luxury'].map((tier, idx) => (
              <div key={tier} className={`relative p-8 rounded-[2rem] bg-white border h-full flex flex-col ${idx === 1 ? 'border-bronze shadow-[0_0_30px_rgba(205,164,52,0.15)] md:-translate-y-4' : 'border-border/60 hover:border-bronze shadow-lg'} transition-all duration-300 group`}>
                {idx === 1 && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-bronze text-white px-4 py-1 rounded-full text-sm font-medium tracking-wide">Most Popular</div>}
                <div className="mb-8">
                  <h3 className="text-lg font-heading font-semibold mb-2">{tier} Tier</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-2xl lg:text-3xl font-heading font-bold text-foreground">
                      {tier === 'Basic' ? service.costRange.basic : tier === 'Premium' ? service.costRange.premium : service.costRange.luxury}
                    </span>
                    <span className="text-muted-foreground text-sm ml-2">onwards</span>
                  </div>
                </div>
                <div className="flex-grow space-y-4 mb-8">
                  {['Premium Finish', 'Factory Build', 'On-site Installation', '5 Year Warranty'].map((feat) => (
                    <div key={feat} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-bronze shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">{feat}</span>
                    </div>
                  ))}
                </div>
                <button onClick={() => openLeadModal(`${tier} Tier Consultation`)} className={`w-full py-4 rounded-full font-medium transition-all ${idx === 1 ? 'bg-primary text-white hover:bg-primary/90 shadow-md' : 'bg-secondary text-foreground hover:bg-bronze hover:text-white'}`}>
                  Book Free Consultation
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. COST CALCULATOR */}
      <section className="py-4 lg:py-6 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div className="mb-4">
            <div className="bg-white/10 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3 backdrop-blur-md border border-white/20">
              <Calculator className="text-bronze" size={24} />
            </div>
            <h2 className="text-lg md:text-xl font-heading font-semibold mb-2 drop-shadow-md">
              {stitle} Cost Calculator
            </h2>
            <div className="h-1 w-16 bg-bronze mx-auto rounded-full mb-3" />
            <p className="mt-2 text-background/80 text-sm">Get an instant estimate for your dream {stitle.toLowerCase()}.</p>
          </div>
          
          <GenericCostCalculator serviceTitle={service.title} calculator={service.calculator} />
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-xl font-heading font-semibold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-border overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full px-6 py-4 text-left flex justify-between items-center font-heading font-medium text-base text-foreground/90">
                  {faq.q}
                  {openFaq === idx ? <Minus className="w-4 h-4 text-bronze" /> : <Plus className="w-4 h-4 text-muted-foreground" />}
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                      <div className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed border-t border-border/30 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA */}
      <section className="relative py-10 lg:py-16 bg-foreground overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={service.introImage} alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground to-foreground/80 md:bg-gradient-to-r" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 text-white">
          <div className="w-16 h-1 bg-bronze mx-auto mb-8 rounded-full" />
          <h2 className="text-xl md:text-2xl font-heading font-semibold mb-6">Design Your <span className="text-bronze italic">Dream {stitle}</span> Today</h2>
          <p className="text-base text-white/80 font-light mb-8 max-w-2xl mx-auto leading-relaxed">Book a free consultation and get a personalized {stitle.toLowerCase()} design conceptualized specifically for your lifestyle and space.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button onClick={() => openLeadModal('Final CTA')} className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-full font-medium transition-all shadow-[0_0_30px_rgba(205,164,52,0.4)] transform hover:-translate-y-1 w-full sm:w-auto">
              Book Free Consultation
            </button>
            <a href="https://wa.me/917676457919" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-full font-medium transition-all shadow-xl flex items-center justify-center gap-3 w-full sm:w-auto transform hover:-translate-y-1">
              <MessageCircle size={24} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
