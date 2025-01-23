import Link from "next/link";

const HeroSection = () => {
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
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl font-bold mb-4">ZALMAR STORE</h1>
        <h2 className="text-2xl md:text-[34px] text-white font-medium mb-6">
          STYLE THAT SPEAKS YOUR LIFE STYLE.
        </h2>
        <Link
          href={"/shop"}
          className="border w-auto px-6 py-3 text-black bg-white rounded-full hover:bg-black hover:text-white font-medium transition"
        >
          SHOP Now
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
