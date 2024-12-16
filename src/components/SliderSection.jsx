"use client";
import React, { useState } from "react";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Replace these with your actual image URLs
  const images = [
    "/FirstImg.webp",
    "/SecondImg.webp",
    "/ThirdImg.webp",
    "/FourthImg.webp",
    "/FifthImg.webp",
  ];

  const itemsPerView = 4; // Number of images visible at a time
  const totalSlides = 2; // Total number of "pages"

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container mx-auto my-10">
      <div className="bg-[#efefef] relative py-14 px-4 lg:px-16 rounded-xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[34px] font-bold text-[#67645E]">you + rhode</h2>
          <button className="border border-[#67645E] text-[#67645E] px-4 py-1 rounded-full hover:bg-gray-200 font-medium transition">
            FIND US ON SOCIAL
          </button>
        </div>

        {/* Slider */}
        <div className="overflow-hidden">
          <div
            className="flex md:flex-row md:gap-0 gap-4 flex-col transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
              // Translate by a fraction of total width
              width: `${(images.length / itemsPerView) * 100}%`,
            }}
          >
            {images.map((image, index) => (
              <div key={index} className="flex-none w-full md:w-1/4 px-2">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="absolute hidden bottom-3 right-16 md:flex space-x-2">
            <button
              onClick={handlePrev}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-black hover:bg-white transition"
            >
              &#8249;
            </button>
            <button
              onClick={handleNext}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-black hover:bg-white transition"
            >
              &#8250;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
