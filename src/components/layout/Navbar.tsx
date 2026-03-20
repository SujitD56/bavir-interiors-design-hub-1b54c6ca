import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import bavirLogo from "@/assets/bavir-logo.png";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useLeadModal } from "@/context/LeadContext";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];
const serviceMenu = [
  { label: "Residential", href: "/services/residential" },
  { label: "Commercial", href: "/services/commercial" },
  { label: "Modular Kitchen", href: "/services/modular" },
  { label: "Custom Wardrobes", href: "/services/wardrobe" },
  { label: "Bathroom Design", href: "/services/bathroom" },
  { label: "Turnkey Solution", href: "/services/turnkey" },
];

export function Navbar() {
  const { openLeadModal } = useLeadModal();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-[2px]"
            : "bg-transparent py-4"
          }
        `}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className={`flex items-center justify-between transition-all duration-300
            ${isScrolled ? "min-h-[56px]" : "min-h-[84px]"}
          `}>
          {/* Logo */}
          <Link to="/#home" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src={bavirLogo} 
                alt="Bavir Interiors Logo" 
                className={`w-auto transition-all duration-300
                  ${isScrolled ? "h-16" : "h-20"}
                `}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => {
              if (link.label === "Services") {
                return (
                  <div key={link.label} className="relative group">
                    <span
                      className={`flex items-center gap-1 cursor-pointer text-sm font-body tracking-wide transition-colors duration-300 relative
                      ${isScrolled ? "text-black" : "text-white"}
                      after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px
                      after:bg-bronze after:transition-all after:duration-300 group-hover:after:w-full
                    `}
                    >
                      Services
                      <ChevronDown
                        size={14}
                        className="mt-[1px] transition-transform duration-300 group-hover:rotate-180"
                      />
                    </span>
                    <div
                      className="absolute left-0 top-full mt-4 w-52 rounded-md bg-white shadow-xl
                     opacity-0 invisible group-hover:opacity-100 group-hover:visible
                     transition-all duration-200 z-50"
                    >
                      <div className="flex flex-col px-4 py-3">
                        {serviceMenu.map(service => (
                          <Link
                            key={service.label}
                            to={service.href}
                            className="py-2 text-sm text-gray-700 hover:text-black transition-colors"
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-sm font-body tracking-wide transition-colors duration-300 relative
                  ${isScrolled ? "text-black hover:text-black" : "text-white hover:text-white"}
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px
                  after:bg-bronze after:transition-all after:duration-300 hover:after:w-full
                `}
                >
                  {link.label}
                </Link>
              );
            })}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button 
                variant="luxury" 
                size="lg"
                onClick={() => openLeadModal('Navbar')}
              >
                Start Project
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors duration-300
              ${isOpen || isScrolled ? "text-black" : "text-white"}
              ${isOpen ? "bg-secondary" : ""}
            `}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden mt-2 bg-white rounded-2xl shadow-2xl border border-border/50 px-6"
            >
              <div className="flex flex-col gap-5 py-8">
                {navLinks.map((link, index) => {
                  if (link.label === "Services") {
                    return (
                      <div key={link.label} className="flex flex-col gap-3">
                        <span className="text-lg font-heading font-medium text-bronze uppercase tracking-widest text-[10px] mb-1">
                          Our Services
                        </span>
                        <div className="grid grid-cols-1 gap-3 pl-4 border-l border-bronze/20">
                          {serviceMenu.map((service) => (
                            <Link
                              key={service.label}
                              to={service.href}
                              onClick={() => setIsOpen(false)}
                              className="text-base font-body text-foreground/70 hover:text-bronze transition-colors flex items-center justify-between"
                            >
                              {service.label}
                              <span className="text-xs opacity-50">→</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  }
                  return (
                    <Link
                      key={link.label}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-heading font-medium text-foreground/80 hover:text-bronze transition-colors flex items-center justify-between group"
                    >
                      {link.label}
                      <span className="text-bronze opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </Link>
                  );
                })}
                <div className="h-px bg-border/50 my-2" />
                <Button 
                  variant="luxury" 
                  size="lg" 
                  className="w-full"
                  onClick={() => openLeadModal('Navbar Mobile')}
                >
                  Start Project
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
