"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const GoodCallSection = ({ image }) => {
  const imageSrc = image[0]?.colorImages[1];
  const navigation = useRouter();

  const handleNavigate = () => {
    navigation.push(`/product_view/${image[0]?.id}`);
  };

  const Heading =
    image[0]?.category === "HOODIE" ? "Winter Collection" : "T-Shirts";
  const para =
    image[0]?.category === "HOODIE"
      ? "Spend Winter with Zalmar"
      : "Wrap Yourself in Classic Comfort";

  // Animation Variants
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const backgroundVariant = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  const buttonVariant = {
    hover: { scale: 1.1, transition: { type: "spring", stiffness: 300 } },
  };

  // useInView Hook for Scroll Trigger
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.2, // 20% of the section should be visible to trigger
  });

  return (
    <div
      ref={ref}
      className="relative mt-3 h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Scroll Animation */}
      <motion.div
        className="absolute w-full h-full"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={backgroundVariant}
      >
        <Image
          src={imageSrc || "/placeholder.jpg"}
          alt="Premium Banner"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </motion.div>

      {/* Text Overlay with Scroll Animation */}
      <motion.div
        className="absolute text-center text-white"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={textVariant}
      >
        <h4 className="text-sm md:text-lg font-light tracking-wider uppercase">
          {image[0]?.name}
        </h4>
        <h1 className="uppercase text-4xl md:text-6xl font-bold my-2">
          {Heading}
        </h1>
        <p className="text-base md:text-lg font-medium">{para}</p>
        <motion.button
          className="mt-5 px-6 py-3 bg-white text-black font-bold uppercase rounded-lg shadow-lg hover:bg-gray-200"
          variants={buttonVariant}
          whileHover="hover"
          onClick={handleNavigate}
        >
          Explore Now
        </motion.button>
      </motion.div>
    </div>
  );
};

export default GoodCallSection;
