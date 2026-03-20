import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLeadTracking } from "@/hooks/useLeadTracking";

export function Contact() {
  const { toast } = useToast();
  const { logLead } = useLeadTracking();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Log the lead data to Google Sheets
    logLead({
      ...formData,
      source: "Contact Form",
    });

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", projectType: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Studio",
      lines: ["No.45, Kanakapura Main Rd, opp. metro pillar no.46, Banashankari Temple Ward, Bengaluru, Karnataka 560078"],
    },
    {
      icon: Phone,
      title: "Call Us",
      lines: [
        "+91 7676457919",
        <a 
          key="wa-link"
          href="https://wa.me/917676457919?text=Hello%20Bavir%20Interiors!%20I'm%20interested%20in%20your%20design%20services%20and%20looking%20for%20a%20consultation." 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-bronze hover:underline block mt-1"
        >
          Chat on WhatsApp
        </a>
      ],
    },
    {
      icon: Mail,
      title: "Email Us",
      lines: ["bavirinteriors@gmail.com"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      lines: ["Monday - Saturday: 10:00 AM - 7:00 PM", "Sunday: By Appointment Only"],
    },
  ];

  return (
    <section id="contact" className="section-padding bg-secondary" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 block font-body">
              Get In Touch
            </span>
            <h2 className="section-title mb-4">
              Start Your Interior Journey
            </h2>
            <p className="section-subtitle mb-10">
              Ready to transform your space? Fill out the form below and our design team 
              will get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 }}
                >
                  <label htmlFor="name" className="block text-sm font-body mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border focus:border-bronze focus:outline-none transition-colors font-body"
                    placeholder="Your name"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.25 }}
                >
                  <label htmlFor="email" className="block text-sm font-body mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border focus:border-bronze focus:outline-none transition-colors font-body"
                    placeholder="your@email.com"
                  />
                </motion.div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="phone" className="block text-sm font-body mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border focus:border-bronze focus:outline-none transition-colors font-body"
                    placeholder="98765 43210"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.35 }}
                >
                  <label
                    htmlFor="projectType"
                    className="block text-sm font-body mb-2"
                  >
                    Project Type <span className="text-red-500">*</span>
                  </label>

                  <div className="relative">
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 pr-10 bg-background border border-border
                 focus:border-bronze focus:outline-none transition-colors
                 font-body appearance-none"
                    >
                      <option value="">Select project type</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="modular">Modular Kitchen/Wardrobe</option>
                      <option value="turnkey">Turnkey Solution</option>
                      <option value="consultation">Design Consultation</option>
                    </select>

                    {/* Down arrow icon */}
                    <ChevronDown
                      size={18}
                      className="absolute right-4 top-1/2 -translate-y-1/2
                 text-muted-foreground pointer-events-none"
                    />
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <label htmlFor="message" className="block text-sm font-body mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border focus:border-bronze focus:outline-none transition-colors font-body resize-none"
                  placeholder="Tell us about your project..."
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.45 }}
              >
                <Button type="submit" variant="luxury" size="xl" className="w-full sm:w-auto">
                  Book Free Consultation
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:pl-8"
          >
            <div className="bg-foreground text-background p-10 h-full">
              <h3 className="font-heading text-2xl font-medium mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <info.icon size={24} className="flex-shrink-0 text-bronze" />
                    </motion.div>
                    <div>
                      <h4 className="font-heading font-medium mb-1">{info.title}</h4>
                      {info.lines.map((line, i) => (
                        <p key={i} className="text-background/70 font-body text-sm">
                          {line}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                className="mt-12 pt-8 border-t border-background/20"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
              >
                <p className="text-sm text-background/60 font-body mb-4">Follow Us</p>
                <div className="flex gap-4">
                  <motion.a
                    href="https://www.instagram.com/bavirinteriors?igsh=MW50dWpwNWRqaTBmdQ%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-background/70 hover:text-bronze transition-colors font-body"
                    whileHover={{ y: -3 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.9 }}
                  >
                    Instagram
                  </motion.a>
                  <motion.a
                    href="https://www.facebook.com/share/1GzeAB3Ddy/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-background/70 hover:text-bronze transition-colors font-body"
                    whileHover={{ y: -3 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.95 }}
                  >
                    Facebook
                  </motion.a>
                  <motion.a
                    href="https://pin.it/1zWQG9QnV"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-background/70 hover:text-bronze transition-colors font-body"
                    whileHover={{ y: -3 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.0 }}
                  >
                    Pinterest
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/bavir-interiors-8631613b8/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-background/70 hover:text-bronze transition-colors font-body"
                    whileHover={{ y: -3 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.05 }}
                  >
                    LinkedIn
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
