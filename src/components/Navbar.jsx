"use client";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        show ? "translate-y-9 bg-[#67645E]" : " -translate-y-60 bg-[#67645E] "
      } bg-transparent fixed w-full top-16 z-10 transition-all duration-300 container mx-auto text-white font-bold`}
    >
      <ul className="flex md:flex-row flex-col space-y-2 md:space-y-0 md:items-center md:justify-center items-end p-4 lg:space-x-10 md:space-x-7">
        <li>
          <a href="#shop">SHOP</a>
        </li>
        <li>
          <a href="#about">ABOUT</a>
        </li>
        <li>
          <a href="#futures">FUTURES</a>
        </li>
        <li className="lg:px-56">
          <a href="#futures" className="text-5xl">
            rhode
          </a>
        </li>
        <li>
          <a href="#search">SEARCH</a>
        </li>
        <li>
          <a href="#account">ACCOUNT</a>
        </li>
        <li>
          <a href="#cart">CART (0)</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
