import React from "react";
import { Outlet } from "react-router-dom";
import SellerSidebar from "./SellerSidebar";
import SellerNavbar from "./SellerNavbar";

const SellerLayout = () => {
  return (
    <div className="seller-layout d-flex" style={{ minHeight: "100vh" }}>
      
      {/* --- Sidebar: Fixed on the left --- */}
      <div 
        className="sidebar-wrapper position-fixed top-0 start-0 h-100 shadow" 
        style={{ width: "260px", zIndex: 1050 }}
      >
        <SellerSidebar />
      </div>

      {/* --- Main Content Area: Pushed to the right --- */}
      <div 
        className="flex-grow-1 bg-light d-flex flex-column" 
        style={{ marginLeft: "260px", minWidth: 0 }}
      >
        {/* Top Navbar: Sticky so it stays visible while scrolling */}
        <header className="sticky-top shadow-sm" style={{ zIndex: 1040 }}>
          <SellerNavbar />
        </header>

        {/* Page Content: Inventory, Reservations, etc. load here */}
        <main className="p-4 flex-grow-1">
          <div className="container-fluid">
            <Outlet />
          </div>
        </main>

        {/* Footer for Seller Panel */}
        <footer className="py-3 px-4 bg-white border-top text-center text-muted small">
          &copy; 2026 MediFind Pharmacy Portal
        </footer>
      </div>

      {/* Basic Responsiveness Styles */}
      <style>{`
        @media (max-width: 992px) {
          .sidebar-wrapper {
            transform: translateX(-100%); /* Hides sidebar on small screens */
            transition: transform 0.3s ease;
          }
          .flex-grow-1 {
            margin-left: 0 !important; /* Content takes full width on mobile */
          }
        }
      `}</style>
    </div>
  );
};

export default SellerLayout;