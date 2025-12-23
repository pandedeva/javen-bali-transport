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
      className="bg-white/70 
    backdrop-blur-xl
    rounded-xl p-2
    lg:w-72
    shadow-[0_20px_40px_-15px_rgba(107,63,160,0.45)]
    transition-all duration-300
    hover:-translate-y-1
    hover:shadow-[0_30px_60px_-15px_rgba(255,122,199,0.55)]"
    >
      {/* IMAGE */}
      <div className="relative w-full h-48">
        <Image src={img} alt={title} fill className="object-cover" />
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <h3 className="text-lg font-bold tracking-wide">{title}</h3>
        <div className="flex items-center gap-1 text-sm text-gray-900">
          <span>
            <KeySquare width={20} />
          </span>
          {type}
        </div>
        <p className="mt-4 font-bold"> Price per day:</p>
        <p className="text-[#5b3b8c] font-extrabold text-xl">
          Rp {price.daily.toLocaleString()}
          <span className="text-sm font-normal text-gray-500"> / hari</span>
        </p>
        {price.weekly ? (
          <>
            <p className="mt-4 font-bold"> Price per week:</p>
            <p className="text-xl font-bold text-blue-600">
              Rp {price.weekly?.toLocaleString()}
              <span className="text-sm font-normal text-gray-500">
                {" "}
                / minggu
              </span>
            </p>
          </>
        ) : null}
        {price.monthly ? (
          <>
            <p className="mt-4 font-bold"> Price per month:</p>
            <p className="text-xl font-bold text-blue-600">
              Rp {price.monthly?.toLocaleString()}
              <span className="text-sm font-normal text-gray-500"> / hari</span>
            </p>
          </>
        ) : null}
        <button
          onClick={onBook}
          className="mt-4 w-full bg-[#5b3b8c] hover:bg-[#4a2f75] text-white py-2 rounded-lg font-semibold transition cursor-pointer"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default VehicleCard;
