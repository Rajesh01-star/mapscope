"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa"; // Hamburger menu icons
import DropdownMenu from "./DropdownMenu";
import MobileNavbar from "./MobileNavbar"; // Import MobileNavbar for mobile screens
import { links } from "../data/links"; // Adjust the path as necessary

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu state
  const [isMobile, setIsMobile] = useState(false); // State to track if screen is mobile

  // Detect screen size and set isMobile state accordingly
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile if screen width <= 768px
    };

    handleResize(); // Check screen size on initial load
    window.addEventListener("resize", handleResize); // Update on window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup event listener on unmount
    };
  }, []);

  // Render MobileNavbar on mobile screens, else render normal Navbar
  if (isMobile) {
    return <MobileNavbar />;
  }

  return (
    <nav className="fixed w-full top-0 bg-black text-white px-40 py-6 flex items-center justify-between z-50">
      {/* Logo */}
      <div className="flex items-center ">
        <Image
          src="/logo.webp"
          width={150} // Adjust size for smaller screens
          height={75} // Adjust size for smaller screens
          alt="logo"
        />
      </div>

      {/* Hamburger Icon (visible on small screens) */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white text-2xl"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`flex lg:flex-row flex-col lg:space-x-8 space-y-4 lg:space-y-0 absolute lg:relative lg:flex items-center justify-around bg-black lg:bg-transparent w-full lg:w-auto transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "top-16" : "-top-full"
        }`}
      >
        {links.map((link, index) => (
          <DropdownMenu
            key={index}
            link={link}
            isActive={activeDropdown === index}
            onMouseEnter={() => setActiveDropdown(index)}
            onMouseLeave={() => setActiveDropdown(null)}
          />
        ))}
        {/* Contact Link */}
        <li>
          <a className="hover:text-blue-500 transition text-sm lg:text-base">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
