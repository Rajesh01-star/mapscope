"use client";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { links } from "../data/links";
import Link from "next/link";
import Image from "next/image";
import DropdownMenu from "./DropdownMenu";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Lock/unlock body scroll when mobile menu is opened/closed
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = "auto"; // Ensure scrolling is re-enabled
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed flex justify-between items-center w-full top-0 lg:px-32 px-10 py-6 bg-black text-white z-10">
      {/* Logo */}
      <div>
        <Image src="/logo.webp" width={175} height={85} alt="logo" />
      </div>

      {/* Navigation Links */}
      <div>
        {/* Desktop Navigation */}
        <ul className="hidden lg:flex flex-row space-x-8 items-center justify-around w-full transition-all duration-300 ease-in-out">
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
            <Link
              href={"#"}
              className="hover:text-blue-500 cursor-pointer transition text-sm lg:text-base"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
        )}
        <div className="lg:hidden relative z-40">
          {/* Hamburger/Cross Icon */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white text-2xl z-50 relative"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Slide-in Mobile Menu */}
          <div
            className={`fixed top-0 right-0 w-3/4 h-full bg-black text-white transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <ul className="flex flex-col items-center justify-center h-full space-y-8">
              <Link
                href="#about"
                className="text-xl hover:text-blue-500 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#domain"
                className="text-xl hover:text-blue-500 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Domain
              </Link>
              <Link
                href="#services"
                className="text-xl hover:text-blue-500 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#contact"
                className="text-xl hover:text-blue-500 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
