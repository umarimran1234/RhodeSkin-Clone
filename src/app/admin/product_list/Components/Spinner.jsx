import React from "react";

const ZMLoader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="relative flex justify-center items-center">
        <div className="absolute text-8xl font-bold text-white animate-spin-slow">
          ZM
        </div>
        <div className="border-t-4 border-white border-solid rounded-full w-56 h-56 animate-spin"></div>
      </div>
    </div>
  );
};

export default ZMLoader;
