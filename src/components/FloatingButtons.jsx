"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/923270111122"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl text-3xl duration-300"
      >
        <FaWhatsapp />
      </a>

      {/* Scroll To Top (only show when scrolled) */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-50 bg-[#254b95] hover:bg-[#1d3c79] text-white p-4 rounded-full shadow-2xl text-2xl duration-300"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}