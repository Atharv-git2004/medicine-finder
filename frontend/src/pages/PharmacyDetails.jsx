import React from "react";
import { Container, Row, Col, Button, Badge, Card, ListGroup } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { MapPin, Phone, Clock, ArrowLeft, CheckCircle, XCircle, Share2 } from "lucide-react"; // npm install lucide-react
import MapView from "../components/MapView";

const PharmacyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data for the specific pharmacy
  const pharmacy = {
    id,
    name: "City Care Pharmacy",
    address: "Main Street, Near Baby Memorial Hospital, Calicut, Kerala",
    phone: "+91 9876543210",
    distance: "1.2 km away",
    openHours: "08:00 AM - 10:00 PM",
    isOpen: true,
    lat: 11.2588,
    lng: 75.7804,
    medicines: [
      { name: "Paracetamol 500mg", available: true, price: "₹15/strip" },
      { name: "Dolo 650", available: true, price: "₹30/strip" },
      { name: "Azithromycin 500mg", available: true, price: "₹70/strip" },
      { name: "Aspirin", available: false, price: "₹20/strip" },
      { name: "Vitamin C Chewable", available: true, price: "₹45/bottle" },
    ],
  };

  return (
    <div className="min-vh-100 pb-5" style={{ backgroundColor: "#f8f9fa" }}>
      
      {/* --- TOP NAVIGATION BAR --- */}
      <div className="bg-white border-bottom py-3 mb-4 sticky-top shadow-sm">
        <Container className="d-flex justify-content-between align-items-center">
          <Button 
            variant="light" 
            className="rounded-pill d-flex align-items-center gap-2 text-dark fw-medium border"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={18} /> Back
          </Button>
          <Button variant="light" className="rounded-circle border p-2 text-primary shadow-sm">
            <Share2 size={18} />
          </Button>
        </Container>
      </div>

      <Container>
        <Row className="g-4">
          
          {/* --- LEFT COLUMN: INFO & MEDICINES --- */}
          <Col lg={8}>
            {/* Pharmacy Header Card */}
            <Card className="border-0 shadow-sm rounded-4 p-4 mb-4">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <Badge bg="primary-soft" className="text-primary mb-2 px-3 py-2 rounded-pill fw-bold" style={{ backgroundColor: '#e7f1ff' }}>
                    Verified Pharmacy
                  </Badge>
                  <h1 className="fw-bold text-dark display-6 mb-2">{pharmacy.name}</h1>
                  <p className="text-muted d-flex align-items-center gap-2">
                    <MapPin size={18} className="text-primary" /> {pharmacy.address}
                  </p>
                </div>
                {pharmacy.isOpen ? (
                  <Badge bg="success" className="px-3 py-2 rounded-pill">Open Now</Badge>
                ) : (
                  <Badge bg="danger" className="px-3 py-2 rounded-pill">Closed</Badge>
                )}
              </div>

              <Row className="g-3 mt-2">
                <Col md={4}>
                  <div className="p-3 border rounded-4 bg-light text-center">
                    <Phone size={20} className="text-primary mb-2" />
                    <div className="small text-muted">Contact</div>
                    <div className="fw-bold small">{pharmacy.phone}</div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="p-3 border rounded-4 bg-light text-center">
                    <Clock size={20} className="text-primary mb-2" />
                    <div className="small text-muted">Open Hours</div>
                    <div className="fw-bold small">{pharmacy.openHours}</div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="p-3 border rounded-4 bg-light text-center">
                    <MapPin size={20} className="text-primary mb-2" />
                    <div className="small text-muted">Distance</div>
                    <div className="fw-bold small">{pharmacy.distance}</div>
                  </div>
                </Col>
              </Row>
            </Card>

            {/* Medicine Availability List */}
            <Card className="border-0 shadow-sm rounded-4 overflow-hidden">
              <Card.Header className="bg-white border-0 p-4 pb-0">
                <h4 className="fw-bold text-dark mb-0">Medicine Inventory</h4>
                <p className="text-muted small">Real-time availability in this store</p>
              </Card.Header>
              <Card.Body className="p-0">
                <ListGroup variant="flush">
                  {pharmacy.medicines.map((med, index) => (
                    <ListGroup.Item key={index} className="p-4 border-light d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center gap-3">
                        <div className={`p-2 rounded-3 ${med.available ? 'bg-success-subtle' : 'bg-danger-subtle'}`}>
                          {med.available ? <CheckCircle size={22} className="text-success" /> : <XCircle size={22} className="text-danger" />}
                        </div>
                        <div>
                          <h6 className={`mb-0 fw-bold ${!med.available && 'text-muted'}`}>{med.name}</h6>
                          <span className="small text-muted">{med.price}</span>
                        </div>
                      </div>
                      <Badge bg={med.available ? "success-soft" : "danger-soft"} 
                             className={`px-3 py-2 rounded-pill ${med.available ? 'text-success' : 'text-danger'}`}
                             style={{ backgroundColor: med.available ? '#e8f5e9' : '#ffebee' }}>
                        {med.available ? "Available" : "Out of Stock"}
                      </Badge>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

          {/* --- RIGHT COLUMN: ACTIONS & MAP --- */}
          <Col lg={4}>
            {/* Action Card */}
            <Card className="border-0 shadow-lg rounded-4 p-4 mb-4 text-center sticky-top" style={{ top: '100px', zIndex: 10 }}>
              <h5 className="fw-bold mb-3">Quick Actions</h5>
              <p className="small text-muted mb-4">You can reserve medicines for up to 2 hours before pickup.</p>
              <Button variant="primary" size="lg" className="w-100 rounded-pill py-3 fw-bold mb-3 shadow-sm">
                Reserve Medicine
              </Button>
              <Button variant="outline-primary" size="lg" className="w-100 rounded-pill py-3 fw-bold border-2">
                Call Pharmacy
              </Button>
              <hr className="my-4 opacity-50" />
              <div className="text-start">
                <h6 className="fw-bold small text-uppercase text-muted mb-3">Store Features</h6>
                <div className="d-flex flex-wrap gap-2">
                  <Badge bg="light" className="text-dark border px-3 py-2 rounded-pill fw-normal">Home Delivery</Badge>
                  <Badge bg="light" className="text-dark border px-3 py-2 rounded-pill fw-normal">UPI Payments</Badge>
                  <Badge bg="light" className="text-dark border px-3 py-2 rounded-pill fw-normal">Open 24/7</Badge>
                </div>
              </div>
            </Card>

            {/* Map Preview */}
            <div className="mt-4">
              <MapView lat={pharmacy.lat} lng={pharmacy.lng} pharmacyName={pharmacy.name} />
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default PharmacyDetails;