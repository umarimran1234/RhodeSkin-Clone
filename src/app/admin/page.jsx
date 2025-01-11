"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/Config/firebaseConfig";
function Page() {
  const [email, setEmail] = useState();
  const [Password, setPassword] = useState();

  const [error, setError] = useState("");
  const handleSubmit = async () => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, Password);
      alert(res);
    } catch (error) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      {/* Right Section with Form */}
      <div className="flex justify-center items-center lg:w-1/2 w-full p-6 lg:p-12 bg-gray-100">
        <div className="w-full max-w-md">
          {/* Form Title */}
          <h1 className="text-2xl lg:text-5xl font-bold text-[#67645E] mb-6 text-center">
            Enter Admin Email and Password
          </h1>

          {/* Form Inputs */}
          <form className="space-y-4">
            <div>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                value={email}
                placeholder="Email"
                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none placeholder:text-[#67645E] placeholder:font-medium"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={Password}
                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none placeholder:text-[#67645E] placeholder:font-medium"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                onClick={handleSubmit}
                className="md:w-1/4 w-full py-1 rounded-full border border-gray-600 text-[#67645E] hover:bg-gray-200 transition text-lg font-medium"
              >
                Enter
              </button>
            </div>
          </form>

          {/* Additional Links */}
        </div>
      </div>
    </div>
  );
}

export default Page;
