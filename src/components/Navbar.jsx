"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  MdDelete,
  MdOutlineAddShoppingCart,
  MdShoppingCart,
} from "react-icons/md";
import { Ring } from "react-css-spinners/dist/Ring";
import { deleteFromCart } from "@/lib/cartUtils";
import { auth } from "@/Config/firebaseConfig";
import { useRouter } from "next/navigation";
import { useUser } from "@/authContaxt/authContxt";
import Image from "next/image";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [userid, setUserId] = useState();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState();
  const Router = useRouter();
  const { cartItem, getUserCart } = useUser();

  const total = cartItem?.reduce((acc, item) => acc + item?.price, 0);

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-overlay") {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    // Re-check for UUID if necessary
    if (typeof window !== "undefined") {
      const uuid = localStorage.getItem("uuid");
      setUserId(uuid);
      setIsLoggedIn(!!uuid);
    }
  }, [userid]);

  const handlDeleteCart = async (userid, itemId) => {
    try {
      if (!userid) throw new Error("User ID not available");
      await deleteFromCart(userid, itemId);
      await getUserCart();
    } catch (error) {
      console.error("Error deleting cart item:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      localStorage.removeItem("uuid");
      Router.push("/account/login");
      console.log("User logged out");
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }

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
          show ? " -translate-y-7 bg-black" : "translate-y-7 bg-black"
        } fixed w-full   z-50 top-7  transition-all duration-300   font-bold ${
          isScrolled
            ? "bg-black text-white"
            : "bg-transparent  border-b border-white bg-opacity-40   text-white "
        }`}
      >
        <div className="flex md:hidden justify-between items-center p-4">
          <Link href="/" className="text-5xl lg:px-56">
            zal<span className=" font-light ">mar</span>
          </Link>
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
          {isLoggedIn === true ? (
            <li>
              <button onClick={handleLogout}>LOGOUT</button>
            </li>
          ) : (
            <li>
              <Link href="/account/login">ACCOUNT</Link>
            </li>
          )}
          <li className=" w-full ">
            <Link href="#cart" onClick={() => setIsOpen(true)}>
              CART ({cartItem?.length})
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

              {/* Suggested Product */}
              <div className="p-4 bg-white rounded-lg shadow-md">
                <p className="text-sm text-gray-500">
                  Complete your {"  "}
                  <span className="font-semibold">Purchasing</span>
                </p>
                {cartItem?.length !== 0 ? (
                  cartItem?.map((item, index) => (
                    <div
                      key={item?.id || index} // Ensure a unique key is provided
                      className="flex items-center justify-between mt-4"
                    >
                      <div className="flex items-center space-x-4 w-full  ">
                        <div className="h-12 w-12 bg-gray-200 rounded">
                          <Image
                            alt="productITem"
                            width={100}
                            height={100}
                            src={item?.imageUrl}
                          />
                        </div>
                        <p className="font-medium text-black text-sm ">
                          {item?.productName}
                        </p>
                      </div>
                      <div className="flex items-center w-full space-x-2">
                        <button
                          style={{ width: "fit-content" }}
                          className="bg-black text-white text-sm px-4 w-full py-2 rounded"
                        >
                          {item?.price} rs
                        </button>
                        <button
                          onClick={() => handlDeleteCart(userid, item?.id)}
                          className="bg-black  text-white text-sm px-4 py-2 rounded flex items-center justify-center"
                        >
                          <MdDelete />
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center mb-52">
                    <p className="text-gray-700">
                      Your cart is currently empty
                    </p>
                    <div className="mt-4 h-1 w-32 bg-gray-300 mx-auto"></div>
                  </div>
                )}
              </div>

              {/* Subtotal and Checkout */}
              <div className="space-y-2 ">
                <p className="text-sm text-gray-500">
                  TOTAL <span className="font-medium"> {total} RS </span>
                </p>
                {/* <p className="text-xs text-gray-400">
                  *shipping, taxes, and discounts calculated at checkout.
                </p> */}
                <Link href={"/checkout"}>
                  <button className="w-full mt-3 bg-black text-white py-3 rounded text-sm font-medium hover:bg-gray-800">
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
