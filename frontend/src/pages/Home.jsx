import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


import SearchBar from "../components/SearchBar";
import PharmacyCard from "../components/PharmacyCard";

const Home = () => {
  const navigate = useNavigate();

  const pharmacies = [
    { id: 1, name: "City Care Pharmacy", address: "Main Street", distance: 500, available: true, medicines: ["Paracetamol", "Ibuprofen"] },
    { id: 2, name: "HealthPlus Pharmacy", address: "Near Bus Stand", distance: 1200, available: true, medicines: ["Cough Syrup", "Vitamin C"] },
    { id: 3, name: "MedLife Pharmacy", address: "Downtown", distance: 2000, available: false, medicines: [] },
  ];

  return (
    <div className="clay-wrapper">
      {/* Hero Section */}
      <div className="hero-section text-center d-flex align-items-center justify-content-center">
        <Container>
          <div className="clay-panel-main p-5 animate-float">
            <h1 className="fw-bold mb-3 display-3 clay-text-gradient">MediFind</h1>
            <h2 className="h4 text-secondary mb-4">Find Medicines Instantly Near You</h2>
            <div className="d-flex justify-content-center">
              <div className="clay-search-container">
                <SearchBar />
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Pharmacies Section */}
      <section className="py-5">
        <Container>
          <div className="d-flex justify-content-between align-items-center mb-5">
            <h3 className="fw-bold clay-text-title">Nearby Pharmacies</h3>
            <Button className="clay-btn-viewall" onClick={() => navigate("/search")}>
              View All
            </Button>
          </div>

          <Row>
            {pharmacies.map((pharmacy) => (
              <Col key={pharmacy.id} md={4} className="mb-4">
                <div className="clay-card-outer h-100">
                   <PharmacyCard pharmacy={pharmacy} />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <Container>
          <Row className="text-center">
            {[
              { title: "Real-time Stock", color: "blue" },
              { title: "Quick Reservation", color: "pink" },
              { title: "Nearby Search", color: "green" }
            ].map((feature, idx) => (
              <Col md={4} key={idx} className="mb-4">
                <div className={`clay-feature-card clay-${feature.color} p-4`}>
                  <div className={`clay-icon-blob-${feature.color} mb-3 mx-auto`}></div>
                  <h5 className="fw-bold">{feature.title}</h5>
                  <p className="small opacity-75">Secure and tactile healthcare management.</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;