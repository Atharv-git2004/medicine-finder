import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex align-items-center justify-content-center text-center"
      style={{ minHeight: "100vh", background: "#f8f9fa" }}
    >
      <Container>
        <h1 className="display-1 fw-bold text-primary">404</h1>
        <h3 className="mb-3">Page Not Found</h3>
        <p className="text-muted mb-4">
          The page you are looking for does not exist or has been moved.
        </p>

        <Button
          variant="primary"
          size="lg"
          onClick={() => navigate("/")}
        >
          Go to Home
        </Button>
      </Container>
    </div>
  );
};

export default NotFound;