import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="YAPATI cultural collection"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-dark/90 via-maroon/70 to-maroon-dark/80" />
      </div>

      {/* Decorative gold line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="text-gradient-gold font-heading text-lg tracking-[0.3em] uppercase">
            YAPATI — Katpaha Tharu
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6"
        >
          Bringing Home Closer —<br />
          <span className="italic text-gold-light">Wherever You Are.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-body text-primary-foreground/80 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          YAPATI connects global Indian communities with authentic textiles, jewellery, and cultural essentials sourced directly from trusted artisans and wholesalers across India.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://chat.whatsapp.com/DDDYlXIcg6uARjOXaeOFkj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-gold text-foreground font-body font-semibold uppercase tracking-wider text-sm rounded-sm hover:shadow-gold transition-all duration-300 hover:scale-105"
          >
            Join Our Community
          </a>
          <a
            href="#collections"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-gold text-gold-light font-body font-semibold uppercase tracking-wider text-sm rounded-sm hover:bg-gold/10 transition-all duration-300"
          >
            Explore Collections
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 text-gold/60 font-body text-sm tracking-[0.2em] uppercase"
        >
          Grow Together
        </motion.p>
      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-gold opacity-40" />
    </section>
  );
};

export default Hero;
