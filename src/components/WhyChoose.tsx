import { motion } from "framer-motion";

const reasons = [
  { text: "Authentic sourcing", desc: "Directly from artisans & trusted vendors" },
  { text: "Community pricing", desc: "Bulk buying power, passed to you" },
  { text: "Trusted vendors", desc: "Verified sellers across Tamil Nadu & India" },
  { text: "Careful packaging", desc: "Every item packed with love & care" },
  { text: "Cultural connection", desc: "More than products — it's belonging" },
];

const WhyChoose = () => {
  return (
    <section className="py-24 bg-sand">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-body text-sm tracking-[0.3em] uppercase">The Difference</span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mt-4">
            Why Choose YAPATI
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.text}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-5 p-6 border border-border rounded-sm hover:border-gold/50 hover:shadow-gold transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-heading text-xl text-foreground">{reason.text}</h3>
                <p className="font-body text-muted-foreground text-sm mt-1">{reason.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
