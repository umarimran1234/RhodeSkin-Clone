"use client";
import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward, IoIosStar } from "react-icons/io";

const ProductSlider = () => {
  const stars = [1, 2, 3, 4, 5];

  const cards = [
    {
      title: "the set",
      subtitle: "Four travel-friendly essentials",
      price: "$84.00",
      product: "THE TRAVEL SET",
      reviews: 2,
      image: "/FirstProduct.png",
    },
    {
      title: "prep",
      subtitle: "The essential prep layer",
      price: "$30.00",
      product: "GLAZING MILK",
      reviews: 3437,
      image: "/SecondProduct.png",
    },
    {
      title: "seal",
      subtitle: "The daily cleanser",
      price: "$22.00",
      product: "BARRIER BUTTER",
      reviews: 563,
      image: "/ThirdProduct.png",
    },
    {
      title: "cleanse",
      subtitle: "The daily cleanser",
      price: "$28.00",
      product: "PINEAPPLE REFRESH",
      reviews: 1325,
      image: "/FourthProduct.png",
    },
    {
      title: "nourish",
      subtitle: "The nourishing lip layer",
      price: "$18.00",
      product: "peptide lip treatment",
      reviews: 15490,
      image: "/FifthProduct.png",
    },
    {
      title: "blush",
      subtitle: "The natural flush",
      price: "$24.00",
      product: "POCKET BLUSH",
      reviews: 3441,
      image: "/SixthProduct.png",
    },
    {
      title: "blush + tint",
      subtitle: "Cozy fall combos",
      price: "$42.00",
      product: "the fall duos ",
      reviews: 329,
      image: "/SeventhProduct.png",
    },
    {
      title: "tint",
      subtitle: "The tinted lip layer",
      price: "$18.00",
      product: "peptide lip tint ",
      reviews: 9491,
      image: "/EightProduct.png",
    },
    {
      title: "case",
      subtitle: "Four limited edition colors",
      price: "$38.00",
      product: "fall lip case",
      reviews: 489,
      image: "/NineProduct.png",
    },
    {
      title: "case",
      subtitle: "Your essentials in one place",
      price: "$38.00",
      product: "lip case",
      reviews: 1363,
      image: "/TenProduct.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Determine which cards to display
  const visibleCards = [
    cards[(currentIndex - 1 + cards.length) % cards.length], // Previous card
    cards[currentIndex], // Current card
    cards[(currentIndex + 1) % cards.length], // Next card
  ];

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      <div className="flex md:flex-row flex-col justify-center items-center gap-4">
        {visibleCards.map((card, index) => (
          <div
            key={index}
            className="flex-shrink-0 md:w-[30%] p-4 transition-transform duration-500"
          >
            <div className="bg-gray-100 lg:h-[78vh] md:h-[94vh] text-[#67645E] rounded-lg shadow-lg p-6">
              <h3 className="text-[4vw] font-bold mb-2">{card.title}</h3>
              <img
                src={card.image}
                alt={card.product}
                className="w-full h-[40vh] object-cover mb-4"
              />
              <div className="flex flex-col justify-between">
                <p className="flex items-center font-medium gap-1">
                  {stars.map((starIndex) => (
                    <IoIosStar key={starIndex} />
                  ))}{" "}
                  ({card.reviews})
                </p>
                <p className="text-[17px] uppercase font-semibold">
                  {card.product}
                </p>
                <p className="font-medium">{card.subtitle}</p>
                <p className="text-lg font-bold mt-4">{card.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-3"
        onClick={prevSlide}
      >
        <IoIosArrowBack />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-3"
        onClick={nextSlide}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default ProductSlider;
