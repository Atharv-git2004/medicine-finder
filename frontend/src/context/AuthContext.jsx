import React, { createContext, useState, useEffect, useContext } from "react";

// 1. Context Create ചെയ്യുന്നു
export const AuthContext = createContext();

// 2. Custom Hook - Protected Routes-ൽ ഉപയോഗിക്കാൻ
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (token) {
      if (storedUser) {
        // ശരിക്കുള്ള യൂസർ ഡാറ്റ ഉണ്ടെങ്കിൽ അത് സെറ്റ് ചെയ്യുന്നു
        setUser(JSON.parse(storedUser));
      } else {
        // താൽക്കാലികമായി അഡ്മിൻ പേജിൽ കയറാൻ വേണ്ടി മാത്രം (Testing Only)
        // ബാക്കെൻഡ് വരുമ്പോൾ ഇത് ഡിലീറ്റ് ചെയ്യണം
        const adminTestUser = {
          name: "Atharv P",
          email: "admin@medifind.com",
          role: "admin", 
        };
        setUser(adminTestUser);
        localStorage.setItem("user", JSON.stringify(adminTestUser));
      }
    }

    setLoading(false);
  }, []);

  // Login Function
  const login = (userData, token) => {
    localStorage.setItem("token", token || "demo-token");
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  // Logout Function
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
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