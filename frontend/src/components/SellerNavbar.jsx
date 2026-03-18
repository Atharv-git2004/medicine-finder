import React, { useState } from "react";
import { 
  Search, 
  Bell, 
  User, 
  Store, 
  ChevronDown,
  Circle,
  Settings,
  LogOut
} from "lucide-react"; // npm install lucide-react
import { Dropdown, Badge, Form } from "react-bootstrap";

const SellerNavbar = () => {
  const [isOpen, setIsOpen] = useState(true); // Pharmacy Open/Closed status

  return (
    <nav className="seller-navbar px-4 py-2 bg-white border-bottom d-flex align-items-center justify-content-between sticky-top" 
      style={{ height: "70px", zIndex: 999 }}>
      
      {/* --- Left Side: Store Status & Search --- */}
      <div className="d-flex align-items-center gap-4">
        {/* Pharmacy Status Toggle */}
        <div className={`d-flex align-items-center gap-2 px-3 py-1 rounded-pill border ${isOpen ? 'bg-success-subtle border-success' : 'bg-danger-subtle border-danger'}`}>
          <Circle size={8} fill={isOpen ? "#198754" : "#dc3545"} className={isOpen ? "text-success" : "text-danger"} />
          <span className={`small fw-bold ${isOpen ? 'text-success' : 'text-danger'}`} style={{ fontSize: '0.75rem' }}>
            {isOpen ? "STORE OPEN" : "STORE CLOSED"}
          </span>
          <Form.Check 
            type="switch"
            id="store-status-switch"
            checked={isOpen}
            onChange={() => setIsOpen(!isOpen)}
            className="ms-2 custom-switch"
          />
        </div>

        {/* Search for inventory items */}
        <div className="search-box position-relative d-none d-lg-block" style={{ width: "300px" }}>
          <Search className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" size={16} />
          <input 
            type="text" 
            className="form-control border-0 bg-light ps-5 py-2 rounded-3" 
            placeholder="Search medicine in stock..." 
            style={{ fontSize: "0.85rem" }}
          />
        </div>
      </div>

      {/* --- Right Side: Alerts & Profile --- */}
      <div className="d-flex align-items-center gap-3">
        
        {/* Notifications */}
        <div className="position-relative p-2 bg-light rounded-circle cursor-pointer hover-bg-gray">
          <Bell size={20} className="text-dark" />
          <Badge 
            bg="primary" 
            pill 
            className="position-absolute top-0 start-100 translate-middle border border-white"
            style={{ fontSize: "0.6rem", padding: "3px 6px" }}
          >
            2
          </Badge>
        </div>

        {/* Vertical Divider */}
        <div className="vr mx-2 d-none d-md-block" style={{ height: "30px", opacity: 0.1 }}></div>

        {/* Seller Profile Dropdown */}
        <Dropdown align="end">
          <Dropdown.Toggle 
            variant="transparent" 
            id="seller-profile-dropdown" 
            className="d-flex align-items-center gap-2 border-0 p-0 shadow-none no-caret"
          >
            <div className="profile-info text-end d-none d-md-block">
              <p className="mb-0 fw-bold text-dark small" style={{ lineHeight: 1.2 }}>City Pharmacy</p>
              <span className="text-muted" style={{ fontSize: "0.7rem" }}>ID: PH-9921</span>
            </div>
            <div className="rounded-circle bg-dark d-flex align-items-center justify-content-center border shadow-sm" 
              style={{ width: "40px", height: "40px" }}>
               <Store size={20} className="text-white" />
            </div>
            <ChevronDown size={14} className="text-muted" />
          </Dropdown.Toggle>

          <Dropdown.Menu className="shadow-lg border-0 mt-2 p-2" style={{ borderRadius: "12px", minWidth: "220px" }}>
            <div className="px-3 py-2">
              <p className="mb-0 small fw-bold">Pharmacy Manager</p>
              <span className="text-muted small">calicut.store@medifind.com</span>
            </div>
            <Dropdown.Divider />
            <Dropdown.Item className="rounded-3 py-2 d-flex align-items-center gap-2">
              <User size={16} /> My Profile
            </Dropdown.Item>
            <Dropdown.Item className="rounded-3 py-2 d-flex align-items-center gap-2">
              <Settings size={16} /> Store Settings
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item className="rounded-3 py-2 text-danger fw-bold d-flex align-items-center gap-2">
              <LogOut size={16} /> Log Out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

      </div>

      <style>{`
        .no-caret::after { display: none !important; }
        .cursor-pointer { cursor: pointer; }
        .hover-bg-gray:hover { background-color: #e9ecef !important; }
        .custom-switch .form-check-input { cursor: pointer; width: 2.5em; height: 1.2em; }
        .seller-navbar {
          background-color: #ffffff !important;
        }
      `}</style>
    </nav>
  );
};

export default SellerNavbar;