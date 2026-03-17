import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", password: "", confirmPassword: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    localStorage.setItem("token", "demo-token");
    navigate("/");
  };

  return (
    <div className="clay-auth-wrapper">
      <Container>
        <Card className="mx-auto clay-auth-card p-4" style={{ maxWidth: "420px" }}>
          <Card.Body>
            <h2 className="text-center fw-bold mb-4 text-primary">Register</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label className="clay-label">Full Name</Form.Label>
                <Form.Control type="text" name="name" className="clay-input" placeholder="Full Name" onChange={handleChange} required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="clay-label">Email</Form.Label>
                <Form.Control type="email" name="email" className="clay-input" placeholder="Email Address" onChange={handleChange} required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="clay-label">Password</Form.Label>
                <Form.Control type="password" name="password" className="clay-input" placeholder="Create Password" onChange={handleChange} required />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="clay-label">Confirm Password</Form.Label>
                <Form.Control type="password" name="confirmPassword" className="clay-input" placeholder="Confirm Password" onChange={handleChange} required />
              </Form.Group>

              <Button type="submit" className="w-100 clay-btn-auth">
                Join MediFind
              </Button>
            </Form>
            <div className="text-center mt-4">
              <small className="text-muted">Already a member? <Link to="/login" className="clay-link">Login</Link></small>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Register;