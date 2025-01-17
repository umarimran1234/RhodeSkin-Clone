const HeroSection = () => {
  return (
    <div className="container mx-auto">
      <div className="relative h-screen">
        <video
          className="absolute rounded-xl  top-0 left-0 w-full h-full object-cover"
          src="/HeroSectionVideo.mp4"
          autoPlay
          loop
          muted
        />
        <div className="absolute bottom-10 left-10 text-white">
          <h1 className="font-bold">zalmar muses</h1>
          <h2 className="text-[34px]">Meet Yoonji Bae.</h2>
          <button className="border w-2/3 h-[35px] px-4 py-1 rounded-full hover:bg-white hover:text-gray-500 font-medium transition">
            SHOP HER FAVES
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
