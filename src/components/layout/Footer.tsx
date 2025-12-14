import { ArrowUp } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Careers", href: "#" },
  ],
  services: [
    { label: "Residential Design", href: "#services" },
    { label: "Commercial Design", href: "#services" },
    { label: "Modular Solutions", href: "#services" },
    { label: "Consultation", href: "#contact" },
  ],
  connect: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "Pinterest", href: "#" },
    { label: "LinkedIn", href: "#" },
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
            <h3 className="font-heading text-2xl font-semibold mb-4">Bavir Interiors</h3>
            <p className="text-background/70 font-body text-sm leading-relaxed mb-6">
              Transforming spaces into timeless interiors since 2010. 
              Experience the art of luxury living with our bespoke design solutions.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-medium mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors font-body text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-heading font-medium mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors font-body text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-heading font-medium mb-4">Connect</h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors font-body text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 font-body text-sm">
            © {new Date().getFullYear()} Bavir Interiors. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-background/60 hover:text-background transition-colors font-body text-sm group"
          >
            Back to top
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
