import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { 
  LayoutDashboard, 
  Users, 
  Store, 
  Settings, 
  LogOut, 
  ChevronRight,
  ShieldCheck
} from "lucide-react";

const AdminSidebar = () => {
  const { logout } = useAuth(); // Logout function context-il ninnu edukkunnu
  const navigate = useNavigate();

  // Sidebar links configuration
  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Manage Sellers",
      path: "/admin/sellers",
      icon: <Store size={20} />,
    },
    {
      name: "Manage Users",
      path: "/admin/users",
      icon: <Users size={20} />,
    },
    {
      name: "Settings",
      path: "/admin/settings",
      icon: <Settings size={20} />,
    },
  ];

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      logout(); // Global state-il ninnu user data remove cheyyunnu
      navigate("/login"); // Login page-lekk thirichu vidunnu
    }
  };

  return (
    <div className="admin-sidebar d-flex flex-column vh-100 shadow-sm border-end bg-white" style={{ width: "260px" }}>
      
      {/* --- Sidebar Header --- */}
      <div className="p-4 border-bottom d-flex align-items-center gap-2">
        <div className="bg-primary p-2 rounded-3">
          <ShieldCheck className="text-white" size={24} />
        </div>
        <div>
          <h5 className="fw-bold mb-0 text-dark">MediFind</h5>
          <span className="text-muted small fw-medium">Admin Panel</span>
        </div>
      </div>

      {/* --- Navigation Links --- */}
      <nav className="flex-grow-1 px-3 py-4 overflow-auto">
        <p className="text-uppercase text-muted small fw-bold mb-3 px-2" style={{ fontSize: "0.7rem", letterSpacing: "1px" }}>
          Main Menu
        </p>
        
        <ul className="list-unstyled">
          {menuItems.map((item, index) => (
            <li key={index} className="mb-2">
              <NavLink
                to={item.path}
                className={({ isActive }) => 
                  `d-flex align-items-center justify-content-between px-3 py-2 rounded-3 text-decoration-none transition-all ${
                    isActive 
                    ? "bg-primary text-white shadow-sm" 
                    : "text-muted hover-bg-light"
                  }`
                }
              >
                <div className="d-flex align-items-center gap-3">
                  {item.icon}
                  <span className="fw-medium">{item.name}</span>
                </div>
                <ChevronRight size={14} className="opacity-50" />
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* --- Sidebar Footer (Logout) --- */}
      <div className="p-3 border-top mt-auto">
        <button 
          className="btn btn-outline-danger w-100 d-flex align-items-center justify-content-center gap-2 rounded-3 fw-bold py-2"
          onClick={handleLogout}
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>

      {/* Internal CSS for Hover effects */}
      <style>{`
        .hover-bg-light:hover {
          background-color: #f8f9fa;
          color: #0d6efd !important;
        }
        .transition-all {
          transition: all 0.2s ease-in-out;
        }
        .admin-sidebar {
          z-index: 1000;
          position: fixed;
          left: 0;
          top: 0;
        }
      `}</style>
    </div>
  );
};

export default AdminSidebar;