import React from "react";
import { Navigate } from "react-router-dom";
import Loader from "./Loader";

const ProtectedRoute = ({ children }) => {
  // Check authentication (token-based)
  const token = localStorage.getItem("token");

  // Optional: show loader while checking (can extend later)
  if (token === null) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;