"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdOutlineAddShoppingCart, MdShoppingCart } from "react-icons/md";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-overlay") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      // Change navbar visibility on scroll direction
      if (window.scrollY < lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }

      // Check if user has scrolled from the top
      if (window?.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
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
    <>
      <nav
        className={`${
          show ? " bg-black" : "translate-y-7 bg-black"
        } fixed w-full  z-50 top-5  transition-all duration-300 container mx-auto font-bold ${
          isScrolled
            ? "bg-black text-white"
            : "bg-black bg-opacity-40   text-white "
        }`}
      >
        <div className="flex md:hidden justify-between items-center p-4">
          <a href="#futures" className="text-5xl lg:px-56">
            zal<span className=" font-light ">mar</span>
          </a>
          <div className="flex items-center gap-4">
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
            <button className="flex  ">
              <MdShoppingCart size={20} cursor={"pointer"} />
            </button>
          </div>
        </div>
        <ul
          className={`${
            isMenuOpen ? "block bg-gray-50 text-gray-400" : "hidden"
          } md:flex md:flex-row flex-col space-y-2 md:items-center md:justify-center p-4 lg:space-x-10 md:space-x-7`}
        >
          <li className="mt-2">
            <Link href="/shop">SHOP</Link>
          </li>
          <li>
            <Link href="/about">ABOUT</Link>
          </li>
          <li className=" w-full ">
            <Link href="/OtherModules"> ARTICLES </Link>
          </li>
          <li className="hidden md:block lg:px-56">
            <Link href="/" className="text-5xl">
              <span className="">zal</span>
              <span className="font-light">mar</span>
            </Link>
          </li>
          <li>
            <Link href="#search"> MODULES </Link>
          </li>
          <li>
            <Link href="/account/login">ACCOUNT</Link>
          </li>
          <li className=" w-full ">
            <Link href="#cart" onClick={() => setIsOpen(true)}>
              CART (0)
            </Link>
          </li>
        </ul>
      </nav>
      {isOpen && (
        <div
          id="modal-overlay"
          onClick={handleOutsideClick}
          className="fixed  inset-0 z-50 "
        >
          <div className="fixed right-0 top-0 h-full w-full max-w-md bg-gray-50 transform transition-transform translate-x-0 p-6 shadow-lg z-50 sm:w-96 overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>

            {/* Cart Content */}
            <div className="space-y-6">
              {/* Empty Cart State */}
              <div className="text-center mb-52">
                <p className="text-gray-700">Your cart is currently empty</p>
                <div className="mt-4 h-1 w-32 bg-gray-300 mx-auto"></div>
                <p className="mt-2 text-sm text-gray-500">
                  add <span className="font-semibold">$45.00</span> more for
                  <span className="font-semibold"> FREE shipping</span>
                </p>
              </div>

              {/* Suggested Product */}
              <div className="p-4 bg-white rounded-lg shadow-md">
                <p className="text-sm text-gray-500">
                  Complete your rhode{" "}
                  <span className="font-semibold">ROUTINE</span>
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 bg-gray-200 rounded"></div>
                    <p className="font-medium text-gray-700">
                      POCKET BLUSH PIGGY
                    </p>
                  </div>
                  <button className="bg-[#67645E] text-white text-sm px-4 py-2 rounded">
                    ADD - $24.00
                  </button>
                </div>
              </div>

              {/* Subtotal and Checkout */}
              <div className="space-y-2">
                <p className="text-sm text-gray-500">
                  subtotal <span className="font-medium">$0.00</span>
                </p>
                <p className="text-xs text-gray-400">
                  *shipping, taxes, and discounts calculated at checkout.
                </p>
                <Link href={"/checkout"}>
                  <button className="w-full bg-[#67645E] text-white py-3 rounded text-sm font-medium hover:bg-gray-800">
                    CHECKOUT
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
