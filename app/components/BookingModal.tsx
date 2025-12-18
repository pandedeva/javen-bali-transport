import { useState } from "react";

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  price?: number;
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

  const [days, setDays] = useState("");
  const [date, setDate] = useState("");

  const handleWhatsapp = () => {
    if (!days || !date) {
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
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">
          Rp {price?.toLocaleString()} / hari
        </p>

        {/* FORM */}
        <div className="space-y-3">
          <div>
            <label className="text-sm font-medium">Jumlah hari sewa</label>
            <input
              type="number"
              min={1}
              value={days}
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
          className="mt-5 w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Lanjut Booking
        </button>
      </div>
    </div>
  );
};

export default BookingModal;
