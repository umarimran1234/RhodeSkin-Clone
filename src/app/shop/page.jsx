"use client";
import React, { useState } from "react";
import { useUser } from "@/authContaxt/authContxt";
import Image from "next/image";
import ProductsShowing from "./components/productsShowing";
import { CarouselDemo } from "@/components/frontCruasal";

const StoreSection = () => {
  const { products } = useUser();
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = ["Hoodie", "T-shirt", "Full Slip", "Half Slip"];

  const filteredProducts = selectedCategory
    ? products?.filter((item) => item.category === selectedCategory)
    : products;

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    // <section className="bg-white py-8 mt-7">
    //   <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
    //     <nav id="store" className="w-full z-30 top-0 px-6 py-1">
    //       <div className="flex items-center justify-center space-x-4 w-full mt-4">
    //         {/* Category Filter as Buttons */}
    //         {categories.map((category, index) => (
    //           <button
    //             key={index}
    //             className={`px-4 py-2 rounded-lg text-white ${
    //               selectedCategory === category ? "bg-blue-500" : "bg-gray-500"
    //             } hover:bg-blue-700 focus:outline-none`}
    //             onClick={() => handleCategoryChange(category)}
    //           >
    //             {category}
    //           </button>
    //         ))}
    //         <button
    //           className={`px-4 py-2 rounded-lg text-white ${
    //             selectedCategory === "" ? "bg-blue-500" : "bg-gray-500"
    //           } hover:bg-blue-700 focus:outline-none`}
    //           onClick={() => handleCategoryChange("")}
    //         >
    //           All Categories
    //         </button>
    //       </div>
    //     </nav>

    //     {/* Product Grid */}
    //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    //       {filteredProducts?.length === 0 ? (
    //         <div className="col-span-full text-center text-xl">
    //           No products found for this category.
    //         </div>
    //       ) : (
    //         filteredProducts?.map((item, index) => (
    //           <div
    //             key={index}
    //             className="w-full p-6 flex flex-col border rounded-lg shadow-lg"
    //           >
    //             <a href="#">
    //               <Image
    //                 width={200}
    //                 height={200}
    //                 className="hover:grow hover:shadow-lg"
    //                 src={item?.image}
    //                 alt={`Product ${index + 1}`}
    //               />
    //               <div className="pt-3 flex items-center justify-between">
    //                 <p>{item?.name}</p>
    //                 <svg
    //                   className="h-6 w-6 fill-current text-gray-500 hover:text-black"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   viewBox="0 0 24 24"
    //                 >
    //                   <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
    //                 </svg>
    //               </div>
    //               <p className="pt-1 text-gray-900">{item.price}</p>
    //             </a>
    //           </div>
    //         ))
    //       )}
    //     </div>
    //   </div>
    // </section>
    <>
      <ProductsShowing />
    </>
  );
};

export default StoreSection;
