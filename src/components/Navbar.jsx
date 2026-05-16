"use client";

import Image from "next/image";
import { FaBars, FaPhone } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Infinite Top Text */}
      <div className="w-full bg-[#254b95] overflow-hidden py-2 fixed top-0 left-0 z-[999] font-[caveat]">
        <div className="flex whitespace-nowrap animate-scroll">
          <span className="mx-8 text-white font-bold text-sm md:text-lg">
            Online Orders Will Be Available Soon!
          </span>

          <span className="mx-8 text-white font-bold text-sm md:text-lg">
            Online Orders Will Be Available Soon!
          </span>

          <span className="mx-8 text-white font-bold text-sm md:text-lg">
            Online Orders Will Be Available Soon!
          </span>

          <span className="mx-8 text-white font-bold text-sm md:text-lg">
            Online Orders Will Be Available Soon!
          </span>

          <span className="mx-8 text-white font-bold text-sm md:text-lg">
            Online Orders Will Be Available Soon!
          </span>

          <span className="mx-8 text-white font-bold text-sm md:text-lg">
            Online Orders Will Be Available Soon!
          </span>
        </div>
      </div>

      {/* Navbar */}
      <nav className="w-full bg-[#fcf6e2] border-b border-gray-200 fixed top-9 left-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 md:px-10 py-4">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/snach-logo.jpg"
              alt="logo"
              width={50}
              height={50}
              className="rounded-full"
            />

            <h1 className="text-2xl font-extrabold tracking-wide text-[#254b95]">
              SNACH
            </h1>
          </div>

          {/* Desktop Menu */}
          <ul
            className="hidden md:flex gap-10 text-sm font-bold font-[caveat]"
          >
            <a href="#home">
              <li className="hover:text-[#1d3c79] duration-300 cursor-pointer">
                HOME
              </li>
            </a>

            <a href="#menu">
              <li className="hover:text-[#1d3c79] duration-300 cursor-pointer">
                MENU
              </li>
            </a>

            <a href="#location">
              <li className="hover:text-[#1d3c79] duration-300 cursor-pointer">
                LOCATION
              </li>
            </a>

            <a href="#contact">
              <li className="hover:text-[#1d3c79] duration-300 cursor-pointer">
                CONTACT
              </li>
            </a>
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <a href="https://wa.me/923270111122"
              target="_blank"
              rel="noopener noreferrer">
                <p className="lg:block font-bold text-[#254b95] font-[math]">
                  +92 327-0111122
                </p>
            </a>
        
            <button className="hidden lg:block bg-[#254b95] hover:bg-[#1d3c79] duration-300 text-white p-3 rounded-full shadow-lg">
              <FaPhone size={18} />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-2xl text-[#254b95]"
            >
              <FaBars />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-[#fcf6e2] border-t border-gray-200 px-6 py-5">
            <ul
              className="flex flex-col gap-5 font-semibold font-[caveat]"
            >
              <a href="#home">
                <li>HOME</li>
              </a>

              <a href="#menu">
                <li>MENU</li>
              </a>

              <a href="#location">
                <li>LOCATION</li>
              </a>

              <a href="#contact">
                <li>CONTACT</li>
              </a>
            </ul>
          </div>
        )}
      </nav>

      {/* Animation */}
      <style jsx>{`
        .animate-scroll {
          width: max-content;
          animation: scroll 15s linear infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </>
  );
}