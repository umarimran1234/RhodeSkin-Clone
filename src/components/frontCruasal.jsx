"use client";

import Carousel from "@/components/ui/carousel";
import { useUser } from "@/authContaxt/authContxt";
export function CarouselDemo({ products }) {
  // const { products } = useUser();

  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={products} />
    </div>
  );
}
