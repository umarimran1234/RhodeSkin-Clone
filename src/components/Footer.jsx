import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="text-white    bg-black">
      <div className="max-w-screen-xl mx-auto px-4 py-8 md:py-12">
        {/* Logo Section */}
        {/* <Image
          src={"/zalmarsvg.svg"}
          width={1000}
          height={1000}
          alt="Rhode svg"
          className="mx-auto"
        /> */}
        <div className="flex justify-center items-center ">
          <h1 className=" text-white text-7xl lg:text-9xl  ">
            <span className=" text-white font-bold "> zal</span>mar
          </h1>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-6 md:grid-cols-3 gap-4 border-t-2 pt-8 border-black font-medium">
          {/* Email Subscription Section */}
          <div className="md:col-span-2 md:border-r-2 border-white">
            <p className="">Join us on the journey to effortless style.</p>
            <p className="mt-2 w-11/12">
              Elevate your inbox with fashion tips, styling tricks, and
              exclusive content from Zalmar.
            </p>
            <div className="mt-4 md:w-11/12 flex md:flex-row flex-col md:items-center">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 text-black px-4 py-2 border-r border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-gray-300 placeholder:text-[#67645E] placeholder:text-[18px] md:placeholder:text-left placeholder:text-center"
              />
              <button className="px-4 py-2 md:mt-0 mt-2 bg-white text-[#67645E] font-semibold rounded-r-md hover:bg-gray-700">
                SUBSCRIBE
              </button>
            </div>
            <p className="mt-2 text-[#67645E]">
              By signing up, you agree to our Privacy Policy*.
            </p>
          </div>

          {/* Navigation Section */}
          <div>
            <h2 className="font-bold mb-4">NAVIGATE</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Shop
                </a>
              </li>
              <li>
                <a href="/account/login" className="hover:underline">
                  About
                </a>
              </li>

              {/* <li>
                <a href="/account/login" className="hover:underline">
                  Account
                </a>
              </li> */}

              <li>
                <Link href="/contact_us" className="hover:underline">
                  Contact us
                </Link>
              </li>
              {/* <li>
                <a href="#" className="hover:underline">
                  Impact
                </a>
              </li> */}
              {/* <li>
                <a href="#" className="hover:underline">
                  VLOG
                </a>
              </li> */}
            </ul>
          </div>

          {/* Social Section */}
          <div>
            <h2 className="font-bold mb-4">SOCIAL</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://www.instagram.com/zalmar_store"
                  className="hover:underline flex gap-2"
                >
                  <Image
                    src={"/InstagramIcon.svg"}
                    width={1000}
                    height={1000}
                    alt="Youtube Icon "
                    className="w-4"
                  ></Image>
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.facebook.com/share/1EzPKRy7SN/"
                  className="hover:underline items-center  flex gap-2"
                >
                  {/* <Image
                    src={"/YoutubeIcon.svg"}
                    width={1000}
                    height={1000}
                    alt="Youtube Icon "
                    className="w-4"
                  ></Image> */}
                  <FaFacebook />
                  Facebook
                </Link>
              </li>
              {/* <li>
                <a href="#" className="hover:underline flex gap-2">
                  <Image
                    src={"/TiktokIcon.svg"}
                    width={1000}
                    height={1000}
                    alt="Youtube Icon "
                    className="w-4"
                  ></Image>
                  TikTok
                </a>
              </li> */}
            </ul>
          </div>

          {/* Official Section */}
          <div>
            <h2 className="font-bold mb-4">OFFICIAL</h2>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="hover:underline">
                  Privacy
                </a>
              </li>
              {/* <li>
                <Link href="/" className="hover:underline">
                  Terms
                </Link>
              </li> */}
              <li>
                <a href="#" className="hover:underline">
                  Accessibility
                </a>
              </li>
              <li>
                <a href="/FAQ" className="hover:underline">
                  FAQ
                </a>
              </li>
              {/* <li>
                <Link href="/contact_us" className="hover:underline">
                  Contact
                </Link>
              </li> */}
              {/* <li>
                <a href="#" className="hover:underline">
                  Events
                </a>
              </li> */}
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h2 className="font-bold mb-4">SUPPORT</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  We’re here 24 hours
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Drop us a note anytime:
                </a>
              </li>
              <li>
                <a
                  href="mailto:Storezalmar@gmail.com?subject=Hello%20Zalmar&body=I%20would%20like%20to%20know%20more%20about%20your%20products."
                  className="hover:underline"
                >
                  Storezalmar@gmail.com
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/+923292299694"
                  className="hover:underline"
                >
                  +92 329 2299694
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cookie Preferences
                </a>
              </li>
              <li>
                <Link
                  href="http://code-sphare-com.vercel.app/"
                  className="hover:underline"
                >
                  © codesphare Innovation {new Date().getFullYear()}
                </Link>
              </li>
              <li className="flex justify-start lg:justify-center items-center">
                <Image
                  src={"/zalmarlogo.jpg"}
                  width={1000}
                  height={1000}
                  alt="After Pay Image"
                ></Image>
                {/* <h1 className=" text-[9rem] "> ZM </h1> */}
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-300 pt-4 text-center md:text-left text-sm">
          <p className="text-center hover:underline ">
            © {""}
            <Link
              href={"https://code-sphare-com.vercel.app/"}
              className="font-semibold"
            >
              codesphare Innovation {new Date().getFullYear()}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
