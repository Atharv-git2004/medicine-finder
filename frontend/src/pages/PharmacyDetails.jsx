import React from "react";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import { useParams } from "react-router-dom";
import MapView from "../components/MapView";


const PharmacyDetails = () => {
  const { id } = useParams();

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
    <div className="clay-details-wrapper">
      <Container className="py-5">
        {/* Header Panel */}
        <div className="clay-header-panel p-4 p-md-5 mb-5 animate-fade-in">
          <Row className="align-items-center">
            <Col md={8}>
              <h1 className="fw-bold clay-text-primary display-5">{pharmacy.name}</h1>
              <p className="text-muted fs-5 mb-4">📍 {pharmacy.address}</p>
              
              <div className="d-flex flex-wrap gap-3">
                <div className="clay-info-pill">📞 {pharmacy.phone}</div>
                <div className="clay-info-pill">🚶 {pharmacy.distance}</div>
                <div className="clay-info-pill">⏰ {pharmacy.openHours}</div>
              </div>
            </Col>

            <Col md={4} className="text-md-end mt-4 mt-md-0">
              <Button className="clay-btn-success btn-lg px-5 py-3">
                Reserve Medicine
              </Button>
            </Col>
          </Row>
        </div>

        {/* Medicines Section */}
        <div className="clay-medicine-panel p-4 mb-5">
          <h3 className="fw-bold mb-4 px-2">Available Medicines</h3>
          <Row>
            {pharmacy.medicines.map((med, index) => (
              <Col md={4} key={index} className="mb-4">
                <div className={`clay-med-card ${med.available ? 'clay-med-available' : 'clay-med-empty'}`}>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold fs-5">{med.name}</span>
                    <Badge pill className={med.available ? "clay-badge-green" : "clay-badge-red"}>
                      {med.available ? "In Stock" : "Out of Stock"}
                    </Badge>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        {/* Map Section */}
        <div className="clay-map-container p-3">
          <div className="clay-map-inner">
            <MapView lat={pharmacy.lat} lng={pharmacy.lng} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PharmacyDetails;