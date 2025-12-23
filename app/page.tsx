import Image from "next/image";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import VehicleSection from "./components/VehicleSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="relative">
        <div
          className="absolute inset-0 -z-10 bg-repeat bg-center object-cover"
          style={{
            backgroundImage: "url('/bgnew8.png')",
            backgroundSize: "cover",
          }}
        />
        <VehicleSection />
        <AboutSection />
      </div>
      <Footer />
    </main>
  );
}
