import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Collections from "@/components/Collections";
import GlobalCommunity from "@/components/GlobalCommunity";
import WhyChoose from "@/components/WhyChoose";
import Founders from "@/components/Founders";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Collections />
      <GlobalCommunity />
      <WhyChoose />
      <Founders />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
