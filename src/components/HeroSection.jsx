import React from "react";

function HeroSection() {
  return (
    <div className="container mx-auto">
      <div className=" bg-center h-screen rounded-xl flex justify-center items-end py-8">
        <video
          className="absolute  top-0 left-0 w-full h-full object-cover z-0"
          src={require("../../public/DashboardVideo.mp4")}
          autoPlay
          loop
          muted
        ></video>
        <button className="border h-[35px] border-white text-white px-4 py-1 rounded-full hover:bg-white hover:text-gray-500 font-medium transition">
          THE HOLIDAY SHOP
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
