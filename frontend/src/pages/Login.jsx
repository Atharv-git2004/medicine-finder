import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      localStorage.setItem("token", "demo-token");
      navigate("/");
    }
  };

  return (
    <div className="clay-auth-wrapper">
      <Container>
        <Card className="mx-auto clay-auth-card p-4" style={{ maxWidth: "400px" }}>
          <Card.Body>
            <h2 className="text-center fw-bold mb-4 text-primary">Login</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label className="clay-label">Email</Form.Label>
                <Form.Control 
                  type="email" name="email" className="clay-input" 
                  placeholder="Enter email" onChange={handleChange} required 
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="clay-label">Password</Form.Label>
                <Form.Control 
                  type="password" name="password" className="clay-input" 
                  placeholder="Enter password" onChange={handleChange} required 
                />
              </Form.Group>

              <Button type="submit" className="w-100 clay-btn-auth">
                Sign In
              </Button>
            </Form>
            <div className="text-center mt-4">
              <small className="text-muted">New here? <Link to="/register" className="clay-link">Create Account</Link></small>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Login;