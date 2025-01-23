import Link from "next/link";
import { FaArrowDown } from "react-icons/fa6";

const HeroSection = ({ title, paragraph, button }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/HeroSectionVideo.mp4"
        autoPlay
        loop
        muted
      />

      {/* Centered Content */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <h2 className="text-2xl md:text-[34px] text-white  font-medium mb-6">
          {paragraph}
        </h2>
        <Link
          href={"/shop"}
          className=" w-auto px-6 flex items-center border text-sm  justify-center gap-4  py-3 text-white    font-medium underline transition"
        >
          {button} <FaArrowDown className=" underline " />
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
