import React from "react";
import { 
  Search, 
  Bell, 
  User, 
  Mail, 
  ChevronDown,
  Maximize
} from "lucide-react"; // npm install lucide-react
import { Dropdown, Badge } from "react-bootstrap";

const AdminNavbar = () => {
  return (
    <nav className="admin-navbar px-4 py-2 bg-white border-bottom d-flex align-items-center justify-content-between sticky-top" 
      style={{ height: "70px", zIndex: 999 }}>
      
      {/* --- Left Side: Search Bar --- */}
      <div className="search-box position-relative d-none d-md-block" style={{ width: "350px" }}>
        <Search className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" size={18} />
        <input 
          type="text" 
          className="form-control border-0 bg-light ps-5 py-2 rounded-pill" 
          placeholder="Search for sellers, medicines..." 
          style={{ fontSize: "0.9rem" }}
        />
      </div>

      {/* --- Right Side: Actions & Profile --- */}
      <div className="d-flex align-items-center gap-4">
        
        {/* Fullscreen / Utility Icons */}
        <div className="d-flex align-items-center gap-3 text-muted d-none d-lg-flex">
          <button className="btn btn-link text-muted p-0 border-0">
            <Maximize size={20} />
          </button>
          <div className="position-relative">
            <Bell size={20} className="cursor-pointer" />
            <Badge 
              bg="danger" 
              pill 
              className="position-absolute top-0 start-100 translate-middle border border-white"
              style={{ fontSize: "0.6rem", padding: "3px 6px" }}
            >
              3
            </Badge>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="vr d-none d-md-block" style={{ height: "30px", opacity: 0.1 }}></div>

        {/* Admin Profile Dropdown */}
        <Dropdown align="end">
          <Dropdown.Toggle 
            variant="transparent" 
            id="admin-profile-dropdown" 
            className="d-flex align-items-center gap-2 border-0 p-0 shadow-none no-caret"
          >
            <div className="text-end d-none d-md-block">
              <p className="mb-0 fw-bold text-dark small" style={{ lineHeight: 1.2 }}>Atharv P</p>
              <span className="text-muted" style={{ fontSize: "0.75rem" }}>Super Admin</span>
            </div>
            <div className="profile-img-wrapper rounded-circle bg-primary-subtle d-flex align-items-center justify-content-center border" 
              style={{ width: "40px", height: "40px" }}>
               <User size={22} className="text-primary" />
            </div>
            <ChevronDown size={14} className="text-muted" />
          </Dropdown.Toggle>

          <Dropdown.Menu className="shadow-lg border-0 mt-2 p-2" style={{ borderRadius: "12px", minWidth: "200px" }}>
            <div className="px-3 py-2 mb-1">
              <p className="mb-0 small fw-bold">My Account</p>
              <span className="text-muted small">admin@medifind.com</span>
            </div>
            <Dropdown.Divider />
            <Dropdown.Item className="rounded-3 py-2 d-flex align-items-center gap-2">
              <User size={16} /> Profile Settings
            </Dropdown.Item>
            <Dropdown.Item className="rounded-3 py-2 d-flex align-items-center gap-2">
              <Mail size={16} /> Notifications
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item className="rounded-3 py-2 text-danger fw-bold d-flex align-items-center gap-2">
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

      </div>

      <style>{`
        .no-caret::after {
          display: none !important;
        }
        .cursor-pointer {
          cursor: pointer;
        }
        .admin-navbar {
          /* Glass effect optional */
          backdrop-filter: blur(8px);
          background-color: rgba(255, 255, 255, 0.95) !important;
        }
      `}</style>
    </nav>
  );
};

export default AdminNavbar;