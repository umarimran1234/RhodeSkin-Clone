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
import MonarchsMuse from "@/components/catagori";
export default function Home() {
  const { products } = useUser();
  console.log(products, "products");

  const hoodies = products.filter((product) => product.category === "HOODIE");
  const TSHIRTS = products.filter((product) => product.category === "T-SHIRT");
  const DROPSHOULDER = products.filter(
    (product) => product.category === "T-SHIRT"
  );

  const FOURPOCKET = products.filter(
    (product) => product.category === "FOUR-POCKET"
  );

  const FULLSLIP = products.filter(
    (product) => product.category === "FULL-SLIP"
  );
  const HALFSLIP = products.filter(
    (product) => product.category === "HALF-SLIP"
  );
  const TROUSERS = products.filter(
    (product) => product.category === "TROUSERS"
  );

  return (
    <>
      <HeroSection
        title={"Zalmar Store"}
        paragraph={"STYLE THAT SPEAK YOUR LIFE STYLE"}
        button={"HAPPY SHOPPING"}
      />
      {/* <CarouselDemo products={products} /> */}
      <div className=" mt-6 "></div>
      {/* <ProductSlider /> */}
      <MonarchsMuse products={products} />
      {/* <AppleCardsCarouselDemo products={products} /> */}
      <GoodCallSection image={HALFSLIP} />

      <div className="container  mx-auto px-4">
        <div className="py-20">
          {/* <h2 className="max-w-7xl pl-4 mx-auto text-5xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
            Other colors
          </h2> */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {HALFSLIP?.map((item) =>
            item?.colorImages?.map((images, index) => (
              <div key={item?.id}>
                <ProductGrid index={index} product={item} item={images} />
              </div>
            ))
          )}
        </div>
      </div>
      <GoodCallSection image={FULLSLIP} />

      <div className="container  mx-auto px-4">
        <div className="py-20">
          {/* <h2 className="max-w-7xl pl-4 mx-auto text-5xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
            Other colors
          </h2> */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {FULLSLIP?.map((item) =>
            item?.colorImages?.map((images, index) => (
              <div key={item?.id}>
                <ProductGrid index={index} product={item} item={images} />
              </div>
            ))
          )}
        </div>
      </div>
      <GoodCallSection image={TSHIRTS} />

      <div className="container  mx-auto px-4">
        <div className="py-20">
          {/* <h2 className="max-w-7xl pl-4 mx-auto text-5xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
            Other colors
          </h2> */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {TSHIRTS?.map((item) =>
            item?.colorImages?.map((images, index) => (
              <div key={item?.id}>
                <ProductGrid index={index} product={item} item={images} />
              </div>
            ))
          )}
        </div>
      </div>

      <GoodCallSection image={TROUSERS} />

      <div className="container  mx-auto px-4">
        <div className="py-20">
          {/* <h2 className="max-w-7xl pl-4 mx-auto text-5xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
      Other colors
    </h2> */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {TROUSERS?.map((item) =>
            item?.colorImages?.map((images, index) => (
              <div key={item?.id}>
                <ProductGrid index={index} product={item} item={images} />
              </div>
            ))
          )}
        </div>
      </div>

      <GoodCallSection image={hoodies} />
      <div className="container  mx-auto px-4">
        <div className="py-20">
          {/* <h2 className="max-w-7xl pl-4 mx-auto text-5xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
            Other colors
          </h2> */}
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
      <GoodCallSection image={FOURPOCKET} />
      <div className="container  mx-auto px-4">
        <div className="py-20">
          {/* <h2 className="max-w-7xl pl-4 mx-auto text-5xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
            Other colors
          </h2> */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {FOURPOCKET?.map((item) =>
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
