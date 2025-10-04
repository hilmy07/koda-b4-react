import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import textLogo from "../assets/textLogo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1d1d1d]/20 text-white px-6 py-4 backdrop-filter backdrop-saturate-150 backdrop-brightness-90">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left: Logo + Menu */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="logo"
              className="filter invert brightness-10 w-8 h-8"
            />
            <img
              src={textLogo}
              alt="logo"
              className="filter invert brightness-10 h-6 hidden sm:block"
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden sm:flex gap-6 text-sm">
            <li className="cursor-pointer relative pb-1 hover:border-b-2 border-orange-500">
              Home
            </li>
            <li className="cursor-pointer hover:border-b-2 border-transparent hover:border-orange-500">
              Product
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="hidden sm:flex items-center gap-6">
          <FaSearch className="cursor-pointer" />
          <FaShoppingCart className="cursor-pointer" />
          <button className="px-4 py-2 border border-white rounded text-sm hover:bg-white hover:text-[#1d1d1d] transition">
            Sign In
          </button>
          <button className="px-4 py-2 bg-orange-500 text-white rounded text-sm hover:bg-orange-600 transition">
            Sign Up
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="sm:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden mt-4">
          {/* Menu kiri (Home, Product) */}
          <ul className="flex flex-col gap-4 text-base mb-4">
            <li className="cursor-pointer border-b-2 border-orange-500 pb-1">
              Home
            </li>
            <li className="cursor-pointer border-b border-gray-600 pb-1">
              Product
            </li>
          </ul>

          {/* Menu kanan di mobile (icon + buttons) */}
          <div className="flex items-center gap-6 text-lg mb-4">
            <FaSearch className="cursor-pointer" />
            <FaShoppingCart className="cursor-pointer" />
          </div>
          <div className="flex flex-col gap-3">
            <button className="w-full px-4 py-2 border border-white rounded text-sm hover:bg-white hover:text-[#1d1d1d] transition">
              Sign In
            </button>
            <button className="w-full px-4 py-2 bg-orange-500 text-white rounded text-sm hover:bg-orange-600 transition">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
