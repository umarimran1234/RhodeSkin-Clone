"use client";
import Slider from "../COMPONENT/slider.jsx";
import HtmlSlider from "../COMPONENT/htmlSlider.jsx";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useUser } from "@/authContaxt/authContxt.js";
import { useParams, useRouter } from "next/navigation.js";
import { useEffect } from "react";
import { auth } from "@/Config/firebaseConfig.js";
export default function Home() {
  const { products } = useUser();
  const { id } = useParams();
  const router = useRouter();

  return (
    <div>
      <HtmlSlider products={products} id={id} />
      {/* <Slider /> */}
    </div>
  );
}
