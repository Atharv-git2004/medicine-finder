import React, { useState } from "react";
import { Container, Row, Col, Form, Badge, Card, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Search, MapPin, SlidersHorizontal, Info } from "lucide-react"; 
import PharmacyCard from "../components/PharmacyCard";

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const medicine = queryParams.get("medicine");

  const [sortBy, setSortBy] = useState("distance");
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);

  const pharmacies = [
    { id: 1, name: "City Care Pharmacy", address: "Main Street, Calicut", distance: "1.2 km", medicines: ["Paracetamol", "Dolo"], available: true },
    { id: 2, name: "HealthPlus Pharmacy", address: "Near Bus Stand, Kozhikode", distance: "2.5 km", medicines: ["Aspirin"], available: false },
    { id: 3, name: "MediLife Pharmacy", address: "Downtown, Malaparamba", distance: "3.0 km", medicines: ["Paracetamol", "Ibuprofen"], available: true },
  ];

  return (
    <div className="min-vh-100 pb-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="bg-white border-bottom py-4 mb-4 shadow-sm">
        <Container>
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
            <div>
              <h2 className="fw-bold text-dark mb-1">
                <Search size={24} className="text-primary me-2 mb-1" />
                {medicine ? <span>Results for <span className="text-primary">"{medicine}"</span></span> : "All Pharmacies"}
              </h2>
              <p className="text-muted small mb-0 d-flex align-items-center gap-1">
                <MapPin size={14} /> Showing stores near Calicut, Kerala
              </p>
            </div>
            <Badge bg="light" className="text-dark border px-3 py-2 rounded-pill fw-medium">
              {pharmacies.length} Stores Found
            </Badge>
          </div>
        </Container>
      </div>

      <Container>
        <Row className="g-4">
          <Col lg={3}>
            <Card className="border-0 shadow-sm rounded-4 p-4 sticky-top" style={{ top: '100px' }}>
              <div className="d-flex align-items-center gap-2 mb-4">
                <SlidersHorizontal size={18} className="text-primary" />
                <h5 className="fw-bold mb-0">Filters</h5>
              </div>

              <Form>
                <Form.Group className="mb-4">
                  {/* FIXED: Form.Label closing tag corrected */}
                  <Form.Label className="small fw-bold text-muted text-uppercase">Sort By</Form.Label>
                  <Form.Select 
                    className="rounded-3 border-light shadow-none bg-light"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="distance">Nearest Distance</option>
                    <option value="availability">Stock Availability</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  {/* FIXED: Form.Label closing tag corrected */}
                  <Form.Label className="small fw-bold text-muted text-uppercase">Availability</Form.Label>
                  <Form.Check 
                    type="switch"
                    id="stock-switch"
                    label="In Stock Only"
                    className="fw-medium"
                    checked={showAvailableOnly}
                    onChange={(e) => setShowAvailableOnly(e.target.checked)}
                  />
                </Form.Group>

                <hr className="my-4 opacity-25" />

                <div className="p-3 rounded-3" style={{ backgroundColor: '#e7f1ff' }}>
                  <div className="d-flex gap-2 text-primary small fw-bold">
                    <Info size={16} /> Tip:
                  </div>
                  <p className="small text-primary mb-0 mt-1">
                    Reserve items to lock prices for 2 hours.
                  </p>
                </div>
              </Form>
            </Card>
          </Col>

          <Col lg={9}>
            <Row className="g-4">
              {pharmacies.length > 0 ? (
                pharmacies.map((pharmacy) => (
                  <Col md={6} key={pharmacy.id}>
                    <PharmacyCard pharmacy={pharmacy} />
                  </Col>
                ))
              ) : (
                <Col xs={12}>
                  <Card className="border-0 shadow-sm rounded-4 p-5 text-center bg-white">
                    <Search size={64} className="opacity-25 mb-3" />
                    <h4 className="fw-bold">No Stores Found</h4>
                    <Button variant="primary" className="rounded-pill px-4 mt-3" onClick={() => window.location.reload()}>
                      Reset Filters
                    </Button>
                  </Card>
                </Col>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SearchResults;