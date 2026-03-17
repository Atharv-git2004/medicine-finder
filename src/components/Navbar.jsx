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
    <Navbar bg="white" expand="lg" className="shadow-sm py-3">
      <Container>
        {/* Logo / Brand */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold text-primary fs-4"
        >
          MediFind
        </Navbar.Brand>

        {/* Toggle Button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Nav Items */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-3">
            <Nav.Link as={Link} to="/" className="fw-semibold">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/search" className="fw-semibold">
              Search
            </Nav.Link>

            <Nav.Link as={Link} to="/reservations" className="fw-semibold">
              Reservations
            </Nav.Link>

            {isLoggedIn ? (
              <>
                <Nav.Link as={Link} to="/profile" className="fw-semibold">
                  Profile
                </Nav.Link>

                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>

                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => navigate("/register")}
                >
                  Register
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;