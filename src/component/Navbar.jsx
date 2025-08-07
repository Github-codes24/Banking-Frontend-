import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    scheme: false,
    legal: false,
    gallery: false,
  });

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleDropdown = (key) => {
    setDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about-us" },
    { name: "SCHEMES", path: "/schemes", isDropdown: true, key: "scheme" },
    { name: "LEGAL", path: "/legalDocs", isDropdown: true, key: "legal" },
    { name: "GALLERY", path: "/gallery/society/1", isDropdown: true, key: "gallery" },
    { name: "CAREER", path: "/careers" },
    { name: "CONTACT US", path: "/contact" },
  ];

  const dropdownItems = {
    scheme: [
      { name: "Fixed Deposit Plan", path: "/scheme/Fixed/1" },
      { name: "Recurring Deposit Plan", path: "/scheme/Fixed/2" },
      { name: "Monthly Income Plan", path: "/scheme/Fixed/3" },
    ],
    legal: [{ name: "Legal Documents", path: "/legalDocs" }],
    gallery: [
      { name: "Our Society", path: "/gallery/society/1" },
      { name: "Our Employees", path: "/gallery/employee/2" },
      { name: "Others", path: "/gallery/others/3" },
    ],
  };

  const renderDropdown = (items) => (
    <ul className="pl-4 md:absolute md:left-0 md:top-full md:w-56 bg-white md:shadow-md border border-yellow-300 z-50">
      {items.map((sub, idx) => (
        <li key={idx} className="px-4 py-2 text-gray-700 hover:bg-yellow-50">
          <Link to={sub.path}>{sub.name}</Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="bg-[#ffe170] border-t border-b border-yellow-300 relative z-50">
      {/* Mobile Hamburger */}
      <div className="md:hidden flex justify-between items-center px-4 py-2">
        <div className="text-lg font-bold text-red-600">Menu</div>
        <button onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Menu Items */}
      <ul
        className={`text-[13px] md:text-sm font-semibold flex-col md:flex-row md:flex justify-center md:flex-wrap ${
          mobileMenuOpen ? "flex" : "hidden"
        } md:block`}
      >
        {menuItems.map((item, idx) => {
          const hasDropdown = item.isDropdown;
          const dropdownKey = item.key;

          const isActive =
            location.pathname === item.path ||
            (hasDropdown && location.pathname.startsWith(item.path));

          return (
            <li
              key={idx}
              className={`relative px-4 py-2 border-b md:border-b-0 md:border-r border-yellow-300 hover:bg-yellow-200 ${
                isActive ? "text-red-600" : "text-gray-800"
              }`}
              onMouseEnter={() => {
                if (!isMobile && hasDropdown)
                  setDropdowns((prev) => ({ ...prev, [dropdownKey]: true }));
              }}
              onMouseLeave={() => {
                if (!isMobile && hasDropdown)
                  setDropdowns((prev) => ({ ...prev, [dropdownKey]: false }));
              }}
            >
              {hasDropdown ? (
                <div
                  className="flex items-center gap-1 cursor-pointer"
                  onClick={() => isMobile && toggleDropdown(dropdownKey)}
                >
                  <span>{item.name}</span>
                  <FaChevronDown className="text-[10px] mt-0.5" />
                </div>
              ) : (
                <Link to={item.path}>{item.name}</Link>
              )}

              {hasDropdown && dropdowns[dropdownKey] && renderDropdown(dropdownItems[dropdownKey])}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
