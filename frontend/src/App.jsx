import React from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";

// --- Bootstrap & Global Styles ---
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/variables.css";
import "./styles/global.css";

// --- Components ---
import CustomNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";

// --- Context ---
import { AuthProvider } from "./context/AuthContext";

// --- Layout Controller Component ---
// Ithuraanu Admin/Seller dashboards-il normal navbar/footer hide cheyyunnath
const LayoutConfig = () => {
  const location = useLocation();
  
  // '/admin' enno '/seller' enno thudangunna routes aaneil normal navbar venda
  const isDashboard = location.pathname.startsWith("/admin") || location.pathname.startsWith("/seller");

  return (
    <div className="d-flex flex-column min-vh-100">
      
      {/* Header Section: Hidden on Dashboards */}
      {!isDashboard && (
        <header>
          <CustomNavbar />
        </header>
      )}

      {/* Main Content Area */}
      <main className="flex-grow-1">
        <AppRoutes />
      </main>

      {/* Footer Section: Hidden on Dashboards */}
      {!isDashboard && (
        <footer className="mt-auto">
          <Footer />
        </footer>
      )}
      
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <LayoutConfig />
      </Router>
    </AuthProvider>
  );
}

export default App;