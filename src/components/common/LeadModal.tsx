import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ChevronDown, User, Mail, Phone, MessageSquare, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLeadModal } from '@/context/LeadContext';
import { useLeadTracking } from '@/hooks/useLeadTracking';
import { useToast } from '@/hooks/use-toast';
import bavirLogo from "@/assets/bavir-logo.png";

export function LeadModal() {
  const { isModalOpen, closeLeadModal, modalSource } = useLeadModal();
  const { logLead } = useLeadTracking();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await logLead({
        ...formData,
        source: `Modal - ${modalSource}`
      });

      setIsSuccess(true);
      toast({
        title: "Inquiry Received!",
        description: "We'll be in touch with you shortly.",
      });

      // Close modal after a delay if successful
      setTimeout(() => {
        closeLeadModal();
        setIsSuccess(false);
        setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
      }, 2500);
    } catch (error) {
      toast({
        title: "Oops!",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLeadModal}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={closeLeadModal}
              className="absolute top-6 right-6 p-2 text-muted-foreground hover:text-bronze transition-colors z-20"
            >
              <X size={20} />
            </button>

            {isSuccess ? (
              <div className="p-12 text-center space-y-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-20 h-20 bg-bronze/10 rounded-full flex items-center justify-center mx-auto"
                >
                  <CheckCircle2 size={40} className="text-bronze" />
                </motion.div>
                <h3 className="text-2xl font-heading font-semibold">Thank You!</h3>
                <p className="text-muted-foreground font-body">
                  Your request has been sent successfully. Our designers will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <div className="p-8 md:p-12">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src={bavirLogo} 
                      alt="Bavir Interiors Logo" 
                      className="h-10 w-auto"
                    />
                    <div className="h-8 w-px bg-bronze/20" />
                    <span className="text-bronze text-[10px] uppercase tracking-[0.3em] font-medium block">
                      Bavir Interiors
                    </span>
                  </div>
                  <h3 className="text-3xl font-heading font-semibold text-foreground">
                    Start Your Project
                  </h3>
                  <p className="text-muted-foreground text-sm font-body mt-2">
                    Share your details and let's create something extraordinary together.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-secondary/50 border border-transparent focus:border-bronze rounded-xl focus:outline-none transition-all font-body text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-secondary/50 border border-transparent focus:border-bronze rounded-xl focus:outline-none transition-all font-body text-sm"
                      />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                      <input
                        required
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-secondary/50 border border-transparent focus:border-bronze rounded-xl focus:outline-none transition-all font-body text-sm"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground flex items-center gap-2 pointer-events-none">
                      <ChevronDown size={18} />
                    </div>
                    <select
                      required
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-secondary/50 border border-transparent focus:border-bronze rounded-xl focus:outline-none transition-all font-body text-sm appearance-none"
                    >
                      <option value="">Select Project Type</option>
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Modular Kitchen">Modular Kitchen</option>
                      <option value="Turnkey">Turnkey Solution</option>
                    </select>
                  </div>

                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 text-muted-foreground" size={18} />
                    <textarea
                      name="message"
                      placeholder="Your Message (Optional)"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full pl-12 pr-4 py-3 bg-secondary/50 border border-transparent focus:border-bronze rounded-xl focus:outline-none transition-all font-body text-sm resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      variant="luxury" 
                      size="lg" 
                      className="w-full py-6 text-base"
                    >
                      {isSubmitting ? "Sending..." : (
                        <span className="flex items-center gap-2">
                          Send Request <Send size={18} />
                        </span>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
