import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy login logic (UI only)
    if (formData.email && formData.password) {
      localStorage.setItem("token", "demo-token");
      navigate("/");
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh", background: "#f5f7fa" }}
    >
      <Container>
        <Card
          className="mx-auto shadow-sm border-0 p-4"
          style={{ maxWidth: "400px" }}
        >
          <Card.Body>
            <h3 className="text-center fw-bold mb-4">Login</h3>

            <Form onSubmit={handleSubmit}>
              {/* Email */}
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {/* Password */}
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {/* Submit */}
              <Button
                type="submit"
                variant="primary"
                className="w-100 mt-2"
              >
                Login
              </Button>
            </Form>

            {/* Footer Links */}
            <div className="text-center mt-3">
              <small className="text-muted">
                Don't have an account?{" "}
                <Link to="/register">Register</Link>
              </small>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Login;