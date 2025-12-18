"use client";

import { useState } from "react";
import { bikes, bikeTerms, cars, carTerms } from "../lib/data";
import BookingModal from "./BookingModal";
import VehicleCarousel from "./VehicleCarousel";

const VehicleSection = () => {
  const [selected, setSelected] = useState<any>(null);

  return (
    <>
      <div className="pt-14 container mx-auto px-4 pb-20" id="vehicles">
        <h2 className="text-3xl font-bold text-center">Our Vehicles</h2>
        <p className="text-center text-muted-foreground mt-2">
          A selection of cars and bikes ready for your journey.
        </p>

        {/* mobil */}
        <VehicleCarousel
          title="Cars"
          data={cars}
          onBook={(car) => setSelected({ ...car, type: "car" })}
          sectionId="cars"
        />

        {/* motor */}
        <VehicleCarousel
          title="Bikes"
          data={bikes}
          onBook={(bike) => setSelected({ ...bike, type: "bike" })}
          sectionId="bikes"
        />
      </div>

      <BookingModal
        open={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.name}
        price={selected?.price?.daily}
        terms={selected?.type === "car" ? carTerms : bikeTerms}
      />
    </>
  );
};

export default VehicleSection;
