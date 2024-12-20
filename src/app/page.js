import GoodCallSection from "@/components/GoodCallSection";
import HeroSection from "@/components/HeroSection";
import HolidaySection from "@/components/HolidaySection";

import ProductSlider from "@/components/ProductSlider";

import RestoreSection from "@/components/RestoreSection";
import SideToSideSection from "@/components/SideToSideSection";
import Slider from "@/components/SliderSection";
import TravelSection from "@/components/TravelSection";
import UpperSection from "@/components/upperSection";

export default function Home() {
  return (
    <>
      <div className=" mb-3 ">
        <UpperSection />
      </div>
      <HeroSection />

      <ProductSlider />
      <GoodCallSection />
      <TravelSection />
      <HolidaySection />
      <Slider />
      <RestoreSection />
    </>
  );
}
