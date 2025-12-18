import Image from "next/image";
import Navbar from "./Navbar";
import { ChevronsDown } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute top-0 left-0 right-0 z-10 py-8 px-4">
        <Navbar />
      </div>
      <div className="absolute inset-0 bg-black/10 z-1" />
      <div className="flex items-center justify-center w-full">
        <Image
          src={"/bgnew4.png"}
          fill
          alt="background"
          className="object-cover object-[center_70%]"
        />
      </div>

      <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-3">
          Javen Bali Transport
        </h1>

        <p className="text-lg md:text-2xl opacity-90">
          Reliable Car & Bike Rentals for Your Bali Trip
        </p>

        <p className="mt-2 text-sm md:text-base opacity-80">
          Daily • Weekly • Monthly Rentals
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 mt-6 text-xs sm:text-sm">
          <span className="bg-black/70 px-5 py-2 rounded-full font-semibold tracking-wide">
            🚗 Well Maintained Vehicles
          </span>
          <span className="bg-black/70 px-5 py-2 rounded-full font-semibold tracking-wide">
            🛵 Cars & Bikes Available
          </span>
          <span className="bg-black/70 px-5 py-2 rounded-full font-semibold tracking-wide">
            📍 Based in Bali
          </span>
        </div>
      </div>

      <a
        href={"#vehicles"}
        className="absolute lg:bottom-8 bottom-2 left-0 right-0 z-10"
      >
        <div className="absolute text-xl lg:bottom-8 bottom-2 left-1/2 -translate-x-1/2 text-white p-2 bg-black/80 rounded-full opacity-70 animate-bounce">
          <ChevronsDown />
        </div>
        <span className="absolute bottom-0 lg:bottom-2 left-1/2 -translate-x-1/2 text-black text-xs opacity-80">
          Scroll to see vehicles
        </span>
      </a>
    </div>
  );
};

export default HeroSection;
