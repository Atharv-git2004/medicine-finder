import React, { createContext, useState, useEffect } from "react";

// Create context
export const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check token on app load
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      // Dummy user (replace with API later)
      setUser({
        name: "John Doe",
        email: "john@example.com",
      });
    }

    setLoading(false);
  }, []);

  // Login function
  const login = (userData) => {
    localStorage.setItem("token", "demo-token");
    setUser(userData);
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};