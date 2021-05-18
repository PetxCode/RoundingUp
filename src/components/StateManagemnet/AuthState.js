import React, { useState, useEffect, createContext } from "react";
import { app } from "../../base";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [activeUser, setActiveUser] = useState([]);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setActiveUser(user);
    });
  });

  return (
    <AuthContext.Provider value={{ mgs: "say Hello", activeUser }}>
      {children}
    </AuthContext.Provider>
  );
};
