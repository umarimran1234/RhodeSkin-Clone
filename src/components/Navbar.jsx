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
        show ? "block" : "hidden"
      } bg-transparent fixed w-full top-0 z-10 transition-all duration-300 container mx-auto text-white font-bold`}
    >
      <ul className="flex items-center justify-center p-4 space-x-10">
        <li>
          <a href="#shop">SHOP</a>
        </li>
        <li>
          <a href="#about">ABOUT</a>
        </li>
        <li>
          <a href="#futures">FUTURES</a>
        </li>
        <li className="px-56">
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
