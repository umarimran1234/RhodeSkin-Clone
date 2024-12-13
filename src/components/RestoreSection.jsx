import Image from "next/image";
import React from "react";

const RestoreSection = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="flex gap-8">
        <div className="bg-[#efefef] w-2/3 shadow-md rounded-xl p-4">
          <h2 className="text-[34px] text-[#67645E] font-medium mb-4">
            TO RESTORE and NURTURE the skin you have now for lasting results
            that reveal themselves over time.
          </h2>
          <button className="text-xl text-[#67645E] rounded-xl border-2 font-bold mb-4">OUR VALUES</button>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-lg font-bold mb-2">mission</p>
              <p className="text-gray-500">...</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold mb-2">philanthropy</p>
              <p className="text-gray-500">...</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold mb-2">sustainability</p>
              <p className="text-gray-500">...</p>
            </div>
          </div>
        </div>
        <Image
          src="/RestoreSectionImg.webp"
          width={585}
          height={704}
          alt="Hailey Bieber"
          className="rounded-xl"
        />
      </div>
    </div>
  );
};

export default RestoreSection;
