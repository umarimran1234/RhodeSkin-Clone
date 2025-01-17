import Image from "next/image";
import React from "react";

function Page() {
  return (
    <>
      <div className="container mx-auto">
        <div className="relative h-screen">
          <video
            className="absolute rounded-xl top-0 left-0 w-full h-full object-cover"
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
      <div className="container  bg-[#f1f0ed] mx-auto my-3 rounded-lg ">
        <div className=" bg-center  h-full rounded-xl flex flex-col justify-start gap-4 items-center py-8">
          <h1 className=" text-black font-bold text-2xl "> A NOTE FROM US </h1>
          <p
            className="flex text-center  lg:mx-[20rem] mx-4 lg:text-2xl  "
            style={{ lineHeight: "2.2rem" }}
          >
            Our journey began with a vision to embrace individuality and
            personal style, which inspired us to create Zalmar. Every piece in
            our collection tells a story – a story of comfort, elegance, and a
            connection to your unique sense of fashion. At Zalmar, our mission
            is not just to make clothes but to create experiences that stay with
            you. Designed to suit every occasion, our pieces are crafted to
            enhance your confidence and make you feel your best every day. We
            hope Zalmar’s timeless designs become an essential part of your
            wardrobe, bringing joy to your days and celebrating your
            individuality. Zalmar – Made for you, for every moment.
          </p>
        </div>
      </div>
      <div className="container  bg-[#f1f0ed] mx-auto my-3 rounded-lg ">
        <div className=" bg-center  h-screen rounded-xl flex flex-col justify-start gap-4 items-center py-8">
          <h1 className=" text-black font-bold text-2xl mb-4  my-4 ">
            MEET THE OWNERS
          </h1>
          <p className="flex text-center  lg:mx-[13rem] mx-4   ">
            Our Zalmar Design Advisory Board consists of celebrated experts in
            fashion and textile innovation. Guided by cutting-edge trends and
            craftsmanship, they shape our collections from the first sketch to
            the final stitch, ensuring every piece embodies style, comfort, and
            quality.
          </p>
          <div className=" flex lg:flex-row flex-col gap-12 justify-between items-end">
            <div className="flex flex-col items-center ">
              <Image
                src={"/Anzal.jpeg"}
                className="rounded"
                width={400}
                height={400}
              />
              <h1 className=" text-lg uppercase "> Anzal Shaikh </h1>
              <p></p>
            </div>
            <div className="flex flex-col items-center ">
              <Image
                src={"/umar.png"}
                className="rounded"
                width={400}
                height={400}
              />
              <h1 className=" text-lg uppercase "> Muhammad Umar Imran </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
