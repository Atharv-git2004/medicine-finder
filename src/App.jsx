import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles/variables.css";
import "./styles/global.css";

import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

// ✅ Import AuthProvider correctly
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          
          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <main className="flex-grow-1">
            <AppRoutes />
          </main>

          {/* Footer */}
          <footer className="footer">
            <div className="container">
              <p className="mb-0">
                © {new Date().getFullYear()} MedFinder. All rights reserved.
              </p>
            </div>
          </footer>

        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;