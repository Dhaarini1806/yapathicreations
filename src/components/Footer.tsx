import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-maroon-dark">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h3 className="text-gradient-gold font-heading text-2xl font-bold mb-2">YAPATI</h3>
          <p className="text-primary-foreground/40 font-body text-sm tracking-wider uppercase mb-6">
            Katpaha Tharu · Grow Together
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <a href="https://www.instagram.com/yapati_creations/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/40 hover:text-gold transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/vathaniidaya/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/40 hover:text-gold transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>

          <div className="w-16 h-px bg-gradient-gold mx-auto mb-6" />
          <p className="text-primary-foreground/30 font-body text-xs">
            © {new Date().getFullYear()} YAPATI. Connecting culture, one community at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
