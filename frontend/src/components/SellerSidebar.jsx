import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { 
  LayoutDashboard, 
  ClipboardList, 
  Package, 
  Store, 
  Settings, 
  LogOut,
  ChevronRight,
  PlusCircle,
  History
} from "lucide-react";

const SellerSidebar = () => {
  const { logout, user } = useAuth(); // Logout ഫംഗ്ഷനും യൂസർ ഡാറ്റയും എടുക്കുന്നു
  const navigate = useNavigate();

  // Sidebar links configuration
  const menuItems = [
    { name: "Dashboard", path: "/seller/dashboard", icon: <LayoutDashboard size={20} /> },
    { name: "Manage Inventory", path: "/seller/inventory", icon: <Package size={20} /> },
    { name: "Add Medicine", path: "/seller/add-medicine", icon: <PlusCircle size={20} /> },
    { 
      name: "Reservations", 
      path: "/seller/reservations", 
      icon: <ClipboardList size={20} />,
      badge: 4 
    },
    { name: "Order History", path: "/seller/history", icon: <History size={20} /> },
    { name: "Store Profile", path: "/seller/profile", icon: <Store size={20} /> },
    { name: "Settings", path: "/seller/settings", icon: <Settings size={20} /> },
  ];

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <div className="seller-sidebar d-flex flex-column vh-100 shadow-lg text-white" 
      style={{ 
        width: "260px", 
        position: "fixed", 
        left: 0, 
        top: 0, 
        backgroundColor: "#1a1d23", 
        zIndex: 1000 
      }}>
      
      {/* --- Sidebar Header --- */}
      <div className="p-4 border-bottom border-secondary border-opacity-25 d-flex align-items-center gap-2">
        <div className="bg-primary p-2 rounded-3 shadow-sm">
          <Package className="text-white" size={24} />
        </div>
        <div>
          <h5 className="fw-bold mb-0 text-white" style={{ letterSpacing: '0.5px' }}>MedFinder</h5>
          <span className="text-info small fw-medium" style={{ fontSize: '0.7rem', opacity: 0.8 }}>Pharmacy Partner</span>
        </div>
      </div>

      {/* --- Navigation Links --- */}
      <nav className="flex-grow-1 px-3 py-4 overflow-auto sidebar-scroll">
        <p className="text-uppercase text-secondary small fw-bold mb-3 px-2" style={{ fontSize: "0.65rem", letterSpacing: "1.5px", opacity: 0.5 }}>
          Inventory Management
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
                    : "text-secondary hover-seller-link"
                  }`
                }
              >
                <div className="d-flex align-items-center gap-3">
                  <span className="icon-wrapper">{item.icon}</span>
                  <span className="fw-medium small">{item.name}</span>
                </div>
                
                {item.badge ? (
                  <span className="badge bg-danger rounded-pill border border-danger border-2" style={{ fontSize: '0.6rem' }}>{item.badge}</span>
                ) : (
                  <ChevronRight size={14} className="opacity-25" />
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* --- Sidebar Footer --- */}
      <div className="p-3 border-top border-secondary border-opacity-25 bg-dark-soft">
        <div className="d-flex align-items-center gap-3 p-2 mb-3 bg-secondary bg-opacity-10 rounded-3 border border-secondary border-opacity-10">
           <div className="rounded-circle bg-info p-1 text-white fw-bold small shadow-sm" style={{ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem' }}>
             {user?.name ? user.name.substring(0, 2).toUpperCase() : "PH"}
           </div>
           <div className="overflow-hidden">
              <p className="mb-0 small fw-bold text-truncate text-white">{user?.pharmacyName || "City Pharmacy"}</p>
              <p className="mb-0 text-muted text-truncate" style={{ fontSize: '0.65rem' }}>{user?.location || "Kozhikode, Kerala"}</p>
           </div>
        </div>
        <button 
          className="btn btn-outline-danger border-secondary border-opacity-25 w-100 d-flex align-items-center justify-content-center gap-2 rounded-3 fw-bold btn-sm py-2 logout-btn"
          onClick={handleLogout}
        >
          <LogOut size={16} />
          Sign Out
        </button>
      </div>

      <style>{`
        .hover-seller-link:hover {
          background-color: rgba(255, 255, 255, 0.03);
          color: #fff !important;
        }
        .transition-all {
          transition: all 0.25s ease;
        }
        .sidebar-scroll::-webkit-scrollbar {
          width: 3px;
        }
        .sidebar-scroll::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .bg-dark-soft {
          background-color: #15181c;
        }
        .logout-btn:hover {
          background-color: #dc3545 !important;
          color: white !important;
          border-color: #dc3545 !important;
        }
        .icon-wrapper {
          display: flex;
          align-items: center;
          opacity: 0.9;
        }
      `}</style>
    </div>
  );
};

export default SellerSidebar;