"use client";
import { motion } from "framer-motion"; // Import Framer Motion
import GoodCallSection from "@/components/GoodCallSection";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/productGrid";
import { useUser } from "@/authContaxt/authContxt";
import { AppleCardsCarouselDemo } from "@/components/ui/exemples/app-cards-carousel-exemple";

export default function Home() {
  const { products } = useUser();
  console.log(products, "products");

  const hoodies = products.filter((product) => product.category === "HOODIE");
  const TSHIRTS = products.filter((product) => product.category === "T-SHIRT");

  // Define animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Animated Sections */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <AppleCardsCarouselDemo products={products} />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <GoodCallSection image={TSHIRTS} />
      </motion.div>

      {/* T-Shirts Grid Section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-4"
      >
        <div className="py-20">
          <motion.h2
            variants={fadeInUp}
            className="max-w-7xl pl-4 mx-auto text-5xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans"
          >
            Other colors
          </motion.h2>
        </div>
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {TSHIRTS?.map((item) =>
            item?.colorImages?.map((images) => (
              <motion.div key={item?.id} variants={fadeInUp}>
                <ProductGrid product={item} item={images} />
              </motion.div>
            ))
          )}
        </motion.div>
      </motion.div>

      {/* Hoodies Section */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <GoodCallSection image={hoodies} />
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-4"
      >
        <div className="py-20">
          <motion.h2
            variants={fadeInUp}
            className="max-w-7xl pl-4 mx-auto text-5xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans"
          >
            Other colors
          </motion.h2>
        </div>
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {hoodies?.map((item) =>
            item?.colorImages?.map((images) => (
              <motion.div key={item?.id} variants={fadeInUp}>
                <ProductGrid product={item} item={images} />
              </motion.div>
            ))
          )}
        </motion.div>
      </motion.div>
    </>
  );
}
