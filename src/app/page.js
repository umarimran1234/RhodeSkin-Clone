import GoodCallSection from "@/components/GoodCallSection";
import HeroSection from "@/components/HeroSection";
import HolidaySection from "@/components/HolidaySection";

import ProductSlider from "@/components/ProductSlider";

import RestoreSection from "@/components/RestoreSection";
import Slider from "@/components/SliderSection";
import TravelSection from "@/components/TravelSection";

export default function Home() {
  return (
    <>
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
