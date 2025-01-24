"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
const GoodCallSection = ({ image }) => {
  const imageSrc = image[0]?.image;
  const [productSate, setProductState] = useState();
  const navigation = useRouter();
  const handleNavigate = (id) => {
    navigation.push(`/product_view/${image[0]?.id}`);
  };

  return (
    <div className="container mx-auto my-8">
      {/* Central Div */}
      <div className="flex md:flex-row-reverse flex-col-reverse">
        {/* First Child Element */}
        <Image
          src={imageSrc || null}
          alt="Travel Section Image"
          width={1000}
          height={1000}
          className="md:w-1/2 w-full rounded-r-xl"
        ></Image>
        <div className="md:w-1/2 w-full p-8 bg-[#efefef] rounded-l-xl flex flex-col justify-end">
          <h3 className="text-[34px] text-[#67645E] md:w-2/3 font-bold">
            {/* Second Child Div */}
            Zalmar latest Arrivals
          </h3>
          <p className="text-[#67645E] md:w-2/3 font-medium my-4">
            {/* Stay cozy this winter with Zalmar! Check out our winter hoodies and
            keep your Lip Case handy for your Peptide Lip Treatment. Style and
            comfort, always with you. */}
          </p>

          <button
            onClick={handleNavigate}
            className="border lg:w-1/4 md:w-1/2 w-2/3 h-[35px] border-[#67645E] text-[#67645E] px-4 py-1 rounded-full hover:bg-white hover:text-gray-500 font-medium transition"
          >
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoodCallSection;
