import React from "react";


const MapView = ({ lat = 11.2588, lng = 75.7804 }) => {
  // Fixed the map URL format for a reliable embed
  const mapUrl = `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`;

  return (
    <div className="clay-map-card mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4 px-2">
        <h4 className="fw-bold text-dark mb-0">Pharmacy Location</h4>
        <div className="clay-live-indicator">
          <span className="dot"></span> Live View
        </div>
      </div>

      <div className="clay-map-outer-frame p-3">
        <div className="clay-map-inner-screen">
          <iframe
            title="pharmacy-map"
            src={mapUrl}
            width="100%"
            height="400px"
            loading="lazy"
            allowFullScreen
            style={{ border: 0, filter: "grayscale(0.1) contrast(1.1)" }}
          ></iframe>
        </div>
      </div>
      
      <div className="text-center mt-3">
        <p className="text-muted small fw-medium">
          Coordinates: {lat.toFixed(4)}, {lng.toFixed(4)}
        </p>
      </div>
    </div>
  );
};

export default MapView;