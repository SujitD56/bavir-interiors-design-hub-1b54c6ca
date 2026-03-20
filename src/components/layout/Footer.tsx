import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import bavirLogo from "@/assets/bavir-logo.png";

const footerLinks = {
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
  ],
  services: [
    { label: "Residential Interiors", href: "/services/residential" },
    { label: "Commercial Spaces", href: "/services/commercial" },
    { label: "Modular Kitchens", href: "/services/modular" },
    { label: "Custom Wardrobes", href: "/services/wardrobe" },
    { label: "Bathroom Design", href: "/services/bathroom" },
  ],
  connect: [
    { label: "Instagram", href: "https://www.instagram.com/bavirinteriors?igsh=MW50dWpwNWRqaTBmdQ%3D%3D&utm_source=qr" },
    { label: "Facebook", href: "https://www.facebook.com/share/1GzeAB3Ddy/?mibextid=wwXIfr" },
    { label: "Pinterest", href: "https://pin.it/1zWQG9QnV" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/bavir-interiors-8631613b8/" },
    { label: "WhatsApp", href: "https://wa.me/917676457919" },
    { label: "Email", href: "mailto:bavirinteriors@gmail.com" },
  ],
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <motion.img 
              src={bavirLogo} 
              alt="Bavir Interiors Logo" 
              className="h-20 w-auto mb-4 brightness-0 invert"
              whileHover={{ scale: 1.05 }}
            />
            <p className="text-background/70 font-body text-sm leading-relaxed mb-6">
              Transforming spaces into timeless interiors since 2010. 
              Experience the art of luxury living with our bespoke design solutions.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-medium mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-bronze transition-colors font-body text-sm"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-heading font-medium mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-bronze transition-colors font-body text-sm"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-heading font-medium mb-4">Connect</h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background/70 hover:text-bronze transition-colors font-body text-sm"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 font-body text-sm">
            © {new Date().getFullYear()} Bavir Interiors. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-background/60 hover:text-bronze transition-colors font-body text-sm group"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to top
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
