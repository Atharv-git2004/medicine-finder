import React, { useState } from "react";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // AuthContext link cheythu

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // login function context-il ninnu edukkunnu
  
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // --- Temporary Logic for Testing ---
    // Email 'admin@test.com' aanengil Admin aayi redirect cheyyikkum
    if (formData.email === "admin@test.com" && formData.password === "123") {
      const adminData = {
        name: "Atharv P",
        email: "admin@test.com",
        role: "admin",
      };
      login(adminData, "demo-admin-token");
      navigate("/admin/dashboard");
    } 
    // Email 'seller@test.com' aanengil Seller aayi redirect cheyyikkum
    else if (formData.email === "seller@test.com" && formData.password === "123") {
      const sellerData = {
        name: "Pharmacy Owner",
        email: "seller@test.com",
        role: "seller",
      };
      login(sellerData, "demo-seller-token");
      navigate("/seller/dashboard");
    }
    // Normal User
    else if (formData.email && formData.password) {
      const userData = {
        name: "Normal User",
        email: formData.email,
        role: "user",
      };
      login(userData, "demo-user-token");
      navigate("/");
    } else {
      setError("Please enter valid credentials.");
    }
  };

  return (
    <div className="clay-auth-wrapper d-flex align-items-center justify-content-center" style={{ minHeight: "80vh" }}>
      <Container>
        <Card className="mx-auto shadow-lg border-0 rounded-4 p-4" style={{ maxWidth: "420px", backgroundColor: "#ffffff" }}>
          <Card.Body>
            <div className="text-center mb-4">
              <h2 className="fw-bold text-primary">Welcome Back</h2>
              <p className="text-muted small">Please login to your account</p>
            </div>

            {error && <Alert variant="danger" className="py-2 small text-center">{error}</Alert>}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold small">Email Address</Form.Label>
                <Form.Control 
                  type="email" name="email" 
                  className="bg-light border-0 py-2 shadow-none" 
                  placeholder="admin@test.com / seller@test.com" 
                  onChange={handleChange} required 
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="fw-bold small">Password</Form.Label>
                <Form.Control 
                  type="password" name="password" 
                  className="bg-light border-0 py-2 shadow-none" 
                  placeholder="Enter 123 to test" 
                  onChange={handleChange} required 
                />
              </Form.Group>

              <Button type="submit" variant="primary" className="w-100 py-2 fw-bold shadow-sm border-0">
                Sign In
              </Button>
            </Form>

            <div className="text-center mt-4">
              <p className="text-muted small">
                New here? <Link to="/register" className="text-primary text-decoration-none fw-bold">Create Account</Link>
              </p>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Login;