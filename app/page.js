import HeroSection from "./Sections/HeroSection";
import Navbar from "./components/Navbar";
import WhyChoose from "./Sections/WhyChoose";
import GeoAISection from "./Sections/GeoAISection";
import Footer from "./components/Footer";
import CTABanner from "./components/CTABanner";

export default function Home() {
  return (
    <section>
      <Navbar />
      <HeroSection />
      <WhyChoose />
      <GeoAISection />
      <CTABanner />
      <Footer />
    </section>
  );
}
