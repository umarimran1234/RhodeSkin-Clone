import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="max-w-screen-xl mx-auto px-4 py-8 md:py-12">
        {/* Logo Section */}
        <div className="text-center md:text-left">
          <h1 className="text-7xl md:text-8xl font-bold tracking-tight text-gray-800">
            rhode
          </h1>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Email Subscription Section */}
          <div className="md:col-span-1">
            <p className="text-sm">
              Join us on the rhode to an effortless glow.
            </p>
            <p className="text-sm mt-2">
              Glaze your inbox with tips, tricks & exclusive content from
              Hailey.
            </p>
            <div className="mt-4 flex items-center">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-gray-300"
              />
              <button className="px-4 py-2 bg-gray-800 text-white font-semibold rounded-r-md hover:bg-gray-700">
                SUBSCRIBE
              </button>
            </div>
            <p className="text-xs mt-2">
              By signing up, you agree to our Privacy Policy*.
            </p>
          </div>

          {/* Navigation Section */}
          <div className="md:col-span-1">
            <h2 className="font-semibold mb-4">NAVIGATE</h2>
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
          <div className="md:col-span-1">
            <h2 className="font-semibold mb-4">SOCIAL</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  YouTube
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  TikTok
                </a>
              </li>
            </ul>
          </div>

          {/* Official & Support Section */}
          <div className="md:col-span-1">
            <h2 className="font-semibold mb-4">OFFICIAL</h2>
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
            <h2 className="font-semibold mt-6 mb-4">SUPPORT</h2>
            <p className="text-sm">We’re here M-F 9am - 5pm PST.</p>
            <p className="text-sm mt-2">
              Drop us a note anytime:{" "}
              <a href="mailto:hello@rhodeskin.com" className="underline">
                hello@rhodeskin.com
              </a>
            </p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-300 pt-4 text-center md:text-left text-sm">
          <p>
            Country/region:{" "}
            <span className="font-semibold">United States (USD $)</span>
          </p>
          <p className="mt-2">© rhode 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
