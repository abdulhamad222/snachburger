"use client";

import Image from "next/image";
import { FaShoppingBasket, FaBars } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-[#fcf6e2] border-b border-gray-200 fixed top-0 z-50">
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
        <ul className="hidden md:flex gap-10 text-sm font-bold" style={{ fontFamily: "cursive" }}>
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

          <p className="hidden lg:block font-bold text-[#254b95]">
            +92 327-0111122
          </p>

          <button className="bg-[#254b95] hover:bg-[#1d3c79] duration-300 text-white p-3 rounded-full shadow-lg">
            <FaShoppingBasket size={18} />
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
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-5">
          <ul className="flex flex-col gap-5 font-semibold">

            <a href="#home">
              <li>HOME</li>
            </a>

            <a href="#menu">
              <li>MENU</li>
            </a>

            <a href="#promo">
              <li>OFFERS</li>
            </a>

            <a href="#contact">
              <li>CONTACT</li>
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
}