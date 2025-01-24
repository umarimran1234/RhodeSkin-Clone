import React, { useState, useEffect } from "react";
import { useUser } from "@/authContaxt/authContxt";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";

function ProductsShowing() {
  const { products } = useUser();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isAnimating, setIsAnimating] = useState(false);

  const categories = ["HOODIE", "T-SHIRT", "FULL-SLIP", "HALF-SLIP"];

  // Filter products based on the selected category and search query
  const filterProducts = () => {
    const filtered = products?.filter((product) => {
      // Filter by category
      const matchesCategory = selectedCategory
        ? product.category === selectedCategory
        : true;

      // Filter by search query
      const matchesSearchQuery = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearchQuery;
    });

    setFilteredProducts(filtered);
  };

  // Handle category change
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value); // Update selected category
  };

  // Handle search change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update search query
  };

  // Trigger product filter when category or search query changes
  useEffect(() => {
    setIsAnimating(true); // Start animation
    filterProducts();
    setTimeout(() => setIsAnimating(false), 500); // Reset animation state after filter
  }, [selectedCategory, searchQuery]);

  return (
    <>
      <HeroSection
        title={"Zalmar Shop"}
        paragraph={"See Our latest Arrivals."}
        button={"SHOP NOW"}
      />
      <section className="bg-gray-50 py-8 mt-20 antialiased dark:bg-gray-900 md:py-12">
        <div className="container mx-auto px-4">
          {/* Category Filter Dropdown and Search Bar */}
          <div className="mb-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <label className="text-gray-700 font-medium">
                Filter by Category:
              </label>
              <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="border p-2 rounded-md w-full sm:w-auto transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                <option value="">All Categories</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center space-x-4 w-full sm:w-auto">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search products..."
                className="border p-2 rounded-md w-full sm:w-60 transition-all duration-300 ease-in-out transform hover:scale-105"
              />
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts?.length === 0 && (
              <div className="col-span-full text-center text-gray-500">
                No products found.
              </div>
            )}

            {products?.map((product, index) => (
              <div
                key={index || product?.id}
                className={`group flex flex-col overflow-hidden border border-gray-100 bg-white shadow-md rounded-lg transition-all transform ${
                  isAnimating
                    ? "opacity-0 translate-y-4"
                    : "opacity-100 translate-y-0"
                } duration-500 ease-out hover:scale-105 hover:shadow-xl`}
              >
                {/* Product Image */}
                <a className="relative flex h-60 overflow-hidden" href="#">
                  <div className="flex">
                    <img
                      className="absolute top-0 right-0 h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
                      src={product?.image}
                      alt="product image"
                    />
                  </div>
                  {/* } */}
                  <div className="absolute bottom-0 mb-4 flex w-full justify-center space-x-4">
                    <div className="h-3 w-3 rounded-full border-2 border-white bg-white"></div>
                    <div className="h-3 w-3 rounded-full border-2 border-white bg-transparent"></div>
                    <div className="h-3 w-3 rounded-full border-2 border-white bg-transparent"></div>
                  </div>
                  <div className="absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0">
                    <button className="flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition-transform transform hover:scale-110 duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </a>

                {/* Product Details */}
                <div className="mt-4 px-5 pb-5">
                  <a href="#">
                    <h5 className="text-lg font-medium text-gray-800 capitalize transition-all duration-300 ease-in-out transform hover:text-gray-700">
                      {product.name}
                    </h5>
                  </a>
                  <div className="mt-2 mb-5 flex items-center justify-between">
                    <p className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">
                        RS {product.price}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        RS {product.oldPrice}
                      </span>
                    </p>
                  </div>
                  {/* Add to Cart Button */}
                  <Link
                    href={`/product_view/${product?.id}`}
                    className="flex items-center justify-center bg-gray-900 px-4 py-2 text-sm text-white transition-transform transform hover:scale-110 hover:bg-gray-700 rounded duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                    {/* Add to cart */}
                    PRODUCT VIEW
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductsShowing;
