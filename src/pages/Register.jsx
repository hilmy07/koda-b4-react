import React from "react";
import Input from "../components/Input";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import register from "../assets/register.png";
import logo from "../assets/logo.png";
import textLogo from "../assets/textLogo.png";
import fb from "../assets/fb.png";
import google from "../assets/google.png";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); // ⬅️ arahkan ke halaman Home
  };

  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-4 overflow-hidden">
      {/* LEFT SIDE - Background pakai Tailwind */}
      <div
        className="hidden md:block max-w-full  bg-cover bg-center"
        style={{ backgroundImage: `url(${register})` }}
      ></div>

      {/* RIGHT SIDE - Register Card */}
      <div className="flex flex-col md:items-start px-8 my-8 col-span-3 md:ml-20">
        <div onClick={handleGoHome} className="flex gap-6 mb-6">
          <img src={logo} alt="logo" />
          <img src={textLogo} alt="logo" />
        </div>

        <form className="max-w-3xl w-full bg-white">
          {/* Header */}
          <h2 className="text-2xl font-bold text-[#8E6447] mb-2">Register</h2>
          <p className="text-sm text-gray-500 mb-6">
            Fill out the form correctly
          </p>

          {/* Input fields */}
          <Input
            label="Full Name"
            placeholder="Enter Your Full Name"
            icon={<FaUser />}
          />
          <Input
            label="Email"
            type="email"
            placeholder="Enter Your Email"
            icon={<FaEnvelope />}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter Your Password"
            icon={<FaLock />}
          />
          <Input
            label="Confirm Password"
            type="password"
            placeholder="Enter Your Password Again"
            icon={<FaLock />}
          />

          {/* Register Button */}
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg mt-4 transition">
            Register
          </button>

          {/* Login link */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Have an account?{" "}
            <a href="/Login" className="text-orange-500 hover:underline">
              Login
            </a>
          </p>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-500 text-sm">Or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Social login */}
          <div className="flex gap-4">
            <button className="flex-1 border border-gray-300 py-2 rounded-lg flex items-center justify-center hover:bg-gray-100 transition">
              <span className="mr-2">
                <img src={fb} alt="facebook" />
              </span>{" "}
              Facebook
            </button>
            <button className="flex-1 border border-gray-300 py-2 rounded-lg flex items-center justify-center hover:bg-gray-100 transition">
              <span className="mr-2">
                <img src={google} alt="google" />
              </span>{" "}
              Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
