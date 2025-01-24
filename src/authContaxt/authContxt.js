"use client";
import { auth } from "@/Config/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

import { getFirestore, onSnapshot } from "firebase/firestore";
import React, { createContext, useState, useContext, useEffect } from "react";
import { app } from "@/Config/firebaseConfig";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cartItem, setCarItem] = useState([]);
  const [products, setProducts] = useState([]);
  const db = getFirestore(app);

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribeAuth(); // Cleanup on unmount
  }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "products"), (snapshot) => {
      const fetchedProducts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(fetchedProducts);
    });

    return () => unsubscribe();
  }, [db]);
  useEffect(() => {
    if (user) {
      getUserCart();
    } else {
      setCarItem([]);
    }
  }, [user]);
  const getUserCart = async () => {
    const user = localStorage.getItem("uuid");

    if (user) {
      const cartRef = collection(db, "users", user, "cart");
      const cartSnapshot = await getDocs(cartRef);

      const cartItems = cartSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCarItem(cartItems);
      console.log("User's Cart Items:", cartItems);
      return cartItems;
    } else {
      console.log("User is not signed in");
      return [];
    }
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, setCarItem, getUserCart, cartItem, products }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
