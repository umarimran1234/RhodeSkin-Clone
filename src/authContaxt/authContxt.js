"use client";
import { auth } from "@/Config/firebaseConfig";
import { collection, getFirestore, onSnapshot } from "firebase/firestore";
import React, { createContext, useState, useContext, useEffect } from "react";
import { app } from "@/Config/firebaseConfig";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribeAuth(); // Cleanup on unmount
  }, []);

  const db = getFirestore(app);

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

  return (
    <UserContext.Provider value={{ user, setUser, products }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
