// components/DropdownMenu.js
"use client";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export default function DropdownMenu({
  link,
  isActive,
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <li className="relative" onMouseEnter={onMouseEnter}>
      <div className="flex items-center cursor-pointer hover:text-blue-500 transition">
        {link.name}
        <motion.span animate={{ rotate: isActive ? 180 : 0 }} className="ml-2">
          <FaChevronDown />
        </motion.span>
      </div>

      {/* Dropdown Menu */}
      {isActive && (
        <motion.div
          initial={{ opacity: 0, y: -20 }} // Start above the dropdown position
          animate={{ opacity: 1, y: 0 }} // Animate to the normal position
          exit={{ opacity: 0, y: -20 }} // Slide back up when it exits
          className="px-52 py-10 mt-4 -z-10 fixed top-12 left-0 w-full bg-white text-black shadow-lg rounded-lg"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <ul className="grid grid-cols-4 justify-center items-center">
            {link.submenu?.map((item, subIndex) => (
              <li
                key={subIndex}
                className="flex items-center p-4 hover:bg-gray-200 cursor-pointer"
              >
                <span className="mr-4 text-blue-500 text-xl">{item.icon}</span>
                <div className="flex flex-col">
                  <span className="font-medium">{item.name}</span>
                  {item.subtext && (
                    <span className="text-sm text-gray-600 mt-1">
                      {item.subtext}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </li>
  );
}
