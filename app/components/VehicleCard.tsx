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
    <div className="rounded-xl border bg-white shadow-sm hover:shadow-lg transition overflow-hidden">
      {/* IMAGE */}
      <div className="relative w-full h-48 bg-gray-100">
        <Image src={img} alt={title} fill className="object-cover" />
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <h3 className="text-xl font-semibold tracking-wide uppercase text-gray-700">
          {title}
        </h3>
        <div className="flex items-center gap-1 text-sm text-gray-900">
          <span>
            <KeySquare width={20} />
          </span>
          {type}
        </div>
        <p className="mt-4 font-bold"> Price per day:</p>
        <p className="text-xl font-bold text-blue-600">
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
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default VehicleCard;
