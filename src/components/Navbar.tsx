import { motion } from "framer-motion";
import logoImg from "@/assets/yapati-logo.png";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-maroon-dark/80 backdrop-blur-md border-b border-gold/20"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logoImg} alt="YAPATI Logo" className="w-9 h-9 rounded-full object-cover" />
          <span className="text-gradient-gold font-heading text-2xl font-bold tracking-wide">
            YAPATI
          </span>
          <span className="hidden sm:inline text-gold/50 font-body text-xs tracking-[0.15em] uppercase">
            Katpaha Tharu
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["About", "How It Works", "Collections", "Community", "Founders"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-primary-foreground/70 hover:text-gold-light font-body text-sm tracking-wider uppercase transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="https://chat.whatsapp.com/DDDYlXIcg6uARjOXaeOFkj"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 bg-gradient-gold text-foreground font-body font-semibold text-xs uppercase tracking-wider rounded-sm hover:shadow-gold transition-all duration-300"
        >
          Join
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
