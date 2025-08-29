// components/Header.jsx
import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="bg-[#fff8f1] text-left py-4 px-4">
      <img
        src={logo}
        alt="Logo"
        
        className="w-25 h-25 md:w-16 md:h-16 object-contain"
      />
    </div>
  );
};

export default Header;
