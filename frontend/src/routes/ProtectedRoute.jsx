import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // AuthContext-ൽ ഈ പേര് കൃത്യമായിരിക്കണം
import { Spinner } from "react-bootstrap";

const ProtectedRoute = () => {
  const { user, loading } = useAuth();

  // 1. Auth check നടന്നുകൊണ്ടിരിക്കുമ്പോൾ Spinner കാണിക്കുന്നു
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-white">
        <div className="text-center">
          <Spinner animation="grow" variant="primary" size="lg" />
          <p className="mt-3 fw-medium text-muted">Checking authentication...</p>
        </div>
      </div>
    );
  }

  // 2. യൂസർ ലോഗിൻ ചെയ്തിട്ടില്ലെങ്കിൽ ലോഗിൻ പേജിലേക്ക് വിടുന്നു
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 3. ലോഗിൻ സക്സസ് ആണെങ്കിൽ ഉള്ളിലെ പേജുകൾ (Outlet) ലോഡ് ചെയ്യുന്നു
  return <Outlet />;
};

export default ProtectedRoute;