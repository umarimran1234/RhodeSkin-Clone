"use client";
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosStar } from "react-icons/io";

const ProductSlider = () => {
  const stars = [1, 2, 3, 4, 5];

  const cards = [
    {
      title: "the set",
      subtitle: "Four travel-friendly essentials",
      price: "$84.00",
      product: "THE TRAVEL SET",
      reviews: 2,
      image: "/FirstProduct.webp",
    },
    {
      title: "prep",
      subtitle: "The essential prep layer",
      price: "$30.00",
      product: "GLAZING MILK",
      reviews: 3437,
      image: "/SecondProduct.webp",
    },
    {
      title: "seal",
      subtitle: "The daily cleanser",
      price: "$22.00",
      product: "BARRIER BUTTER",
      reviews: 563,
      image: "/ThirdProduct.webp",
    },
    {
      title: "cleanse",
      subtitle: "The daily cleanser",
      price: "$28.00",
      product: "PINEAPPLE REFRESH",
      reviews: 1325,
      image: "/FourthProduct.webp",
    },
    {
      title: "nourish",
      subtitle: "The nourishing lip layer",
      price: "$18.00",
      product: "peptide lip treatment",
      reviews: 15490,
      image: "/FifthProduct.webp",
    },
    {
      title: "blush",
      subtitle: "The natural flush",
      price: "$24.00",
      product: "POCKET BLUSH",
      reviews: 3441,
      image: "/SixthProduct.webp",
    },
    {
      title: "glow",
      subtitle: "Glow enhancing lotion",
      price: "$28.00",
      product: "GLOW LOTION",
      reviews: 950,
      image: "image7.png",
    },
    {
      title: "refresh",
      subtitle: "Refreshing toner",
      price: "$18.00",
      product: "TONER",
      reviews: 789,
      image: "image8.png",
    },
    {
      title: "repair",
      subtitle: "Repairing night cream",
      price: "$50.00",
      product: "NIGHT CREAM",
      reviews: 1340,
      image: "image9.png",
    },
    {
      title: "protect",
      subtitle: "Daily SPF moisturizer",
      price: "$25.00",
      product: "SPF MOISTURIZER",
      reviews: 2000,
      image: "image10.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 3 + cards.length) % cards.length
    );
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${(currentIndex / 3) * 100}%)` }}
      >
        {cards.map((card, index) => (
          <div key={index} className="min-w-[33.3333%] p-4">
            <div className="bg-gray-100 text-[#67645E] rounded-lg shadow-lg p-6">
              <h3 className="text-[4vw] font-bold mb-2">
                {card.title}
              </h3>
              <img
                src={card.image}
                alt={card.product}
                className="w-full h-40 object-cover mb-4"
              />
              <div className="flex justify-between">
                <div>
                  <p className=" flex items-center font-medium gap-1">
                    {stars.map((star) => (
                      <IoIosStar key={star.index} />
                    ))}{" "}
                    ({card.reviews})
                  </p>
                  <p className="text-[17px] uppercase font-semibold">{card.product}</p>
                  <p className="font-medium">{card.subtitle}</p>
                </div>
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
