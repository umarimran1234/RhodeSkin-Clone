import HolidaySection from "@/components/HolidaySection";
import RestoreSection from "@/components/RestoreSection";
import Slider from "@/components/SliderSection";
import TravelSection from "@/components/TravelSection";

export default function Home() {
  return (
    <>
      <TravelSection />
      <HolidaySection />
      <Slider />
      <RestoreSection />
    </>
  );
}
