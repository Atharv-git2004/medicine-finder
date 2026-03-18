import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; 
import { Spinner } from "react-bootstrap";

const AdminRoute = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
          <p className="mt-3 fw-bold text-muted">Authenticating Admin...</p>
        </div>
      </div>
    );
  }


  if (!user || user.role !== "admin") {
    console.warn("Unauthorized access attempt to Admin Dashboard.");
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default AdminRoute;