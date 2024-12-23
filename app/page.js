import DomainsSection from "./components/DomainSection";
import GeoAISection from "./components/GeoAISection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import WhyChoose from "./components/WhyChoose";

export default function Home() {
  return (
    <section>
      <Navbar />
      <HeroSection />
      <WhyChoose />
      <GeoAISection />
      <DomainsSection />
      {/* Rest of the page content */}
    </section>
  );
}
