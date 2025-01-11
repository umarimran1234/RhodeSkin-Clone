"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { auth, db } from "@/Config/firebaseConfig"; // Ensure firebaseConfig exports `db`
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  console.log({
    firstName,
    lastName,
    email,
    uid: 12323,
    createdAt: new Date(),
  });

  const handleRegister = async () => {
    if (!firstName || !lastName || !email || !password) {
      setError("All fields are required!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const userDoc = {
        firstName,
        lastName,
        email,
        uid: userCredential.user.uid,
        createdAt: new Date(),
      };
      await addDoc(collection(db, "users"), userDoc);

      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setSuccess("Account created successfully!");
      setError("");
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to create account.");
      setSuccess("");
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
              Create Account
            </h1>

            {/* Form Inputs */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none placeholder:text-[#67645E] placeholder:font-medium"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none placeholder:text-[#67645E] placeholder:font-medium"
                />
              </div>
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
              {error && <p className="text-red-500 text-center">{error}</p>}
              {success && (
                <p className="text-green-500 text-center">{success}</p>
              )}
              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={handleRegister}
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
