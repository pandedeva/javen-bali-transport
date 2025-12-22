const AboutSection = () => {
  return (
    <section className="pb-20 pt-10" id="about">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
            ABOUT US
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Javen Bali Transport is your trusted partner for car and bike
            rentals in Bali.
          </p>
        </div>

        {/* DESCRIPTION */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-12">
          <h4 className="text-2xl font-semibold mb-4">Javen Bali Transport</h4>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            Javen Bali Transport is a trusted car and bike rental service based
            in Bali, providing reliable, affordable, and well-maintained
            vehicles for travelers and locals. We understand that transportation
            is a key part of your journey. That’s why we focus on making the
            rental process simple, fast, and transparent — no unnecessary
            hassle, no hidden costs.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* WHY CHOOSE US */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h4 className="text-xl font-semibold mb-4">Why Choose Us</h4>
            <ul className="space-y-3 text-gray-700 list-disc list-inside text-sm md:text-base">
              <li>Well-maintained and clean vehicles</li>
              <li>Transparent pricing with no hidden fees</li>
              <li>Fast booking via WhatsApp</li>
              <li>Daily, weekly, and monthly rental options</li>
              <li>Delivery & pickup service across Bali</li>
            </ul>
          </div>

          {/* OUR SERVICES */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h4 className="text-xl font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3 text-gray-700 list-disc list-inside text-sm md:text-base">
              <li>Car Rental (Automatic & Manual)</li>
              <li>Bike Rental (Daily, Weekly, Monthly)</li>
              <li>Long-term rental for expats & workers</li>
              <li>Vehicle delivery and pickup service</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
