import { KeySquare } from "lucide-react";
import Image from "next/image";

interface VehicleCardProps {
  title: string;
  price: {
    daily: number;
    weekly?: number;
    monthly?: number;
  };
  type: string;
  img: string;
  onBook: () => void;
}

const VehicleCard = ({ title, price, img, onBook, type }: VehicleCardProps) => {
  return (
    <div
      className="bg-white/80 backface-blur-lg backdrop-blur-lg
  border border-white/30
  rounded-2xl
  shadow-[0_10px_30px_rgba(255,122,199,0.3)]
  hover:shadow-[0_15px_40px_rgba(255,122,199,0.45)]
  transition-all duration-300 p-2 cursor-pointer"
    >
      {/* IMAGE */}
      <div className="relative w-full h-48">
        <Image src={img} alt={title} fill className="object-cover" />
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gta-purple">{title}</h3>
        <div className="flex items-center gap-1 text-xs md:text-sm text-gray-900">
          <span>
            <KeySquare width={20} />
          </span>
          {type}
        </div>
        <p className="mt-4 font-bold"> Price per day:</p>
        <p className="text-xl font-extrabold text-gta-dark">
          Rp {price.daily.toLocaleString()}
          <span className="text-sm font-normal text-gray-500"> / Day</span>
        </p>
        {price.weekly ? (
          <>
            <p className="mt-4 font-bold"> Price per week:</p>
            <p className="text-xl font-extrabold text-gta-dark">
              Rp {price.weekly?.toLocaleString()}
              <span className="text-sm font-normal text-gray-500"> / Week</span>
            </p>
          </>
        ) : null}
        {price.monthly ? (
          <>
            <p className="mt-4 font-bold"> Price per month:</p>
            <p className="text-xl font-extrabold text-gta-dark">
              Rp {price.monthly?.toLocaleString()}
              <span className="text-sm font-normal text-gray-500">
                {" "}
                / Month
              </span>
            </p>
          </>
        ) : null}
        <button
          onClick={onBook}
          className="w-full py-2 rounded-full bg-linear-to-r from-gta-pink to-gta-purple text-white font-semibold hover:opacity-90 transition cursor-pointer mt-4"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default VehicleCard;
