import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#254b95] text-white w-full">
      
      {/* Top Section */}
      <div className="w-full px-6 sm:px-10 lg:px-20 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div>
          <h1 className="text-4xl font-extrabold mb-5">
            SNACH
          </h1>

          <p className="text-gray-200 leading-7">
            Fresh burgers, crispy fries, and unforgettable taste.
            Enjoy premium fast food delivered to your doorstep.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            
            <div className="bg-white text-[#254b95] p-3 rounded-full hover:scale-110 duration-300 cursor-pointer">
              <FaFacebookF />
            </div>

            <div className="bg-white text-[#254b95] p-3 rounded-full hover:scale-110 duration-300 cursor-pointer">
              <FaInstagram />
            </div>

            <div className="bg-white text-[#254b95] p-3 rounded-full hover:scale-110 duration-300 cursor-pointer">
              <FaTwitter />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            Quick Links
          </h2>

          <ul className="space-y-4 text-gray-200">
            <li className="hover:text-white cursor-pointer duration-300">
              Home
            </li>

            <li className="hover:text-white cursor-pointer duration-300">
              Menu
            </li>

            <li className="hover:text-white cursor-pointer duration-300">
              About
            </li>

            <li className="hover:text-white cursor-pointer duration-300">
              Contact
            </li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            Opening Hours
          </h2>

          <div className="space-y-3 text-gray-200">
            <p>Monday - Friday: 9AM - 11PM</p>
            <p>Saturday: 10AM - 12AM</p>
            <p>Sunday: Closed</p>
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
              <p>New York, USA</p>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt />
              <p>+1 650-547-9864</p>
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