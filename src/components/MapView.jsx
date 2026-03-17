import React from "react";
import { Card } from "react-bootstrap";

const MapView = ({ lat = 11.2588, lng = 75.7804 }) => {
  // Default location: Calicut (for UI demo)

  const mapUrl = `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`;

  return (
    <Card className="shadow-sm border-0">
      <Card.Body>
        <Card.Title className="fw-bold mb-3">
          Pharmacy Location
        </Card.Title>

        <div
          style={{
            width: "100%",
            height: "350px",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <iframe
            title="map"
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MapView;