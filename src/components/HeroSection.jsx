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
        <div className="absolute   bottom-10 left-10 text-white">
          <h1 className="font-bold">ZALMAR STORE</h1>
          <h2 className="text-[34px] text-black ">
            STYLE THAT SPEAK YOUR LIFE STYLE.
          </h2>
          <button className="border w-1/3 h-[35px] text-black bg-white px-4 py-1 rounded-full hover:bg-black hover:text-white font-medium transition">
            SHOP HER FAVES
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
