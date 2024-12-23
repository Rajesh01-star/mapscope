"use client";
import { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa"; // Hamburger menu icons
import { links } from "../data/links"; // Adjust the path as necessary

export default function MobileNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu state

  return (
    <nav className="fixed w-full top-0 bg-black text-white px-8 py-6 flex items-center justify-between z-50">
      {/* Logo */}
      <div className="flex items-center">
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
          {isMobileMenuOpen ? <FaTimes color="white" className="z-20" /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 w-3/4 h-full bg-black text-white transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center justify-center h-full space-y-8">
          <li>
            <a href="#about" className="text-xl hover:text-blue-500 transition">
              About
            </a>
          </li>
          <li>
            <a href="#domain" className="text-xl hover:text-blue-500 transition">
              Domain
            </a>
          </li>
          <li>
            <a href="#services" className="text-xl hover:text-blue-500 transition">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="text-xl hover:text-blue-500 transition">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay behind the mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
}
