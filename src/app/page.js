"use client";
import GoodCallSection from "@/components/GoodCallSection";
import HeroSection from "@/components/HeroSection";
import HolidaySection from "@/components/HolidaySection";

import ProductSlider from "@/components/ProductSlider";

import RestoreSection from "@/components/RestoreSection";
import Slider from "@/components/SliderSection";
import { useUser } from "@/authContaxt/authContxt";
import TravelSection from "@/components/TravelSection";
import { AppleCardsCarouselDemo } from "@/components/ui/exemples/app-cards-carousel-exemple";
import { CarouselDemo } from "@/components/frontCruasal";
import ProductGrid from "@/components/productGrid";
export default function Home() {
  const { products } = useUser();
  console.log(products, "products");

  const hoodies = products.filter((product) => product.category === "HOODIE");
  const TSHIRTS = products.filter((product) => product.category === "T-SHIRT");
  const FULLSLIP = products.filter(
    (product) => product.category === "FULL-SLIP"
  );
  const HALFSLIP = products.filter(
    (product) => product.category === "HALF-SLIP"
  );
  return (
    <>
      <HeroSection />
      {/* <CarouselDemo products={products} /> */}
      <div className=" mt-6 "></div>
      {/* <ProductSlider /> */}

      <AppleCardsCarouselDemo products={products} />
      <GoodCallSection image={TSHIRTS} />

      <div className="container  mx-auto px-4">
        <div className="py-20">
          <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
            Other colors
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {TSHIRTS?.map((item) =>
            item?.colorImages?.map((images) => (
              <div key={item?.id}>
                <ProductGrid product={item} item={images} />
              </div>
            ))
          )}
        </div>
      </div>
      <GoodCallSection image={hoodies} />
      <div className="container  mx-auto px-4">
        <div className="py-20">
          <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
            Other colors
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {hoodies?.map((item) =>
            item?.colorImages?.map((images) => (
              <div key={item?.id}>
                <ProductGrid product={item} item={images} />
              </div>
            ))
          )}
        </div>
      </div>
      {/* <CarouselDemo products={hoodies} /> */}
      {/* <HolidaySection item={hoodies} /> */}
      {/* <TravelSection /> */}
      {/* <Slider /> */}
      {/* <RestoreSection /> */}
    </>
  );
}
