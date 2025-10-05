import React from "react";
import logo from "../assets/logo.png";
import textLogo from "../assets/textLogo.png";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); // ⬅️ arahkan ke halaman Home
  };

  return (
    <footer className="bg-gray-100 pb-10 font-sans text-sm text-gray-600">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-1 justify-items-start pt-10">
        {/* About Section */}
        <div>
          <div onClick={handleGoHome} className="flex gap-6 mb-6">
            <img src={logo} alt="logo" />
            <img src={textLogo} alt="logo" />
          </div>
          <p className="leading-relaxed mb-2">
            Coffee shop is a store that sells some good
          </p>
          <p className="leading-relaxed mb-2">
            meels, and especially coffee. We provide
          </p>
          <p className="leading-relaxed mb-2">high quality beans</p>
        </div>

        {/* Products Section */}
        <div className="ml-20">
          <h3 className="text-lg text-gray-900 mb-4">Product</h3>
          <ul className="list-none p-0">
            <li className="mb-2">
              <a
                href="#"
                className="text-gray-600 no-underline hover:text-gray-900"
              >
                Our Product
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="text-gray-600 no-underline hover:text-gray-900"
              >
                Pricing
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="text-gray-600 no-underline hover:text-gray-900"
              >
                Locations
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="text-gray-600 no-underline hover:text-gray-900"
              >
                Countries
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="text-gray-600 no-underline hover:text-gray-900"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Engage Section */}
        <div className="ml-10">
          <h3 className="text-lg text-gray-900 mb-4">Engage</h3>
          <ul className="list-none p-0">
            <li className="mb-2">
              <a
                href="#"
                className="text-gray-600 no-underline hover:text-gray-900"
              >
                Partner
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="text-gray-600 no-underline hover:text-gray-900"
              >
                Faq
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="text-gray-600 no-underline hover:text-gray-900"
              >
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="text-gray-600 no-underline hover:text-gray-900"
              >
                Privacy Policy
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="text-gray-600 no-underline hover:text-gray-900"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="">
          <h3 className="text-lg text-gray-900 mb-4">Social Media</h3>
          <div className="flex gap-2.5">
            <a href="#" className="text-gray-600 text-2xl no-underline">
              📘
            </a>
            <a href="#" className="text-gray-600 text-2xl no-underline">
              🐦
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
