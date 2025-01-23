import Link from "next/link";
import React from "react";

const HolidaySection = ({ item }) => {
  const image = item[0]?.image;
  return (
    <div className="">
      <div
        style={{
          backgroundImage: `url(${image})`,
          animation: {
            "spin-slow": "spin 3s linear infinite",
          },
          borderRadius: {
            lg: "var(--radius)",
            md: "calc(var(--radius) - 2px)",
            sm: "calc(var(--radius) - 4px)",
          },
          colors: {},
        }}
        className="  bg-center h-screen  flex justify-center items-end py-8"
      >
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
