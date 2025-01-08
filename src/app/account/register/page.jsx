import React from "react";
import Image from "next/image";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch min-h-screen bg-gray-50">
        {/* Left Section with Image */}
        <div className="relative lg:w-1/2 w-full h-80 lg:h-auto">
          {/* Replace '/path-to-your-image.jpg' with the actual image URL */}
          <Image
            src="/LoginImg.webp"
            alt="Skin Care"
            layout="fill"
            objectFit="cover"
            className="rounded-lg lg:rounded-none"
          />
          <div className="absolute top-[55%] left-8 text-white font-semibold text-xl lg:text-[34px]">
            It’s time to invest in your SKIN.
          </div>
        </div>

        {/* Right Section with Form */}
        <div className="flex justify-center items-center lg:w-1/2 w-full p-6 lg:p-12 bg-gray-100">
          <div className="w-full max-w-md">
            {/* Form Title */}
            <h1 className="text-2xl lg:text-5xl font-bold text-[#67645E] mb-6 text-center">
              Create Account
            </h1>

            {/* Form Inputs */}
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none placeholder:text-[#67645E] placeholder:font-medium"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none placeholder:text-[#67645E] placeholder:font-medium"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none placeholder:text-[#67645E] placeholder:font-medium"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none placeholder:text-[#67645E] placeholder:font-medium"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="button"
                  className="md:w-1/4 w-full py-1 rounded-full border border-gray-600 text-[#67645E] hover:bg-gray-200 transition text-lg font-medium"
                >
                  REGISTER
                </button>
              </div>
            </form>

            {/* Additional Links */}
            <div className="mt-4 text-center space-y-2">
              <p className="text-[#67645E] font-medium">
                Already have an account?{" "}
                <Link
                  href="/account/login"
                  className="font-semibold text-[#67645E] underline"
                >
                  Sign in!
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
