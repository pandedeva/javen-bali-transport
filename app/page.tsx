import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import VehicleSection from "./components/VehicleSection";

export default function Home() {
  return (
    <main
      className="bg-linear-to-b from-[#f6c1cc] to-white
"
    >
      <HeroSection />
      <VehicleSection />
      <AboutSection />
      <Footer />
    </main>
  );
}
