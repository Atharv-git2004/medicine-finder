import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import PharmacyCard from "../components/PharmacyCard";


const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const medicine = queryParams.get("medicine");

  const pharmacies = [
    { id: 1, name: "City Care Pharmacy", address: "Calicut", distance: "1.2 km", medicines: ["Paracetamol", "Dolo"], available: true },
    { id: 2, name: "HealthPlus Pharmacy", address: "Kozhikode", distance: "2.5 km", medicines: ["Aspirin"], available: false },
    { id: 3, name: "MediLife Pharmacy", address: "Malaparamba", distance: "3 km", medicines: ["Paracetamol", "Ibuprofen"], available: true },
  ];

  return (
    <div className="clay-results-bg">
      <Container className="py-5">
        {/* Header Section */}
        <div className="clay-header-panel p-4 mb-5">
          <h3 className="fw-bold text-primary">
            Search Results {medicine && <span className="text-dark">for "{medicine}"</span>}
          </h3>
          <p className="text-muted mb-0">
            Showing nearby pharmacies with available stock
          </p>
        </div>

        {/* Filter Section */}
        <Row className="mb-5 justify-content-start">
          <Col md={4}>
            <div className="clay-filter-container">
              <Form.Select className="clay-select border-0 shadow-none">
                <option>Sort by Distance</option>
                <option>Sort by Availability</option>
              </Form.Select>
            </div>
          </Col>
        </Row>

        {/* Results Grid */}
        <Row>
          {pharmacies.length > 0 ? (
            pharmacies.map((pharmacy) => (
              <Col md={4} sm={6} xs={12} key={pharmacy.id} className="mb-4">
                {/* PharmacyCard now automatically inherits the clay style we made earlier */}
                <PharmacyCard pharmacy={pharmacy} />
              </Col>
            ))
          ) : (
            <Col xs={12}>
              <div className="clay-card p-5 text-center">
                <p className="text-muted mb-0">No pharmacies found matching your search.</p>
              </div>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default SearchResults;