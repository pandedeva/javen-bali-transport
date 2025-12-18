import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import VehicleSection from "./components/VehicleSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <VehicleSection />
      <AboutSection />
      <Footer />
    </main>
  );
}
