import { motion } from "framer-motion";
import logoImg from "@/assets/yapati-logo.png";

const steps = [
  { num: "01", title: "Join our WhatsApp community", icon: "💬" },
  { num: "02", title: "Weekly curated collections shared", icon: "✨" },
  { num: "03", title: "Members select together", icon: "🤝" },
  { num: "04", title: "Source directly from vendors", icon: "🏪" },
  { num: "05", title: "Packed with care", icon: "📦" },
  { num: "06", title: "Delivered worldwide", icon: "🌍" },
];

// Positions for 6 items around a circle (clock positions: 12, 2, 4, 6, 8, 10)
const positions = [
  { top: "2%", left: "50%" },   // top center
  { top: "20%", left: "88%" },  // top right
  { top: "68%", left: "88%" },  // bottom right
  { top: "88%", left: "50%" },  // bottom center
  { top: "68%", left: "12%" },  // bottom left
  { top: "20%", left: "12%" },  // top left
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-maroon">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold-light font-body text-sm tracking-[0.3em] uppercase">The Process</span>
          <h2 className="font-heading text-4xl md:text-5xl text-primary-foreground mt-4">
            How It Works
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Desktop: circular arrangement */}
          <div className="hidden lg:block relative" style={{ height: "580px" }}>
            {/* Center logo */}
            <div className="absolute z-10" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
              <div className="w-28 h-28 rounded-full bg-maroon-dark border-2 border-gold/40 flex items-center justify-center shadow-lg">
                <img src={logoImg} alt="YAPATI" className="w-16 h-16 rounded-full object-cover" />
              </div>
            </div>

            {/* Connecting ring */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 580">
              <ellipse cx="300" cy="290" rx="210" ry="210" fill="none" stroke="hsl(38 38% 60% / 0.18)" strokeWidth="1.5" strokeDasharray="8 6" />
              {/* Arrow indicators between steps */}
              {[0, 1, 2, 3, 4, 5].map((i) => {
                const a1 = (i * 60 - 90) * (Math.PI / 180);
                const a2 = ((i + 0.5) * 60 - 90) * (Math.PI / 180);
                const mx = 300 + 210 * Math.cos(a2);
                const my = 290 + 210 * Math.sin(a2);
                return (
                  <circle key={i} cx={mx} cy={my} r="3" fill="hsl(38 38% 60% / 0.3)" />
                );
              })}
            </svg>

            {/* Step cards */}
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="absolute w-40"
                style={{
                  top: positions[i].top,
                  left: positions[i].left,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="p-4 rounded-lg border border-gold/30 bg-maroon-dark/70 backdrop-blur-sm text-center hover:border-gold/60 transition-all duration-300 hover:scale-105 shadow-md">
                  <span className="text-3xl block mb-2">{step.icon}</span>
                  <span className="text-gold font-heading text-xs tracking-wider font-bold block">{step.num}</span>
                  <h3 className="font-body text-primary-foreground text-xs mt-1 leading-snug">
                    {step.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile: clean vertical timeline */}
          <div className="lg:hidden relative pl-8">
            {/* Vertical line */}
            <div className="absolute left-[18px] top-0 bottom-0 w-px bg-gold/20" />

            <div className="space-y-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative flex items-start gap-4"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-8 top-3 w-[14px] h-[14px] rounded-full border-2 border-gold/50 bg-maroon-dark flex-shrink-0" />

                  <div className="flex-1 p-4 border border-gold/20 rounded-sm bg-maroon-dark/40 flex items-center gap-3">
                    <span className="text-2xl flex-shrink-0">{step.icon}</span>
                    <div>
                      <span className="text-gold font-heading text-xs tracking-wider font-bold">{step.num}</span>
                      <h3 className="font-body text-primary-foreground text-sm mt-0.5">{step.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Video shopping line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-14"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 border border-gold/30 rounded-sm bg-maroon-dark/40">
            <span className="text-2xl">🎥</span>
            <p className="font-body text-primary-foreground/80 text-sm">
              We also make <span className="text-gold-light font-semibold">video shopping</span> possible to give utmost customer-centric visions
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
