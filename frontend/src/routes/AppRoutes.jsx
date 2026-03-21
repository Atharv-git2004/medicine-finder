import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// --- Public & User Pages ---
import Home from "../pages/Home";
import SearchResults from "../pages/SearchResults";
import PharmacyDetails from "../pages/PharmacyDetails";
import Auth from "../pages/Auth";
import Profile from "../pages/Profile";
import Reservations from "../pages/Reservations";
import NotFound from "../pages/NotFound";

// --- Admin Pages ---
import AdminLayout from "../components/AdminLayout";
import AdminDashboard from "../pages/admin/AdminDashboard";
import ManageSellers from "../pages/admin/ManageSellers";
import ManageUsers from "../pages/admin/ManageUsers";
import AdminSettings from "../pages/admin/AdminSettings";

// --- Seller Pages ---
import SellerLayout from "../components/SellerLayout";
import SellerDashboard from "../pages/seller/SellerDashboard";
import ManageInventory from "../pages/seller/ManageInventory";
import ViewReservations from "../pages/seller/ViewReservations";
import StoreProfile from "../pages/seller/StoreProfile";
// പുതിയതായി ആഡ് ചെയ്ത പേജുകൾ താഴെ
import AddMedicine from "../pages/seller/AddMedicine"; 
import OrderHistory from "../pages/seller/OrderHistory";
import Settings from "../pages/seller/Settings";

// --- Route Protection Components ---
import ProtectedRoute from "./ProtectedRoute";
import AdminRoute from "./AdminRoute"; 
import SellerRoute from "./SellerRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* --- 1. Public Routes --- */}
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/pharmacy/:id" element={<PharmacyDetails />} />
      <Route path="/login" element={<Auth />} />
      <Route path="/register" element={<Auth />} />

      {/* --- 2. Protected User Routes (Customer) --- */}
      <Route element={<ProtectedRoute />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/reservations" element={<Reservations />} />
      </Route>

      {/* --- 3. Protected Admin Routes --- */}
      <Route element={<AdminRoute />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="sellers" element={<ManageSellers />} />
          <Route path="users" element={<ManageUsers />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
      </Route>

      {/* --- 4. Protected Seller Routes (Fixed 404) --- */}
      <Route element={<SellerRoute />}>
        <Route path="/seller" element={<SellerLayout />}>
          <Route index element={<Navigate to="/seller/dashboard" replace />} />
          <Route path="dashboard" element={<SellerDashboard />} />
          <Route path="inventory" element={<ManageInventory />} />
          
          {/* Missing routes ആഡ് ചെയ്തു */}
          <Route path="add-medicine" element={<AddMedicine />} />
          <Route path="history" element={<OrderHistory />} />
          <Route path="settings" element={<Settings />} />
          
          <Route path="reservations" element={<ViewReservations />} />
          <Route path="profile" element={<StoreProfile />} />
        </Route>
      </Route>

      {/* --- 5. Fallback (404) --- */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;