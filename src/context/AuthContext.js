
// AuthContext.js
import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({
    token: null,
    username: null,
  });

  const login = (data) => {
    setAuthData(data); // Set auth data after successful login
  };

  const logout = () => {
    setAuthData({ token: null, username: null }); // Clear auth data
  };

  return (
    <AuthContext.Provider value={{ authData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
