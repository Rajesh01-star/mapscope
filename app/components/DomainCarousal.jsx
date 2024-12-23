"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

const domains = [
  { title: "Land Management", image: "/images/land.jpg" },
  { title: "Forestry", image: "/images/forest.jpg" },
  { title: "Mining", image: "/images/mine.jpg" },
  { title: "Agriculture", image: "/images/agriculture.jpg" },
  { title: "Environment", image: "/images/envio.jpg" },
  { title: "Utility", image: "/images/utility.jpg" },
  { title: "Governance", image: "/images/governance.jpg" },
  { title: "Urban Development", image: "/images/urban.jpg" },
];

const animation = { duration: 10000, easing: (t) => t };  // Slower transition

export default function DomainCarousel() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 6,
      spacing: 5,  // Reduced gap between slides
    },
    created(slider) {
      slider.moveToIdx(5, true, animation); // Start at the first slide
    },
    updated(slider) {
      slider.moveToIdx(slider.track.details.abs + 5, true, animation);
    },
    animationEnded(slider) {
      slider.moveToIdx(slider.track.details.abs + 5, true, animation);
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider -mt-44">
      {domains.map((domain, index) => (
        <div key={index} className="keen-slider__slide">
          <div className="flex flex-col items-center">
            <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <Image
                src={domain.image}
                alt={domain.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
            </div>
            <p className="mt-2 text-sm font-medium text-gray-700">
              {domain.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
