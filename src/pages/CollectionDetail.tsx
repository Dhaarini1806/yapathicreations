import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const collectionData: Record<string, { title: string; description: string; items: { name: string; desc: string; emoji: string }[] }> = {
  textiles: {
    title: "Heritage Textiles",
    description: "Authentic silk sarees, cotton weaves & traditional fabrics sourced from the weaving towns of Tamil Nadu.",
    items: [
      { name: "Kanchipuram Silk Saree", desc: "Pure mulberry silk with gold zari work", emoji: "🥻" },
      { name: "Elampillai Cotton Saree", desc: "Handwoven cotton from Elampillai, Salem", emoji: "🧵" },
      { name: "Pattu Pavadai", desc: "Traditional silk skirt & blouse for girls", emoji: "👗" },
      { name: "Chettinad Cotton", desc: "Bold geometric patterns, lightweight weaves", emoji: "🪡" },
      { name: "Thirubuvanam Silk", desc: "Temple town silk with intricate borders", emoji: "✨" },
      { name: "Madurai Sungudi", desc: "Tie-dye sarees in vibrant colors", emoji: "🎨" },
      { name: "Coimbatore Wet Grinder Saree", desc: "Soft silk sarees from Coimbatore looms", emoji: "🌸" },
      { name: "Salem Silk", desc: "Rich pure silk with traditional motifs", emoji: "💎" },
    ],
  },
  jewellery: {
    title: "Gold-Look Jewellery",
    description: "Temple jewellery, jhumkas & bangles crafted to look like real gold at community prices.",
    items: [
      { name: "Temple Necklace Set", desc: "Lakshmi coin design with matching earrings", emoji: "📿" },
      { name: "Jhumka Earrings", desc: "Classic bell-shaped south Indian jhumkas", emoji: "✨" },
      { name: "Bangles Set", desc: "Gold-plated bangles in traditional designs", emoji: "💫" },
      { name: "Vanki (Armlet)", desc: "Traditional arm ornament for weddings", emoji: "💍" },
      { name: "Maang Tikka", desc: "Forehead ornament with kundan work", emoji: "👑" },
      { name: "Oddiyanam (Waist Belt)", desc: "Temple-style hip chain", emoji: "🌟" },
      { name: "Nose Ring Collection", desc: "Nath & nose studs in various designs", emoji: "💎" },
      { name: "Anklets (Payal)", desc: "Silver-look anklets with ghungroo", emoji: "🔔" },
    ],
  },
  festival: {
    title: "Festival Essentials",
    description: "Everything you need for pooja, celebrations & traditional festivals — sourced with authenticity.",
    items: [
      { name: "Brass Pooja Set", desc: "Complete set with bell, diya & kumkum box", emoji: "🪔" },
      { name: "Agarbathi & Camphor", desc: "Premium incense sticks & kapur", emoji: "🕯️" },
      { name: "Kolam Powder", desc: "Rangoli powder in vibrant colors", emoji: "🎨" },
      { name: "Pooja Flowers (Artificial)", desc: "Long-lasting flower garlands", emoji: "💐" },
      { name: "Sandalwood & Turmeric", desc: "Pure chandan & haldi for rituals", emoji: "🌿" },
      { name: "Brass Lamps", desc: "Traditional kuthuvilakku & hanging lamps", emoji: "✨" },
      { name: "Manjal & Kumkum Set", desc: "Turmeric & vermillion gift packs", emoji: "🎁" },
      { name: "Festival Decoration Kit", desc: "Mango leaves, torans & door hangings", emoji: "🏠" },
    ],
  },
  "cultural-finds": {
    title: "Everyday Cultural Finds",
    description: "Home essentials, spices & cultural accessories that bring India to your doorstep.",
    items: [
      { name: "Filter Coffee Set", desc: "Brass/steel filter with Kumbakonam coffee", emoji: "☕" },
      { name: "Spice Box Collection", desc: "Authentic curry powders & masalas", emoji: "🌶️" },
      { name: "Stone Grinder", desc: "Traditional sil batta for fresh chutneys", emoji: "🪨" },
      { name: "Palm Leaf Baskets", desc: "Handwoven storage & serving baskets", emoji: "🧺" },
      { name: "Brass Kitchen Vessels", desc: "Traditional uruli, kodam & more", emoji: "🫕" },
      { name: "Kolam Stencils", desc: "Reusable rangoli design stencils", emoji: "🔲" },
      { name: "Vetiver Products", desc: "Khus curtains, fans & fragrance items", emoji: "🌾" },
      { name: "Snacks & Sweets", desc: "Murukku, mixture & traditional sweets", emoji: "🍬" },
    ],
  },
};

const CollectionDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const collection = slug ? collectionData[slug] : null;

  if (!collection) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 text-center">
          <h1 className="font-heading text-3xl text-foreground">Collection not found</h1>
          <Link to="/#collections" className="text-accent font-body mt-4 inline-block hover:underline">← Back to Collections</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 pb-24">
        <div className="container mx-auto px-6">
          <Link
            to="/#collections"
            className="inline-flex items-center gap-2 text-accent hover:text-foreground transition-colors font-body text-sm mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Collections
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-4">{collection.title}</h1>
            <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">{collection.description}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {collection.items.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-6 border border-border rounded-sm bg-card hover:border-gold/50 hover:shadow-gold transition-all duration-300 group"
              >
                <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform duration-300">{item.emoji}</span>
                <h3 className="font-heading text-lg text-foreground mb-2">{item.name}</h3>
                <p className="font-body text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center mt-16"
          >
            <a
              href="https://chat.whatsapp.com/DDDYlXIcg6uARjOXaeOFkj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-gold text-foreground font-body font-semibold uppercase tracking-wider text-sm rounded-sm hover:shadow-gold transition-all duration-300 hover:scale-105"
            >
              Request from this Collection
            </a>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CollectionDetail;
