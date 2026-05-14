import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";

export default function LocationSection() {
  return (
    <section
        id="location"
        className="py-24"
        style={{ fontFamily: "cursive" }}
    >
      {/* Heading */}
      <div className="text-center mb-20">
        <h3 className="text-[#254b95] uppercase tracking-[5px] text-sm font-bold mb-4">
          Visit Us
        </h3>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-black text-[#254b95] mb-6"
        >
          Our Location
        </h1>

        <p className="text-[#254b95] max-w-2xl mx-auto text-base sm:text-lg leading-8">
          Visit SNACH Burger And Enjoy Premium Burgers,
          Wraps, Fries And Drinks With Car-Dine-In, Takeaway
          And Delivery.
        </p>
      </div>

      {/* Main Layout */}
      <div className="grid lg:grid-cols-2 gap-1 w-full">
        
        {/* Left Side */}
        <div className="bg-[#254b95] text-white p-8 sm:p-12 flex flex-col justify-center min-h-[500px]">
          
          <h2
            className="text-4xl sm:text-5xl font-black mb-12"
            style={{ fontFamily: "cursive" }}
          >
            SNACH Burger
          </h2>

          {/* Address */}
          <div className="flex items-start gap-5 mb-10">
            <div className="bg-white text-[#254b95] p-4 text-xl">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2">
                Address
              </h3>

              <p className="leading-7 text-white/90">
                Gateway Towers, Faisalabad, Pakistan
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex items-start gap-5 mb-10">
            <div className="bg-white text-[#254b95] p-4 text-xl">
              <FaPhoneAlt />
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2">
                Contact
              </h3>

              <p className="text-white/90">
                +92 327-0111122
              </p>
            </div>
          </div>

          {/* Timing */}
          <div className="flex items-start gap-5 mb-12">
            <div className="bg-white text-[#254b95] p-4 text-xl">
              <FaClock />
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2">
                Opening Hours
              </h3>

              <p className="leading-7 text-white/90">
                Monday - Sunday <br />
                4:00 PM - 2:00 AM
              </p>
            </div>
          </div>

          {/* Button */}
          <a
            href="https://www.google.com/maps/place/Gateway+Towers/@31.4018435,73.1055012,17z/data=!3m1!4b1!4m6!3m5!1s0x392267e1ff9d2507:0xb33d5b01d7a61d84!8m2!3d31.4018435!4d73.1055012!16s%2Fg%2F1hf1lkkl8!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUxMi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            className="inline-block border-2 border-white hover:bg-white hover:text-[#254b95] duration-300 px-8 py-4 font-bold tracking-wide w-fit"
          >
            OPEN IN GOOGLE MAPS
          </a>
        </div>

        {/* Right Side */}
        <div className="min-h-[500px]">
          <iframe
            src="https://www.google.com/maps/place/Gateway+Towers/@31.4018435,73.1055012,17z/data=!3m1!4b1!4m6!3m5!1s0x392267e1ff9d2507:0xb33d5b01d7a61d84!8m2!3d31.4018435!4d73.1055012!16s%2Fg%2F1hf1lkkl8!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUxMi4wIKXMDSoASAFQAw%3D%3D"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full min-h-[500px]"
          ></iframe>
        </div>
      </div>
    </section>
  );
}