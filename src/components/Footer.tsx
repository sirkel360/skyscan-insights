import { Mail, Phone, MapPin } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const links = {
    services: [{
      name: "Aerial Inspections",
      href: "#services"
    }, {
      name: "Land Surveying",
      href: "#services"
    }, {
      name: "Insurance Claims",
      href: "#services"
    }, {
      name: "Asset Monitoring",
      href: "#services"
    }],
    industries: [{
      name: "Insurance",
      href: "#industries"
    }, {
      name: "Construction",
      href: "#industries"
    }, {
      name: "Agriculture",
      href: "#industries"
    }, {
      name: "Utilities",
      href: "#industries"
    }],
    company: [{
      name: "About Us",
      href: "#"
    }, {
      name: "Careers",
      href: "#"
    }, {
      name: "Case Studies",
      href: "#"
    }, {
      name: "Contact",
      href: "#contact"
    }]
  };
  return <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="font-bold text-xl text-foreground">Onyx<span className="text-primary">View</span></span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Professional aerial surveying and data collection services. Transforming how industries capture and utilize geospatial data.
            </p>
            <div className="space-y-3">
              <a href="tel:+15551234567" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4" />
                <span>(818) 823-3924</span>
              </a>
              <a href="mailto:info@onyxview.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@onyxview.com</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Southern California and Kansas City, MO</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-3">
              {links.services.map(link => <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Industries Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Industries</h4>
            <ul className="space-y-3">
              {links.industries.map(link => <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-3">
              {links.company.map(link => <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} OnyxView. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;