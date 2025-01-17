"use client";
import { auth } from "@/Config/firebaseConfig";
import React, { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [uuid, setUid] = useState();
  useEffect(() => {
    setUser(auth.currentUser);
  }, [user, auth]);
  console.log(user);

  return (
    <UserContext.Provider value={{ user, setUser, uuid }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
