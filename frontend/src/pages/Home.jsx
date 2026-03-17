import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import SearchBar from "../components/SearchBar";
import PharmacyCard from "../components/PharmacyCard";

const Home = () => {
  const navigate = useNavigate();

  // ✅ Safe dummy data
  const pharmacies = [
    {
      id: 1,
      name: "City Care Pharmacy",
      address: "Main Street",
      distance: 500,
      available: true,
      medicines: ["Paracetamol", "Ibuprofen", "Amoxicillin"],
    },
    {
      id: 2,
      name: "HealthPlus Pharmacy",
      address: "Near Bus Stand",
      distance: 1200,
      available: true,
      medicines: ["Cough Syrup", "Vitamin C"],
    },
    {
      id: 3,
      name: "MedLife Pharmacy",
      address: "Downtown",
      distance: 2000,
      available: false,
      medicines: [],
    },
  ];

  return (
    <>
      {/* Hero */}
      <div className="hero-section">
        <Container>
          <h1 className="fw-bold mb-3">
            Find Medicines Instantly Near You
          </h1>
          <p className="mb-4">
            Search real-time availability and reserve medicines easily
          </p>

          <div className="d-flex justify-content-center">
            <div style={{ maxWidth: "600px", width: "100%" }}>
              <SearchBar />
            </div>
          </div>
        </Container>
      </div>

      {/* Pharmacies */}
      <section className="section">
        <Container>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="fw-bold">Nearby Pharmacies</h3>
            <Button variant="outline-primary" onClick={() => navigate("/search")}>
              View All
            </Button>
          </div>

          <Row>
            {pharmacies.map((pharmacy) => (
              <Col key={pharmacy.id} md={4} className="mb-4">
                <PharmacyCard pharmacy={pharmacy} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Features */}
      <section className="section bg-light">
        <Container>
          <Row className="text-center">
            <Col md={4} className="mb-4">
              <div className="p-4 bg-white shadow-sm rounded">
                <h5 className="fw-bold">Real-time Stock</h5>
                <p className="text-muted">
                  Accurate medicine availability updates
                </p>
              </div>
            </Col>

            <Col md={4} className="mb-4">
              <div className="p-4 bg-white shadow-sm rounded">
                <h5 className="fw-bold">Quick Reservation</h5>
                <p className="text-muted">
                  Reserve medicines instantly
                </p>
              </div>
            </Col>

            <Col md={4} className="mb-4">
              <div className="p-4 bg-white shadow-sm rounded">
                <h5 className="fw-bold">Nearby Search</h5>
                <p className="text-muted">
                  Find closest pharmacies easily
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;