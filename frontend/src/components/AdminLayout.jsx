import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";

const AdminLayout = () => {
  return (
    <div className="admin-layout d-flex" style={{ minHeight: "100vh" }}>
      
      {/* --- Sidebar: Fixed on the left --- */}
      <div 
        className="sidebar-wrapper position-fixed top-0 start-0 h-100 shadow" 
        style={{ width: "260px", zIndex: 1050 }}
      >
        <AdminSidebar />
      </div>

      {/* --- Main Content Area: Pushed to the right --- */}
      <div 
        className="flex-grow-1 bg-light d-flex flex-column" 
        style={{ marginLeft: "260px", minWidth: 0 }}
      >
        {/* Top Navbar: Sticky to stay at the top during scroll */}
        <header className="sticky-top shadow-sm" style={{ zIndex: 1040 }}>
          <AdminNavbar />
        </header>

        {/* Page Content: Dashboard, Users, etc. load here */}
        <main className="p-4 flex-grow-1">
          <div className="container-fluid">
            <Outlet />
          </div>
        </main>

        {/* Footer (Optional) */}
        <footer className="py-3 px-4 bg-white border-top text-center text-muted small">
          &copy; 2026 MediFind Admin Panel
        </footer>
      </div>

      {/* Custom Styles for basic responsiveness */}
      <style>{`
        @media (max-width: 992px) {
          .sidebar-wrapper {
            transform: translateX(-100%); /* Mobile-il sidebar hide cheyyan */
            transition: transform 0.3s ease;
          }
          .flex-grow-1 {
            margin-left: 0 !important; /* Mobile-il content full width aakkunnu */
          }
          /* Pinne oru toggler button vechu sidebar show cheyyippikkam */
        }
      `}</style>
    </div>
  );
};

export default AdminLayout;