import React from "react";
import { Button, Badge } from "react-bootstrap";
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
    medicines = [],
  } = pharmacy;

  return (
    <div className="clay-card-inner h-100 p-4">
      <div className="d-flex justify-content-between align-items-start mb-3">
        <h5 className="fw-bold text-primary mb-0">{name}</h5>
        <Badge 
          pill 
          className={available ? "clay-badge-success" : "clay-badge-muted"}
        >
          {available ? "Available" : "Out of Stock"}
        </Badge>
      </div>

      <p className="text-muted mb-1 small">
        <span className="me-2">📍</span>{address}
      </p>

      <p className="text-muted mb-3 small">
        <span className="me-2">🚶</span>
        {distance < 1000 ? `${distance} m` : `${(distance / 1000).toFixed(1)} km`}
      </p>

      {/* Medicines Preview with clay-styled items */}
      {medicines.length > 0 && (
        <div className="mb-4">
          <small className="text-uppercase fw-bold text-muted d-block mb-2" style={{ fontSize: '0.7rem' }}>
            Stocked Items:
          </small>
          <div className="d-flex flex-wrap gap-2">
            {medicines.slice(0, 2).map((med, index) => (
              <span key={index} className="clay-pill-sm">{med}</span>
            ))}
          </div>
        </div>
      )}

      <Button
        className="clay-button-card w-100 border-0"
        onClick={() => navigate(`/pharmacy/${id}`)}
      >
        View Details
      </Button>
    </div>
  );
};

export default PharmacyCard;