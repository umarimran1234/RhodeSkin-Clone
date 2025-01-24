import React from "react";

import Image from "next/image";
import Link from "next/link";

function ProductGrid({ product, item, index }) {
  const isLoading = (!product && item) || product?.length === 0;

  return (
    <>
      <div
        key={index}
        className={`group flex flex-col overflow-hidden border border-gray-100 bg-white shadow-md rounded-lg transition-all transform 
           duration-500 ease-out hover:scale-105 hover:shadow-xl`}
      >
        {/* Product Image */}
        <Link
          className="relative flex h-80 overflow-hidden"
          href={`/product_view/${[product?.id]}`}
        >
          <div className="flex">
            <Image
              width={300}
              height={300}
              className="absolute top-0 right-0 h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
              src={item || null}
              alt="product image"
            />
          </div>
          <div className="absolute bottom-0 mb-4 flex w-full justify-center space-x-4">
            <div className="h-3 w-3 rounded-full border-2 border-white bg-white"></div>
            <div className="h-3 w-3 rounded-full border-2 border-white bg-transparent"></div>
            <div className="h-3 w-3 rounded-full border-2 border-white bg-transparent"></div>
          </div>
        </Link>

        {/* Product Details */}
        <div className="mt-4 px-5 pb-5">
          <a href="#">
            <h5 className="text-lg font-medium text-gray-800 capitalize transition-all duration-300 ease-in-out transform hover:text-gray-700">
              {product?.name}
            </h5>
          </a>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gray-900">
                RS {product?.price}
              </span>
              <span className="text-sm text-gray-500 line-through">
                RS{product?.oldPrice}
              </span>
            </p>
          </div>
          {/* Add to Cart Button */}
          <button className="flex items-center justify-center bg-gray-900 px-4 py-2 text-sm text-white transition-transform transform hover:scale-110 hover:bg-gray-700 rounded duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2C5.455 2 2.26 5.432 1.128 7.178a2.085 2.085 0 000 1.644C2.26 10.568 5.455 14 10 14s7.74-3.432 8.872-5.178a2.085 2.085 0 000-1.644C17.74 5.432 14.545 2 10 2zM10 12a4 4 0 110-8 4 4 0 010 8z" />
              <circle cx="10" cy="8" r="2" />
            </svg>
            View Product
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductGrid;
