import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 container mx-auto rounded-xl text-[#67645E]">
      <div className="max-w-screen-xl mx-auto px-4 py-8 md:py-12">
        {/* Logo Section */}
        <Image
          src={"/rhode.svg"}
          width={1000}
          height={1000}
          alt="Rhode svg"
          className="mx-auto"
        />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-6 gap-4 border-t-2 pt-8 border-black font-medium">
          {/* Email Subscription Section */}
          <div className="md:col-span-2 border-r-2 border-black">
            <p className="">Join us on the rhode to an effortless glow.</p>
            <p className="mt-2 w-11/12">
              Glaze your inbox with tips, tricks & exclusive content from
              Hailey.
            </p>
            <div className="mt-4 w-11/12 flex items-center">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-2 border-r border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-gray-300 placeholder:text-[#67645E] placeholder:text-[18px]"
              />
              <button className="px-4 py-2 bg-white text-[#67645E] font-semibold rounded-r-md hover:bg-gray-700">
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
                <a href="#" className="hover:underline">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Rhode Futures
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Impact
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  VLOG
                </a>
              </li>
            </ul>
          </div>

          {/* Social Section */}
          <div>
            <h2 className="font-bold mb-4">SOCIAL</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline flex gap-2">
                  <Image
                    src={"/InstagramIcon.svg"}
                    width={1000}
                    height={1000}
                    alt="Youtube Icon "
                    className="w-4"
                  ></Image>
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline flex gap-2">
                  <Image
                    src={"/YoutubeIcon.svg"}
                    width={1000}
                    height={1000}
                    alt="Youtube Icon "
                    className="w-4"
                  ></Image>{" "}
                  YouTube
                </a>
              </li>
              <li>
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
              </li>
            </ul>
          </div>

          {/* Official Section */}
          <div>
            <h2 className="font-bold mb-4">OFFICIAL</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Accessibility
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Events
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h2 className="font-bold mb-4">SUPPORT</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  We’re here M-F 9am - 5pm PST.
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Drop us a note anytime:
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  hello@rhodeskin.com
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Do Not Sell or Share My Personal Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cookie Preferences
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  © rhode 2024
                </a>
              </li>
              <li>
                <Image
                  src={"/AfterPay.avif"}
                  width={1000}
                  height={1000}
                  alt="After Pay Image"
                ></Image>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-300 pt-4 text-center md:text-left text-sm">
          <p className="text-center">
            Country/region:{" "}
            <span className="font-semibold">United States (USD $)</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
