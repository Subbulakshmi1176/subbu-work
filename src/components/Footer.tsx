import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Subbulakshmi E</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Full-Stack Developer & AI Enthusiast passionate about creating 
              impactful digital solutions that make a difference.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-md font-semibold text-foreground">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-md font-semibold text-foreground">Services</h4>
            <nav className="space-y-2">
              <span className="block text-muted-foreground text-sm">Web Development</span>
              <span className="block text-muted-foreground text-sm">Full-Stack Development</span>
              <span className="block text-muted-foreground text-sm">AI Integration</span>
              <span className="block text-muted-foreground text-sm">E-commerce Solutions</span>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-md font-semibold text-foreground">Get in Touch</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">Tamil Nadu, India</p>
              <a 
                href="mailto:subbulakshmi1176@gmail.com"
                className="block text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                subbulakshmi1176@gmail.com
              </a>
              <a 
                href="tel:+916382261401"
                className="block text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                +91 6382261401
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Subbulakshmi E. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground text-sm">
              Built with modern web technologies
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="hover:scale-110 transition-transform"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;