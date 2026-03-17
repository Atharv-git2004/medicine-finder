import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";


const CustomNavbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Navbar expand="lg" className="clay-nav-wrapper mt-3">
      <Container className="clay-nav-container py-2">
        {/* Logo / Brand */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold text-primary fs-4 clay-logo"
        >
          MediFind
        </Navbar.Brand>

        {/* Toggle Button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none" />

        {/* Nav Items */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-3">
            <Nav.Link as={Link} to="/" className="clay-nav-link">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/search" className="clay-nav-link">
              Search
            </Nav.Link>

            <Nav.Link as={Link} to="/reservations" className="clay-nav-link">
              Reservations
            </Nav.Link>

            {isLoggedIn ? (
              <>
                <Nav.Link as={Link} to="/profile" className="clay-nav-link">
                  Profile
                </Nav.Link>

                <Button
                  variant="danger"
                  className="clay-btn-danger btn-sm"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <div className="d-flex gap-2 ms-lg-2">
                <Button
                  className="clay-btn-secondary btn-sm"
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>

                <Button
                  className="clay-btn-primary btn-sm"
                  onClick={() => navigate("/register")}
                >
                  Register
                </Button>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;