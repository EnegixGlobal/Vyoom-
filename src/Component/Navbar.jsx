import React, { useState } from "react";
import logo from "../assets/Vyoomlogo.png";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar({ setPage }) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [active, setActive] = useState("home"); // highlight active menu

  const toggleMenu = () => setMobileMenu(!mobileMenu);

  // Handle menu click
  const handleMenuClick = (page) => {
    setActive(page);
    setPage(page);
    setMobileMenu(false); // auto close mobile menu
  };

  const menuItems = [
    { label: "Home", page: "home" },
    { label: "About", page: "about" },
    { label: "Services", page: "service" },
    { label: "Contact", page: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-white/30 backdrop-blur-xl shadow-lg border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <img src={logo} alt="Logo" className="w-32 sm:w-36 cursor-pointer" onClick={() => handleMenuClick("home")} />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-medium text-white">
          {menuItems.map((item) => (
            <li
              key={item.page}
              onClick={() => handleMenuClick(item.page)}
              className={`cursor-pointer transition ${
                active === item.page ? "text-yellow-600" : "hover:text-gray-300"
              }`}
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <button
  onClick={() => handleMenuClick("contact")}
  className="bg-yellow-500 text-black px-5 py-2 font-semibold rounded-lg hidden md:block hover:bg-yellow-400 transition"
>
  Become Member
</button>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-3xl focus:outline-none"
        >
          {mobileMenu ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/90 backdrop-blur-lg w-full transition-all duration-300 overflow-hidden ${
          mobileMenu ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 text-black text-lg">
          {menuItems.map((item) => (
            <li
              key={item.page}
              onClick={() => handleMenuClick(item.page)}
              className={`cursor-pointer transition ${
                active === item.page ? "text-yellow-600 font-semibold" : "hover:text-yellow-500"
              }`}
            >
              {item.label}
            </li>
          ))}

          {/* Mobile Become Member Button */}
          <button
  onClick={() => handleMenuClick("contact")}
  className="bg-yellow-500 text-black px-5 py-2 rounded-lg hover:bg-yellow-400 transition"
>
  Become Member
</button>

        </ul>
      </div>
    </nav>
  );
}
