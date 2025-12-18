import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="text-white">
      <div className="container px-4 mx-auto">
        <div className="justify-between items-center flex">
          {/* logo */}
          <Link href={"/"}>
            <Image
              src={"/logofix-removebg.png"}
              alt="logo"
              className="cursor-pointer h-auto w-24 md:w-36 lg:w-44"
              width={500}
              height={500}
            />
          </Link>

          {/* menu */}
          <div className="flex items-center text-sm font-medium md:space-x-8 space-x-4">
            <a
              href={"#cars"}
              className="relative hover:underline hover:underline-offset-5 transition-all"
            >
              Cars
            </a>
            <a
              href={"#bikes"}
              className="relative hover:underline hover:underline-offset-5 transition-all"
            >
              Bikes
            </a>

            <a
              href={"#about"}
              className="relative hover:underline hover:underline-offset-5 transition-all"
            >
              About Us
            </a>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <a
              href="#vehicles"
              className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-white/90 transition"
            >
              See Our Vehicles
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
