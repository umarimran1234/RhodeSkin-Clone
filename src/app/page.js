"use client";
import GoodCallSection from "@/components/GoodCallSection";
import HeroSection from "@/components/HeroSection";
import HolidaySection from "@/components/HolidaySection";

import ProductSlider from "@/components/ProductSlider";

import RestoreSection from "@/components/RestoreSection";
import Slider from "@/components/SliderSection";
import { useUser } from "@/authContaxt/authContxt";
import TravelSection from "@/components/TravelSection";
// import { AppleCardsCarouselDemo } from "@/components/ui/exemples/app-cards-carousel-exemple";
import { CarouselDemo } from "@/components/frontCruasal";
export default function Home() {
  const { products } = useUser();
  console.log(products, "products");

  const hoodies = products.filter((product) => product.category === "HOODIE");
  return (
    <>
      <HeroSection />

      <CarouselDemo products={hoodies} />

      <CarouselDemo products={products} />
      {/* <ProductSlider /> */}
      {/* <AppleCardsCarouselDemo /> */}
      <GoodCallSection />
      <TravelSection />
      <HolidaySection />
      {/* <Slider /> */}
      {/* <RestoreSection /> */}
    </>
  );
}
