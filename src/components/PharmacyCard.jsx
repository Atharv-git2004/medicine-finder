import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PharmacyCard = ({ pharmacy }) => {
  const navigate = useNavigate();

  if (!pharmacy) return null;

  const {
    id,
    name,
    address,
    distance,
    available,
    medicines = [], // ✅ safe default
  } = pharmacy;

  return (
    <Card className="shadow-sm h-100">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start mb-2">
          <Card.Title className="fw-bold">{name}</Card.Title>

          <Badge bg={available ? "success" : "secondary"}>
            {available ? "Available" : "Out of Stock"}
          </Badge>
        </div>

        <Card.Text className="text-muted mb-1">
          📍 {address}
        </Card.Text>

        <Card.Text className="text-muted mb-2">
          🚶 {distance < 1000 ? `${distance} m` : `${(distance / 1000).toFixed(1)} km`}
        </Card.Text>

        {/* Medicines Preview */}
        {medicines.length > 0 && (
          <div className="mb-3">
            <small className="text-muted">Medicines:</small>
            <ul className="mb-0">
              {medicines.slice(0, 3).map((med, index) => (
                <li key={index}>{med}</li>
              ))}
            </ul>
          </div>
        )}

        <Button
          variant="primary"
          className="w-100"
          onClick={() => navigate(`/pharmacy/${id}`)}
        >
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PharmacyCard;