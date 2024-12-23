import HeroSection from "./Sections/HeroSection";
import Navbar from "./components/Navbar";
import WhyChoose from "./Sections/WhyChoose";
import GeoAISection from "./Sections/GeoAISection";
import ResearchTrainingSection from "./components/ResearchTrainingSection";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <section>
      <Navbar />
      <HeroSection />
      <WhyChoose />
      <GeoAISection />
      <ResearchTrainingSection />
      <CTABanner />
      <Footer />
    </section>
  );
}
