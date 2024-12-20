"use client";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`${
        show ? "translate-y-9 bg-[#67645E]" : " -translate-y-60 bg-[#67645E] "
      } bg-transparent fixed w-full top-5 z-10 transition-all duration-300 container mx-auto text-white font-bold`}
    >
      <div className="flex md:hidden justify-between items-center p-4">
        <a href="#futures" className="text-5xl lg:px-56">
          rhode
        </a>
        <button
          className="md:hidden block text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      <ul
        className={`${
          isMenuOpen ? "block bg-gray-50 text-gray-400" : "hidden"
        } md:flex md:flex-row flex-col space-y-2 md:items-center md:justify-center p-4 lg:space-x-10 md:space-x-7`}
      >
        <li>
          <a href="#shop">SHOP</a>
        </li>
        <li>
          <a href="#about">ABOUT</a>
        </li>
        <li>
          <a href="#futures">FUTURES</a>
        </li>
        <li className="hidden md:block lg:px-56">
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