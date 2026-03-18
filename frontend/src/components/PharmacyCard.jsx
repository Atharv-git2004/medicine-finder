import React from "react";
import { Button, Badge, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { formatDistance } from "../utils/helpers";

const PharmacyCard = ({ pharmacy }) => {
  const navigate = useNavigate();

  if (!pharmacy) return null;

  const {
    id,
    name,
    address,
    distance,
    available,
    medicines = [],
  } = pharmacy;

  return (
    <Card className="border-0 shadow-sm rounded-4 h-100 bg-white hover-shadow transition-all">
      <Card.Body className="p-4 d-flex flex-column">
        {/* Header: Name and Status */}
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h6 className="fw-bold text-dark mb-0" style={{ fontSize: '1.1rem' }}>{name}</h6>
          <Badge 
            pill 
            bg={available ? "success" : "secondary"} 
            className="px-3 py-2 small fw-bold"
            style={{ opacity: available ? 1 : 0.7 }}
          >
            {available ? "In Stock" : "Out of Stock"}
          </Badge>
        </div>

        {/* Location Info */}
        <div className="text-muted mb-3 small">
          <div className="d-flex align-items-center mb-1">
            <span className="me-2 text-primary">📍</span>
            <span className="text-truncate">{address}</span>
          </div>
          <div className="d-flex align-items-center">
            <span className="me-2 text-primary">🚗</span>
            <span>{formatDistance(distance)} away</span>
          </div>
        </div>

        {/* Medicines Preview - E-commerce style chips */}
        {medicines.length > 0 && (
          <div className="mb-4 mt-auto">
            <small className="text-uppercase fw-bold text-muted d-block mb-2" style={{ fontSize: '0.65rem', letterSpacing: '0.5px' }}>
              Commonly Stocked:
            </small>
            <div className="d-flex flex-wrap gap-2">
              {medicines.slice(0, 2).map((med, index) => (
                <span 
                  key={index} 
                  className="badge bg-light text-primary border rounded-pill px-3 py-1 fw-normal"
                  style={{ fontSize: '0.75rem' }}
                >
                  {med}
                </span>
              ))}
              {medicines.length > 2 && (
                <span className="text-muted small align-self-center">+{medicines.length - 2} more</span>
              )}
            </div>
          </div>
        )}

        {/* Action Button */}
        <Button
          variant={available ? "primary" : "outline-secondary"}
          className="w-100 rounded-pill fw-bold py-2 mt-2 shadow-sm"
          onClick={() => navigate(`/pharmacy/${id}`)}
        >
          {available ? "Book Medicines" : "View Details"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PharmacyCard;