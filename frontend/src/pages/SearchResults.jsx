import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import PharmacyCard from "../components/PharmacyCard";

const SearchResults = () => {
  const location = useLocation();

  // Get query param
  const queryParams = new URLSearchParams(location.search);
  const medicine = queryParams.get("medicine");

  // Dummy data for UI
  const pharmacies = [
    {
      id: 1,
      name: "City Care Pharmacy",
      address: "Calicut",
      distance: "1.2 km",
      medicines: ["Paracetamol", "Dolo"],
      available: true,
    },
    {
      id: 2,
      name: "HealthPlus Pharmacy",
      address: "Kozhikode",
      distance: "2.5 km",
      medicines: ["Aspirin"],
      available: false,
    },
    {
      id: 3,
      name: "MediLife Pharmacy",
      address: "Malaparamba",
      distance: "3 km",
      medicines: ["Paracetamol", "Ibuprofen"],
      available: true,
    },
  ];

  return (
    <Container className="mt-4">
      {/* Header */}
      <div className="mb-4">
        <h3 className="fw-bold">
          Search Results {medicine && `for "${medicine}"`}
        </h3>
        <p className="text-muted">
          Showing nearby pharmacies with available stock
        </p>
      </div>

      {/* Filter */}
      <Row className="mb-4">
        <Col md={4}>
          <Form.Select>
            <option>Sort by Distance</option>
            <option>Sort by Availability</option>
          </Form.Select>
        </Col>
      </Row>

      {/* Results */}
      <Row>
        {pharmacies.length > 0 ? (
          pharmacies.map((pharmacy) => (
            <Col md={4} sm={6} xs={12} key={pharmacy.id}>
              <PharmacyCard pharmacy={pharmacy} />
            </Col>
          ))
        ) : (
          <p className="text-center text-muted">
            No pharmacies found
          </p>
        )}
      </Row>
    </Container>
  );
};

export default SearchResults;