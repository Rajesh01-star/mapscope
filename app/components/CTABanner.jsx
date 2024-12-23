"use client";

import { RiArrowRightSLine } from "react-icons/ri";
import Link from "next/link";

export default function CTABanner() {
  return (
    <div className="lg:mt-26 mt-40 mx-10 lg:mx-80 relative rounded-md bg-gradient-to-r from-blue-500 to-blue-400 lg:p-4 p-6 shadow-lg transition-all hover:shadow-xl mb-20">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <h2 className="text-xl font-bold text-white mb-4 sm:mb-0 lg:text-3xl">
          Make your idea come to life!
        </h2>
        <Link
          href="/contact"
          className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-blue-500 transition-all hover:bg-opacity-90"
        >
          Contact Us
          <RiArrowRightSLine className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Decorative background elements */}
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-300 opacity-20 blur-3xl" />
      <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-300 opacity-20 blur-3xl" />
    </div>
  );
}
