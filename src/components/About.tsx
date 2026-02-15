import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 bg-sand">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-body text-sm tracking-[0.3em] uppercase">Our Story</span>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mt-4 mb-8">
              A Tradition Carried Forward
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-muted-foreground font-body text-lg leading-relaxed"
          >
            <p>
              YAPATI began as a simple initiative led by a mother's vision — to help families living away from home stay connected to their roots.
            </p>
            <p>
              What started as small curated collections shared within communities has grown into a trusted cultural bridge. Every product we source carries a story — from the weaving towns of Tamil Nadu to carefully selected vendors across India.
            </p>
            <div className="py-6">
              <div className="w-24 h-px bg-gradient-gold mx-auto" />
            </div>
            <p className="font-heading text-2xl text-foreground italic">
              We do not simply sell products.<br />
              We deliver familiarity, celebration, and belonging.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
