import { motion } from "framer-motion";
import { Phone, Instagram, Facebook, Mail } from "lucide-react";
import foundersImg from "@/assets/founders.png";

const Founders = () => {
  return (
    <section id="founders" className="py-24 bg-sand">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-body text-sm tracking-[0.3em] uppercase">The Faces Behind YAPATI</span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mt-4">
            Meet Our Founders
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Founders Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-gold rounded-lg opacity-20 blur-sm" />
                <img
                  src={foundersImg}
                  alt="YAPATI Founders - Dhaarini R (Co-Founder) and Idayavadani (Founder)"
                  className="relative rounded-lg shadow-gold w-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Founder Cards */}
            <div className="space-y-6">
              {/* Founder Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="rounded-lg border border-border bg-card p-6 shadow-sm"
              >
                <h3 className="font-heading text-2xl text-foreground mb-1">Idayavadani</h3>
                <p className="font-body text-sm tracking-wider uppercase mb-4" style={{ color: 'hsl(25, 90%, 55%)' }}>Founder</p>
                <div className="space-y-3">
                  <a href="mailto:idayavadani@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors font-body text-sm">
                    <Mail className="w-4 h-4 text-accent" />
                    idayavadani@gmail.com
                  </a>
                  <a href="tel:+919003251346" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors font-body text-sm">
                    <Phone className="w-4 h-4 text-accent" />
                    +91 9003251346
                  </a>
                  <a href="https://www.instagram.com/idayavadani/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors font-body text-sm">
                    <Instagram className="w-4 h-4 text-accent" />
                    @idayavadani
                  </a>
                  <a href="https://www.facebook.com/vathaniidaya/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors font-body text-sm">
                    <Facebook className="w-4 h-4 text-accent" />
                    Facebook
                  </a>
                </div>
              </motion.div>

              {/* Co-Founder Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="rounded-lg border border-border bg-card p-6 shadow-sm"
              >
                <h3 className="font-heading text-2xl text-foreground mb-1">Dhaarini R</h3>
                <p className="font-body text-sm tracking-wider uppercase mb-4" style={{ color: 'hsl(175, 70%, 45%)' }}>Co-Founder</p>
                <div className="space-y-3">
                  <a href="mailto:dhaarini1806@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors font-body text-sm">
                    <Mail className="w-4 h-4 text-accent" />
                    dhaarini1806@gmail.com
                  </a>
                  <a href="tel:+917200843784" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors font-body text-sm">
                    <Phone className="w-4 h-4 text-accent" />
                    +91 7200843784
                  </a>
                  <a href="https://www.instagram.com/dhaaruthu/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors font-body text-sm">
                    <Instagram className="w-4 h-4 text-accent" />
                    @dhaaruthu
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;
