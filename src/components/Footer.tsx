import { Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Branding */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-2">
              8020ads.com
            </h3>
            <p className="text-primary-foreground/70 text-sm">
              The 80% effective agency
            </p>
          </div>
          
          {/* Center - Links */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a 
                href="#" 
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
              >
                Terms
              </a>
              <a 
                href="#" 
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
              >
                Cookie Settings
              </a>
            </div>
          </div>
          
          {/* Right - Social */}
          <div className="text-center md:text-right">
            <p className="text-sm text-primary-foreground/70 mb-3">
              Follow our 20% social media strategy:
            </p>
            <div className="flex justify-center md:justify-end gap-4">
              <a 
                href="#" 
                className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-xs text-primary-foreground/50">
            © 2024 8020ads.com. We're 80% sure about our copyright claims.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;