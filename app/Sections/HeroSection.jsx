"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import slides from "../data/slides";
import MotionDiv from "../components/MotionDiv";

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically transition slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <MotionDiv classes={"h-screen relative"}>
      {/* Slideshow Container */}
      <div className="w-full h-full">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentIndex === index ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
          </motion.div>
        ))}
      </div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        <motion.h1
          key={slides[currentIndex].title}
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {slides[currentIndex].title}
        </motion.h1>
        <motion.p
          key={slides[currentIndex].subtitle}
          className="text-lg md:text-2xl mt-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {slides[currentIndex].subtitle}
        </motion.p>
        <div className="flex space-x-4 mt-6">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            {slides[currentIndex].cta1}
          </button>
          <button className="px-6 py-3 bg-gray-500 text-white rounded-md hover:bg-gray-600">
            {slides[currentIndex].cta2}
          </button>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
        <button
          onClick={prevSlide}
          className="p-2 bg-black/50 text-white rounded-full transform duration-200 transition-all ease-in-out hover:scale-125 hover:border hover:border-white"
        >
          &lt;
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
        <button
          onClick={nextSlide}
          className="p-2 bg-black/50 text-white rounded-full transform duration-200 transition-all ease-in-out hover:scale-125 hover:border hover:border-white"
        >
          &gt;
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index
                ? "bg-blue-500 w-10"
                : "bg-gray-500 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </MotionDiv>
  );
}
