"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { auth } from "@/Config/firebaseConfig"; // Firebase configuration file import
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { FaSpinner } from "react-icons/fa6";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");
  const router = useRouter();
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Firebase authentication function
      const user = await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful! 🎉");
      console.log(user);
      router.push("/");
      localStorage.setItem("uuid", user.user.uid);
      // Navigate to dashboard or desired page
    } catch (err) {
      const cleanError = err.message.replace(/^Firebase:\s*/, "");
      // Show error message
      setError(cleanError || "Failed to log in. Please try again.");
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
            src="/zalmarLoginPAgeImage.jpg"
            alt="Skin Care"
            layout="fill"
            objectFit="cover"
            className="rounded-lg lg:rounded-none"
          />
        </div>

        {/* Right Section with Form */}
        <div className="flex justify-center items-center lg:w-1/2 w-full p-6 lg:p-12 bg-gray-100">
          <div className="w-full max-w-md">
            {/* Form Title */}
            <h1 className="text-2xl lg:text-5xl font-bold text-[#67645E] mb-6 text-center">
              Login
            </h1>

            {/* Error Message */}
            {error && (
              <div className="text-red-500 text-center mb-4">{error}</div>
            )}

            {/* Form Inputs */}
            <form className="space-y-4" onSubmit={handleLogin}>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none placeholder:text-[#67645E] placeholder:font-medium"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none placeholder:text-[#67645E] placeholder:font-medium"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="md:w-1/4 w-full py-1 rounded-full border border-gray-600 text-[#67645E] hover:bg-gray-200 transition text-lg font-medium"
                >
                  {loading ? "Signing In..." : "SIGN IN"}
                </button>
              </div>
            </form>

            {/* Additional Links */}
            <div className="mt-4 text-center space-y-2">
              <Link
                href="/account/forgotPassword"
                className="text-[#67645E] font-medium transition underline"
              >
                Forgot your password?
              </Link>
              <p className="text-[#67645E] font-medium">
                Don’t have an account?
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

export default LoginPage;
