import Link from "next/link";
import React from "react";

const HolidaySection = () => {
  return (
    <div className="container mx-auto">
      <div className="bg-holiday-section-img bg-center h-screen rounded-xl flex justify-center items-end py-8">
        <Link
          href={"/shop"}
          className="border h-[35px] border-white text-white px-4 py-1 rounded-full hover:bg-white hover:text-gray-500 font-medium transition"
        >
          THE SHOP
        </Link>
      </div>
    </div>
  );
};

export default HolidaySection;
