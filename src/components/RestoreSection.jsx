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
          <button className="text-lg text-[#67645E] border-[#67645E] rounded-3xl border-2 font-medium px-6 py-1 mb-4">
            OUR VALUES
          </button>
          <div className="flex flex-col mt-44 text-[#67645E] gap-4">
            <p className="text-[26px] border-t-[1px] border-[#67645E] font-bold mb-2">
              mission
            </p>
            <p className="text-[26px] border-t-[1px] border-[#67645E] font-bold mb-2">
              philanthropy
            </p>
            <p className="text-[26px] border-t-[1px] border-[#67645E] font-bold mb-2">
              sustainability
            </p>
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
