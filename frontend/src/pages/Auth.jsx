import React, { useState } from "react";
import {
  Container,
  Form,
  Button,
  Card,
  Row,
  Col,
  InputGroup,
} from "react-bootstrap";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { registerUser, loginUser } from "../services/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        // ✅ LOGIN
        const res = await loginUser({
          email: formData.email,
          password: formData.password,
        });

        console.log("LOGIN RESPONSE:", res);

        if (!res?.data?.token) {
          alert("Invalid login response");
          return;
        }

        // 🔥 IMPORTANT FIX
        const userData = res.data.user;

        if (!userData) {
          alert("User data missing from backend");
          return;
        }

        // ✅ Save to context
        login(userData, res.data.token);

        alert("Login successful");

        // 🔥 ROLE BASED REDIRECT
        if (userData.role?.toLowerCase() === "seller") {
          navigate("/seller");
        } else if (userData.role?.toLowerCase() === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }

      } else {
        // ✅ REGISTER
        if (formData.password !== formData.confirmPassword) {
          alert("Passwords do not match");
          return;
        }

        const res = await registerUser({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        });

        console.log("REGISTER RESPONSE:", res);

        alert("Registered successfully");
        setIsLogin(true);
      }

    } catch (err) {
      console.log(err);

      if (err?.response?.data?.message) {
        alert(err.response.data.message);
      } else {
        alert("Something went wrong");
      }
    }
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center py-5"
      style={{ minHeight: "90vh" }}
    >
      <Row className="w-100 justify-content-center">
        <Col md={6} lg={5}>
          <Card className="shadow-lg rounded-4">
            <Card.Body>
              <h3 className="text-center mb-4">
                {isLogin ? "Login" : "Register"}
              </h3>

              <Form onSubmit={handleSubmit}>
                {!isLogin && (
                  <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <User size={18} />
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        name="username"
                        onChange={handleChange}
                        required
                      />
                    </InputGroup>
                  </Form.Group>
                )}

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>
                      <Mail size={18} />
                    </InputGroup.Text>
                    <Form.Control
                      type="email"
                      name="email"
                      onChange={handleChange}
                      required
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>
                      <Lock size={18} />
                    </InputGroup.Text>
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      name="password"
                      onChange={handleChange}
                      required
                    />
                    <Button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </Button>
                  </InputGroup>
                </Form.Group>

                {!isLogin && (
                  <Form.Group className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="confirmPassword"
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                )}

                <Button type="submit" className="w-100">
                  {isLogin ? "Login" : "Register"}
                </Button>
              </Form>

              <div className="text-center mt-3">
                <Button
                  variant="link"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin
                    ? "Create account"
                    : "Already have account?"}
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;