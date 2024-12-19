import GoodCallSection from "@/components/GoodCallSection";
import HolidaySection from "@/components/HolidaySection";
import RestoreSection from "@/components/RestoreSection";
import Slider from "@/components/SliderSection";
import TravelSection from "@/components/TravelSection";

export default function Home() {
  return (
    <>
      <GoodCallSection />
      <TravelSection />
      <HolidaySection />
      <Slider />
      <RestoreSection />
    </>
  );
}
