import React from "react";
import { Container, Card, Row, Col, Badge, Button } from "react-bootstrap";

const Reservations = () => {
  // Dummy data (UI only)
  const reservations = [
    {
      id: 1,
      medicine: "Paracetamol",
      pharmacy: "City Care Pharmacy",
      status: "Reserved",
      expiry: "20 mins left",
    },
    {
      id: 2,
      medicine: "Dolo 650",
      pharmacy: "HealthPlus Pharmacy",
      status: "Collected",
      expiry: "Completed",
    },
    {
      id: 3,
      medicine: "Aspirin",
      pharmacy: "MediLife Pharmacy",
      status: "Expired",
      expiry: "Expired",
    },
  ];

  const getStatusVariant = (status) => {
    switch (status) {
      case "Reserved":
        return "warning";
      case "Collected":
        return "success";
      case "Expired":
        return "secondary";
      default:
        return "primary";
    }
  };

  return (
    <Container className="mt-4">
      <h3 className="fw-bold mb-4">Your Reservations</h3>

      <Row>
        {reservations.length > 0 ? (
          reservations.map((item) => (
            <Col md={6} key={item.id} className="mb-4">
              <Card className="shadow-sm border-0 h-100">
                <Card.Body>
                  {/* Header */}
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="fw-bold mb-0">{item.medicine}</h5>
                    <Badge bg={getStatusVariant(item.status)}>
                      {item.status}
                    </Badge>
                  </div>

                  {/* Details */}
                  <p className="mb-1 text-muted">
                    Pharmacy: {item.pharmacy}
                  </p>

                  <p className="mb-3">
                    <strong>Status Info:</strong> {item.expiry}
                  </p>

                  {/* Actions */}
                  <div className="d-flex justify-content-end">
                    <Button variant="outline-primary" size="sm">
                      View Details
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-center text-muted">
            No reservations found
          </p>
        )}
      </Row>
    </Container>
  );
};

export default Reservations;