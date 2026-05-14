import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#254b95] text-white w-full" style={{ fontFamily: "cursive" }}>
      
      {/* Top Section */}
      <div className="w-full px-6 sm:px-10 lg:px-20 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/snach-logo.jpg"
              alt="logo"
              width={50}
              height={50}
              className="rounded-full"
            />

            <h1 className="text-4xl font-extrabold mb-5">
              SNACH
            </h1>
          </div>

          <p className="text-gray-200 leading-7">
            WARNING<br />
            HIGHLY SNACHABLE !<br />
            BURGER & BEATS
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            
            <a
              href="https://www.instagram.com/snachburger"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#254b95] p-3 rounded-full hover:scale-110 duration-300 cursor-pointer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://web.facebook.com/profile.php?id=61588672828386&_rdc=1&_rdr#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#254b95] p-3 rounded-full hover:scale-110 duration-300 cursor-pointer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.tiktok.com/@snach.burger"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#254b95] p-3 rounded-full hover:scale-110 duration-300 cursor-pointer"
            >
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            Quick Links
          </h2>

          <ul className="space-y-4 text-gray-200">
            <li className="cursor-pointer">
              <a href="#home">HOME</a>
            </li>

            <li className="cursor-pointer">
              <a href="#menu">MENU</a> 
            </li>

            <li className="cursor-pointer">
              <a href="#location">LOCATION</a>
            </li>

            <li className="cursor-pointer">
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            Opening Hours
          </h2>

          <div className="space-y-3 text-gray-200">
            <p>Monday - Sunday: 4PM - 2AM</p>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            Contact Us
          </h2>

          <div className="space-y-5 text-gray-200">
            
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt />
              <p>Gateway Towers, Faisalabad, Pakistan</p>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt />
              <p>+92 327-0111122</p>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope />
              <p>snachburger@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/20 py-5 text-center text-gray-200">
        <p>
          © 2026 SNACH Burger. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}