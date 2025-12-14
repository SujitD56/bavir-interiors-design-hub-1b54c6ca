import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", projectType: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
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
                <div>
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
                </div>
                <div>
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
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-body mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border focus:border-bronze focus:outline-none transition-colors font-body"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-sm font-body mb-2">Project Type *</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border focus:border-bronze focus:outline-none transition-colors font-body appearance-none"
                  >
                    <option value="">Select project type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="modular">Modular Kitchen/Wardrobe</option>
                    <option value="turnkey">Turnkey Solution</option>
                    <option value="consultation">Design Consultation</option>
                  </select>
                </div>
              </div>

              <div>
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
              </div>

              <Button type="submit" variant="luxury" size="xl" className="w-full sm:w-auto">
                Book Free Consultation
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:pl-8">
            <div className="bg-foreground text-background p-10 h-full">
              <h3 className="font-heading text-2xl font-medium mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <MapPin size={24} className="flex-shrink-0 text-background/60" />
                  <div>
                    <h4 className="font-heading font-medium mb-1">Visit Our Studio</h4>
                    <p className="text-background/70 font-body text-sm">
                      123 Design District, Bandra West<br />
                      Mumbai, Maharashtra 400050
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone size={24} className="flex-shrink-0 text-background/60" />
                  <div>
                    <h4 className="font-heading font-medium mb-1">Call Us</h4>
                    <p className="text-background/70 font-body text-sm">
                      +91 98765 43210<br />
                      +91 22 1234 5678
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail size={24} className="flex-shrink-0 text-background/60" />
                  <div>
                    <h4 className="font-heading font-medium mb-1">Email Us</h4>
                    <p className="text-background/70 font-body text-sm">
                      hello@bavirinteriors.com<br />
                      projects@bavirinteriors.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock size={24} className="flex-shrink-0 text-background/60" />
                  <div>
                    <h4 className="font-heading font-medium mb-1">Working Hours</h4>
                    <p className="text-background/70 font-body text-sm">
                      Monday - Saturday: 10:00 AM - 7:00 PM<br />
                      Sunday: By Appointment Only
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-8 border-t border-background/20">
                <p className="text-sm text-background/60 font-body mb-4">Follow Us</p>
                <div className="flex gap-4">
                  {["Instagram", "Facebook", "Pinterest", "LinkedIn"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-sm text-background/70 hover:text-background transition-colors font-body"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
