import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-linear-to-t from-black to-[#2a1c3f] text-white">
      <div className="container mx-auto px-4 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* BRAND */}
          <div>
            <div>
              <Link href={"/"}>
                <Image
                  src={"/logofix-removebg.png"}
                  alt="logo"
                  className="cursor-pointer h-auto w-28 lg:w-32"
                  width={500}
                  height={500}
                />
              </Link>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Javen Bali Transport
            </h3>
            <p className="text-sm leading-relaxed">
              Trusted car & bike rental service in Bali. Affordable prices,
              well-maintained vehicles, and easy booking via WhatsApp.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#vehicles" className="hover:text-white transition">
                  Our Vehicles
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/6282340001875"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>📍 Denpasar, Bali</li>
              <li>
                📞{" "}
                <a
                  href="https://wa.me/6282340001875"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  +62 823-4000-1875
                </a>
              </li>
              <li>⏰ Open Daily, 24 Hours</li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Javen Bali Transport. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
