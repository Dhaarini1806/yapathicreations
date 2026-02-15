import { motion } from "framer-motion";

const GlobalCommunity = () => {
  const countries = [
    { name: "India", flag: "🇮🇳" },
    { name: "Sri Lanka", flag: "🇱🇰" },
    { name: "Canada", flag: "🇨🇦" },
    { name: "Australia", flag: "🇦🇺" },
    { name: "UK", flag: "🇬🇧" },
  ];

  return (
    <section id="community" className="py-24 bg-gradient-maroon relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, hsl(38 38% 60%) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold-light font-body text-sm tracking-[0.3em] uppercase">Worldwide</span>
          <h2 className="font-heading text-4xl md:text-5xl text-primary-foreground mt-4 mb-6">
            Global Community
          </h2>
          <p className="font-body text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            From India to homes across Sri Lanka, Canada, Australia & the UK — culture travels through people.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {countries.map((country, i) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center gap-3 p-8 border border-gold/20 rounded-sm bg-maroon-dark/30 min-w-[160px]"
            >
              <span className="text-5xl">{country.flag}</span>
              <span className="font-body text-gold-light font-medium tracking-wider text-sm uppercase">
                {country.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalCommunity;
