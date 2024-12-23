"use client";

import Image from "next/image";
import domains from "../data/domains";

export default function DomainCarousel() {
  return (
    <section className="lg:mx-32 mt-16 py-12">
      <h2 className="text-3xl text-center sm:text-4xl font-semibold text-gray-800 mb-4">
      Explore GeoAI
      <span className="text-blue-500"> Domains</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 mt-8">
        {domains.map((domain, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <Image
                src={domain.image}
                alt={domain.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
            </div>
            <p className="mt-2 text-sm font-medium text-gray-700 text-center">
              {domain.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
