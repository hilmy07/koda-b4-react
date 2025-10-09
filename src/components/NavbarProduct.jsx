import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import textLogo from "../assets/textLogo.png";
import { useAuth } from "../components/AuthContext";

function NavbarProduct() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn, logout } = useAuth();

  const handleSignIn = () => {
    navigate("/Login");
  };

  const handleSignUp = () => {
    navigate("/Register");
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black text-white px-6 py-4">
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
            <li
              onClick={() => navigate("/")}
              className={`cursor-pointer relative pb-1 ${
                isActive("/")
                  ? "border-b-2 border-orange-500"
                  : "border-b-2 border-transparent hover:border-orange-500"
              }`}
            >
              Home
            </li>
            <li
              onClick={() => navigate("/product")}
              className={`cursor-pointer pb-1 ${
                isActive("/product")
                  ? "border-b-2 border-orange-500"
                  : "border-b-2 border-transparent hover:border-orange-500"
              }`}
            >
              Product
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="hidden sm:flex items-center gap-6">
          <FaSearch className="cursor-pointer" />
          <FaShoppingCart className="cursor-pointer" />

          {/* ✅ Kondisi Login/Logout */}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="px-4 py-2 border border-white rounded text-sm hover:bg-white hover:text-[#1d1d1d] transition"
            >
              Logout
            </button>
          ) : (
            <>
              <button
                onClick={handleSignIn}
                className="px-4 py-2 border border-white rounded text-sm hover:bg-white hover:text-[#1d1d1d] transition"
              >
                Sign In
              </button>
              <button
                onClick={handleSignUp}
                className="px-4 py-2 bg-orange-500 text-white rounded text-sm hover:bg-orange-600 transition"
              >
                Sign Up
              </button>
            </>
          )}
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
          <ul className="flex flex-col gap-4 text-base mb-4">
            <li
              onClick={() => navigate("/")}
              className={`cursor-pointer pb-1 border-b-2 ${
                isActive("/") ? "border-orange-500" : "border-gray-600"
              }`}
            >
              Home
            </li>
            <li
              onClick={() => navigate("/product")}
              className={`cursor-pointer pb-1 border-b-2 ${
                isActive("/product") ? "border-orange-500" : "border-gray-600"
              }`}
            >
              Product
            </li>
          </ul>

          <div className="flex items-center gap-6 text-lg mb-4">
            <FaSearch className="cursor-pointer" />
            <FaShoppingCart className="cursor-pointer" />
          </div>

          {/* ✅ Mobile - Kondisi Login/Logout */}
          <div className="flex flex-col gap-3">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="w-full px-4 py-2 border border-white rounded text-sm hover:bg-white hover:text-[#1d1d1d] transition"
              >
                Logout
              </button>
            ) : (
              <>
                <button
                  onClick={handleSignIn}
                  className="w-full px-4 py-2 border border-white rounded text-sm hover:bg-white hover:text-[#1d1d1d] transition"
                >
                  Sign In
                </button>
                <button
                  onClick={handleSignUp}
                  className="w-full px-4 py-2 bg-orange-500 text-white rounded text-sm hover:bg-orange-600 transition"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavbarProduct;
