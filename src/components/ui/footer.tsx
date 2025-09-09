import { Coffee, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
  ];

  const quickLinks = [
    { name: "Menu", href: "#menu" },
    { name: "About", href: "#about" },
    { name: "Location", href: "#location" },
    { name: "Catering", href: "#" },
    { name: "Events", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="w-8 h-8 text-accent" />
              <h3 className="text-2xl font-display font-bold">Brews & Bonds</h3>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
              Your neighborhood coffee haven where exceptional coffee meets genuine community. 
              Every cup tells a story, every visit feels like home.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="text-primary-foreground/80 hover:text-accent transition-colors duration-200 hover:scale-110 transform"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Contact</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>125 Heritage Street</p>
              <p>Downtown District</p>
              <p className="pt-2">(555) 123-BREW</p>
              <p>hello@brewsandbonds.com</p>
              <div className="pt-4">
                <p className="font-medium text-accent">Hours</p>
                <p>Mon-Fri: 6:30 AM - 8:00 PM</p>
                <p>Sat: 7:00 AM - 8:00 PM</p>
                <p>Sun: 8:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Brews & Bonds. All rights reserved. Made with ❤️ in the neighborhood.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;