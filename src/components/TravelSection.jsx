import Image from "next/image";
import React from "react";

const TravelSection = () => {
  return (
    <div className="container mx-auto my-8">
      {/* Central Div */}
      <div className="flex md:flex-row flex-col">
        {/* First Child Element */}
        <Image
          src={"/TravelSectionImg.webp"}
          alt="Travel Section Image"
          width={1000}
          height={1000}
          className="md:w-1/2 w-full rounded-l-xl"
        ></Image>
        {/* Second Child Div */}
        <div className="md:w-1/2 w-full p-8 bg-[#efefef] rounded-r-xl flex flex-col justify-end">
          <h3 className="text-[34px] text-[#67645E] w-2/3 font-bold">
            we got you a little something
          </h3>
          <p className="text-[#67645E] font-medium my-4">
            Our new little sizes of Pineapple Refresh and Glazing Milk have
            arrived. Same nourishing formulas, just a little smaller. Get them
            solo or in the Travel Set to take your rhode routine on the go.
          </p>
          <button className="border lg:w-1/3 md:w-1/2 w-2/3 h-[35px] border-[#67645E] text-[#67645E] px-4 py-1 rounded-full hover:bg-white hover:text-gray-500 font-medium transition">
            THE TRAVEL SET
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelSection;
