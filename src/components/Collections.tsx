import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import textiles from "@/assets/textiles.jpg";
import jewellery from "@/assets/jewellery.jpg";
import festival from "@/assets/festival.jpg";
import culturalFinds from "@/assets/cultural-finds.jpg";

const collections = [
  { title: "Heritage Textiles", image: textiles, desc: "Silk sarees, cotton weaves & traditional fabrics from Tamil Nadu", slug: "textiles" },
  { title: "Gold-Look Jewellery", image: jewellery, desc: "Temple jewellery, jhumkas & bangles at community prices", slug: "jewellery" },
  { title: "Festival Essentials", image: festival, desc: "Pooja items, diyas & everything for celebrations", slug: "festival" },
  { title: "Everyday Cultural Finds", image: culturalFinds, desc: "Home essentials, spices & cultural accessories", slug: "cultural-finds" },
];

const Collections = () => {
  return (
    <section id="collections" className="py-24 bg-sand">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-body text-sm tracking-[0.3em] uppercase">Curated For You</span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mt-4">
            Our Collections
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {collections.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={`/collections/${item.slug}`}
                className="group relative overflow-hidden rounded-sm cursor-pointer block"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/90 via-maroon/20 to-transparent flex flex-col justify-end p-8">
                  <h3 className="font-heading text-2xl text-primary-foreground mb-2">{item.title}</h3>
                  <p className="font-body text-primary-foreground/70 text-sm">{item.desc}</p>
                  <span className="font-body text-gold-light text-xs mt-3 uppercase tracking-wider group-hover:translate-x-2 transition-transform duration-300">
                    Explore →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 border border-gold/30 rounded-sm">
            <span className="text-accent font-body text-sm">🎁 Community Special Requests</span>
            <span className="text-muted-foreground font-body text-xs">— Tell us what you need</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Collections;
