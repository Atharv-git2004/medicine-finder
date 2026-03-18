import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Global Auth State
import { Spinner } from "react-bootstrap";

const SellerRoute = () => {
  const { user, loading } = useAuth();

  // 1. Auth status loading aanengil oru spinner kaanikkum
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-white">
        <div className="text-center">
          <Spinner animation="border" variant="success" />
          <p className="mt-3 fw-bold text-muted">Verifying Pharmacy Access...</p>
        </div>
      </div>
    );
  }

  // 2. User login cheythittundo ennum role 'seller' aano ennum check cheyyunnu
  // Seller allenkil login page-lekk redirect cheyyikkum
  if (!user || user.role !== "seller") {
    console.warn("Access denied. Sellers only area.");
    return <Navigate to="/login" replace />;
  }

  // 3. User 'seller' aanengil SellerLayout-um athile pages-um load aakum
  return <Outlet />;
};

export default SellerRoute;