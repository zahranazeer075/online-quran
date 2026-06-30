import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Courses", path: "/" },
    { name: "Fee", path: "/fee" },
    { name: "To Be Teacher", path: "/tobeteacher" },
    { name: "Contact", path: "/contact" },
  ];
  const handleLinkClick = () => {
    setIsOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="bg-[#c5a06a] min-h-[85px] flex items-center fixed z-50 w-full justify-between px-4 md:px-6 lg:px-8 shadow-sm">
      <div className="flex items-center gap-2 md:gap-3 shrink-0">
        <div className="bg-white rounded-md p-1">
          <img
            src="https://a-hafiz.com/assets/Al-hafix-logo-B8k2_mOI.jpeg"
            alt="Logo"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain"
          />
        </div>

        <div className="text-white font-serif leading-tight">
          <h2 className="text-sm md:text-base lg:text-lg font-bold">
            Al Hafiz-Online
          </h2>
          <h3 className="text-sm md:text-base lg:text-lg font-bold">
            Quran Academy
          </h3>
        </div>
      </div>

    
      <ul className="hidden lg:flex items-center gap-3 xl:gap-5">
        {navLinks.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.path}
              onClick={handleLinkClick}
              className={({ isActive }) =>
                `font-serif text-lg font-semibold px-4 py-2 rounded-xl transition-all duration-300 whitespace-nowrap ${
                  isActive
                    ? "bg-[#d7bb90] text-white"
                    : "text-white hover:bg-[#d7bb90]"
                }`
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

     
      <button className="hidden lg:block bg-white text-green-700 font-serif font-semibold px-6 py-3 rounded-xl whitespace-nowrap hover:bg-gray-100 transition duration-300">
        Sign In
      </button>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden text-white"
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>
      <div
        className={`absolute top-[85px] left-0 w-full bg-[#c5a06a] shadow-lg transition-all duration-300 lg:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col py-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `block px-6 py-3 text-white font-semibold ${
                    isActive ? "bg-[#d7bb90]" : "hover:bg-[#d7bb90]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}

          <li className="px-6 pt-4">
            <button className="w-full bg-white text-green-700 font-semibold py-3 rounded-xl">
              Sign In
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;