"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { auth } from "@/Config/firebaseConfig"; // Firebase configuration file import
import { sendPasswordResetEmail } from "firebase/auth";

const ForGotPAssword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);

    try {
      // Send password reset email
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent successfully! Check your inbox.");
    } catch (err) {
      // Show error message
      setError(err.message || "Failed to send reset email. Please try again.");
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };

  return (
    <div className="container mx-auto my-10">
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch min-h-screen bg-gray-50">
        {/* Left Section with Image */}
        <div className="relative lg:w-1/2 w-full h-80 lg:h-auto">
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
              Forgot Password
            </h1>

            {/* Success or Error Message */}
            {message && (
              <div className="text-green-500 text-center mb-4">{message}</div>
            )}
            {error && (
              <div className="text-red-500 text-center mb-4">{error}</div>
            )}

            {/* Form Inputs */}
            <form className="space-y-4" onSubmit={handleForgotPassword}>
              <div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none placeholder:text-[#67645E] placeholder:font-medium"
                  required
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="md:w-2/4 w-full py-1 rounded-full border border-gray-600 text-[#67645E] hover:bg-gray-200 transition text-lg font-medium"
                >
                  {loading ? "Sending..." : "Send Reset Email"}
                </button>
              </div>
            </form>

            {/* Additional Links */}
            <div className="mt-4 text-center space-y-2">
              <Link
                href="/account/login"
                className="text-[#67645E] font-medium transition underline"
              >
                Back to Login
              </Link>
              <p className="text-[#67645E] font-medium">
                Don’t have an account?{" "}
                <Link
                  href="/account/register"
                  className="font-semibold text-[#67645E] underline"
                >
                  Sign up!
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForGotPAssword;
