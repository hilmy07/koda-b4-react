import React from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

function Input({ label, type = "text", placeholder, icon }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-orange-400">
        <span className="text-gray-400 mr-2">{icon}</span>
        <input
          type={type}
          placeholder={placeholder}
          className="w-full outline-none text-gray-700"
        />
      </div>
    </div>
  );
}

export default Input;
