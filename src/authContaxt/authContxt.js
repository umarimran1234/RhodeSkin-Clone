"use client";
import { auth } from "@/Config/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

import { getFirestore, onSnapshot } from "firebase/firestore";
import React, { createContext, useState, useContext, useEffect } from "react";
import { app } from "@/Config/firebaseConfig";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [idOfUser, setIdOfUser] = useState(null);
  const [cartItem, setCarItem] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLogin, setIsLoggedIn] = useState(false);
  const db = getFirestore(app);

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribeAuth(); 
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
  useEffect(() => {
    if (typeof window !== "undefined") {
      const userID = localStorage.getItem("uuid");
      if (userID) {
        setIdOfUser(userID);
      }
    }
  }, []);
  const getUserCart = async () => {
    if (idOfUser) {
      const cartRef = collection(db, "users", idOfUser, "cart");
      const cartSnapshot = await getDocs(cartRef);

      const cartItems = cartSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCarItem(cartItems);

      return cartItems;
    } else {
      console.log("User is not signed in");
      return [];
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        setCarItem,
        getUserCart,
        cartItem,
        products,
        isLogin,
        setIsLoggedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
