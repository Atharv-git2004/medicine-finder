import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { useParams } from "react-router-dom";
import MapView from "../components/MapView";

const PharmacyDetails = () => {
  const { id } = useParams();

  // Dummy data for UI
  const pharmacy = {
    id,
    name: "City Care Pharmacy",
    address: "Calicut, Kerala",
    phone: "+91 9876543210",
    distance: "1.2 km",
    openHours: "8:00 AM - 10:00 PM",
    medicines: [
      { name: "Paracetamol", available: true },
      { name: "Dolo 650", available: true },
      { name: "Aspirin", available: false },
    ],
    lat: 11.2588,
    lng: 75.7804,
  };

  return (
    <Container className="mt-4">
      {/* Header */}
      <Row className="mb-4">
        <Col md={8}>
          <h2 className="fw-bold">{pharmacy.name}</h2>
          <p className="text-muted mb-1">{pharmacy.address}</p>
          <p className="mb-1">
            <strong>Phone:</strong> {pharmacy.phone}
          </p>
          <p className="mb-1">
            <strong>Distance:</strong> {pharmacy.distance}
          </p>
          <p>
            <strong>Open Hours:</strong> {pharmacy.openHours}
          </p>
        </Col>

        <Col md={4} className="text-md-end mt-3 mt-md-0">
          <Button variant="success" size="lg">
            Reserve Medicine
          </Button>
        </Col>
      </Row>

      {/* Medicines Section */}
      <Card className="shadow-sm border-0 mb-4">
        <Card.Body>
          <Card.Title className="fw-bold mb-3">
            Available Medicines
          </Card.Title>

          <Row>
            {pharmacy.medicines.map((med, index) => (
              <Col md={4} key={index} className="mb-3">
                <Card className="p-3 h-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <span>{med.name}</span>
                    <Badge bg={med.available ? "success" : "secondary"}>
                      {med.available ? "In Stock" : "Out of Stock"}
                    </Badge>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>

      {/* Map Section */}
      <MapView lat={pharmacy.lat} lng={pharmacy.lng} />
    </Container>
  );
};

export default PharmacyDetails;