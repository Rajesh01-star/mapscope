"use client";
import { useState } from "react";
import Image from "next/image";
import DropdownMenu from "./DropdownMenu";
import { links } from "../data/links"; // Adjust the path as necessary

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <nav className="fixed w-full top-0 bg-black text-white px-8 py-6 flex items-center justify-around z-50">
      <Image src="/logo.webp" width={200} height={100} alt="logo" />

      {/* Navigation Links */}
      <ul className="flex space-x-8">
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
          <a href="#contact" className="hover:text-blue-500 transition">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
