// components/Slider.js
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
// import { } from "swiper/element"
import { useState } from "react";

const Slider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const images = [
    "https://pagedone.io/asset/uploads/1700472379.png",
    "https://pagedone.io/asset/uploads/1711622397.png",
    "https://pagedone.io/asset/uploads/1711622408.png",
    "https://pagedone.io/asset/uploads/1711622419.png",
    "https://pagedone.io/asset/uploads/1711622437.png",
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="slider-box w-full h-full max-lg:mx-auto mx-0">
            {/* Main Slider */}
            <Swiper
              modules={[Navigation, Thumbs]}
              navigation
              thumbs={{ swiper: thumbsSwiper }}
              className="main-slide-carousel"
            >
              {images.map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="block">
                    <img
                      src={src}
                      alt={`Image ${index + 1}`}
                      className="rounded-2xl object-cover w-full"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Thumbnail Navigation */}
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              watchSlidesProgress
              className="nav-for-slider mt-6"
            >
              {images.map((src, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={src}
                    alt={`Thumbnail ${index + 1}`}
                    className="cursor-pointer rounded-xl border-2 border-transparent hover:border-indigo-600 transition-all duration-500 object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Product Details */}
          <div className="flex justify-center items-center">
            <div className="pro-detail w-full max-lg:max-w-[608px] lg:pl-8 xl:pl-16 max-lg:mx-auto max-lg:mt-8">
              <h2 className="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2">
                Yellow Summer Travel Bag
              </h2>
              <p className="text-base text-gray-500">ABS LUGGAGE</p>
              <div className="flex items-center mt-4">
                <h5 className="text-2xl font-semibold text-gray-900">
                  $199.00
                </h5>
                <span className="ml-3 text-lg text-indigo-600">30% off</span>
              </div>
              <button className="bg-amber-400 py-2 px-4 rounded-lg mt-6">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
