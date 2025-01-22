"use client";
import Slider from "../COMPONENT/slider.jsx";
import HtmlSlider from "../COMPONENT/htmlSlider.jsx";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useUser } from "@/authContaxt/authContxt.js";
import { useParams } from "next/navigation.js";
export default function Home() {
  const { products } = useUser();
  const { id } = useParams();
  return (
    <div>
      <HtmlSlider products={products} id={id} />
      {/* <Slider /> */}
    </div>
  );
}
