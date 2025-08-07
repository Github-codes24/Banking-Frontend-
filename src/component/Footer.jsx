import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from "react-icons/md";
const Footer = () => {
  return (
    <footer className="bg-white  text-gray-500 border-2">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row">
        {/* Left: Quick Links */}
        <div className="md:w-1/3 w-full p-6">
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
         <ul className="space-y-2">
      <li>
        <Link
          to="/"
          className="hover:text-gray-300 flex items-center gap-2 underline"
        >
          <MdKeyboardArrowRight /> Home
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className="hover:text-gray-300 flex items-center gap-2 underline"
        >
          <MdKeyboardArrowRight /> About
        </Link>
      </li>
      <li>
        <Link
          to="/faq"
          className="hover:text-gray-300 flex items-center gap-2 underline"
        >
          <MdKeyboardArrowRight /> Faq
        </Link>
      </li>
      <li>
        <Link
          to="/applicationForms"
          className="hover:text-gray-300 flex items-center gap-2 underline"
        >
          <MdKeyboardArrowRight /> Loan Application Forms
        </Link>
      </li>
    </ul>
        </div>

        {/* Right: Socials on Background Image */}
        <div
          className="md:w-2/3 w-full bg-cover bg-center p-6 flex flex-col items-center justify-center"
          style={{ backgroundImage: "url('/footer-bg.avif')" }} // replace with your image path
        >
          <h2 className="text-2xl text-black font-semibold mb-4">You can easily follow us on social
media platform.</h2>
          <div className="flex gap-6 text-3xl">
            <a href="#" className="text-blue-800"><FaFacebook /></a>
            <a href="#" className="text-blue-700"><FaTwitter /></a>
            <a href="#" className="text-pink-700"><FaInstagram /></a>
            <a href="#" className="text-teal-800"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-800 text-center py-4 text-sm">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
