import { useState } from "react";

interface Price {
  daily: number;
  weekly?: number;
  monthly?: number;
}

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  price?: Price;
  terms: string[];
}

const BookingModal = ({
  open,
  onClose,
  title,
  price,
  terms,
}: BookingModalProps) => {
  if (!open) return null;

  const [days, setDays] = useState<string>("1");
  const [date, setDate] = useState("");

  const numericDays = Number(days) || 0;

  const calculateTotalPrice = () => {
    if (!price || numericDays <= 0) return 0;

    let remainingDays = numericDays || 0;
    let total = 0;

    if (price.monthly && remainingDays >= 30) {
      const months = Math.floor(remainingDays / 30);
      total += months * price.monthly;
      remainingDays %= 30;
    }

    if (price.weekly && remainingDays >= 7) {
      const weeks = Math.floor(remainingDays / 7);
      total += weeks * price.weekly;
      remainingDays %= 7;
    }

    if (price.daily && remainingDays >= 0) {
      total += remainingDays * price.daily;
    }

    return total;
  };

  const totalPrice = calculateTotalPrice();

  const handleWhatsapp = () => {
    if (!numericDays || !date) {
      alert("Please fill in all fields.");
      return;
    }

    const message = `
    Halo, Javen Bali Transport!, Saya mau sewa / booking ${title}
    Harga: Rp ${price?.toLocaleString()} / hari
    Jumlah / Lama sewa: ${days}
    Tanggal sewa: ${date}`;

    const phoneNumber = "6282340001875";
    const urlWhatsapp = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(urlWhatsapp, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-1 right-2 text-gray-500 hover:text-black cursor-pointer"
        >
          <span className="text-3xl">&times;</span>
        </button>

        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-1">
          Rp {price?.daily.toLocaleString()} / Day
        </p>
        <p className="mb-4 text-gta-dark font-semibold">
          Total: Rp {totalPrice.toLocaleString()}
        </p>

        {/* FORM */}
        <div className="space-y-3">
          <div>
            <label className="text-sm font-medium">Jumlah hari sewa</label>
            <input
              type="number"
              min={1}
              value={days}
              inputMode="numeric"
              onChange={(e) => setDays(e.target.value)}
              className="w-full mt-1 border rounded-lg px-3 py-2"
              placeholder="Contoh: 3"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Tanggal sewa</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full mt-1 border rounded-lg px-3 py-2"
            />
          </div>
        </div>

        {/* TERMS */}
        <ul className="mt-4 text-sm text-gray-600 list-disc list-inside space-y-1">
          {terms.map((term, i) => (
            <li key={i}>{term}</li>
          ))}
        </ul>

        <button
          onClick={handleWhatsapp}
          className="w-full py-2 rounded-full bg-linear-to-r from-gta-pink to-gta-purple text-white font-semibold hover:opacity-90 transition cursor-pointer mt-4"
        >
          Lanjut Booking
        </button>
      </div>
    </div>
  );
};

export default BookingModal;
