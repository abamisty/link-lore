import { Button } from "@/components/ui/button";
import logo from "@/assets/i2e-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="content-container py-16 px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src={logo} alt="I²E Logo" className="h-12 w-auto filter brightness-0 invert" />
              <div>
                <h3 className="text-2xl font-bold">I²E</h3>
                <p className="text-sm opacity-80">International Institute of Entrepreneurship</p>
              </div>
            </div>
            <p className="text-lg opacity-90 mb-6 max-w-md">
              Democratizing access to the keys to success in a world of opportunity, 
              serving a more responsible and humane economy.
            </p>
            <p className="text-sm opacity-75">www.i2e.ca</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                "Our Identity",
                "Our Approach", 
                "Our Services",
                "Training Programs",
                "Our Team"
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get Started</h4>
            <p className="opacity-80 mb-4">
              Ready to transform your entrepreneurial vision into reality?
            </p>
            <Button 
              variant="secondary" 
              className="bg-background text-primary hover:bg-background/90"
            >
              Contact Us
            </Button>
          </div>
        </div>

        {/* ESG Principles */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          <h4 className="text-lg font-semibold mb-4 text-center">We Support ESG Principles</h4>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4 rounded-lg bg-background/10">
              <h5 className="font-semibold mb-2">Environment</h5>
              <p className="text-sm opacity-80">Respect for the environment</p>
            </div>
            <div className="p-4 rounded-lg bg-background/10">
              <h5 className="font-semibold mb-2">Social</h5>
              <p className="text-sm opacity-80">Inclusion and diversity</p>
            </div>
            <div className="p-4 rounded-lg bg-background/10">
              <h5 className="font-semibold mb-2">Governance</h5>
              <p className="text-sm opacity-80">Transparency and ethics</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm opacity-75">
            © 2024 International Institute of Entrepreneurship (I²E). All rights reserved.
          </p>
          <p className="text-xs opacity-60 mt-2">
            Empowering entrepreneurs worldwide with passion, rigor, kindness, and vision.
          </p>
        </div>
      </div>
    </footer>
  );
};