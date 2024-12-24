import Navbar from "./components/Navbar";
import HeroSection from "./Sections/HeroSection";
import WhyChoose from "./Sections/WhyChoose";
import GeoAISection from "./Sections/GeoAISection";
import ResearchTrainingSection from "./components/ResearchTrainingSection";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <section className="h-screen overflow-y-scroll scroll-smooth scroll-snap-y snap-mandatory">
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
