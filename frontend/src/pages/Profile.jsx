import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  // Dummy user data (UI only)
  const user = {
    name: "John Doe",
    email: "john@example.com",
    phone: "+91 9876543210",
    location: "Calicut, Kerala",
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-sm border-0">
            <Card.Body className="text-center p-4">
              {/* Avatar */}
              <div
                className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3"
                style={{ width: "80px", height: "80px", fontSize: "30px" }}
              >
                {user.name.charAt(0)}
              </div>

              {/* Name */}
              <h4 className="fw-bold">{user.name}</h4>
              <p className="text-muted mb-4">{user.email}</p>

              {/* Info */}
              <div className="text-start mb-3">
                <p className="mb-2">
                  <strong>Phone:</strong> {user.phone}
                </p>
                <p className="mb-2">
                  <strong>Location:</strong> {user.location}
                </p>
              </div>

              {/* Actions */}
              <div className="d-grid gap-2">
                <Button
                  variant="outline-primary"
                  onClick={() => navigate("/reservations")}
                >
                  View Reservations
                </Button>

                <Button variant="danger" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;