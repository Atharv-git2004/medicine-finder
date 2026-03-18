import React from "react";
import { Card, Badge } from "react-bootstrap";
import { MapPin, Navigation } from "lucide-react"; // npm install lucide-react

const MapView = ({ lat = 11.2588, lng = 75.7804, pharmacyName = "Pharmacy Location" }) => {
  
  // Reliable Google Maps Embed URL
  const mapUrl = `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`;

  return (
    <Card className="border-0 shadow-sm rounded-4 overflow-hidden mt-4">
      <Card.Header className="bg-white border-0 p-4 pb-0 d-flex justify-content-between align-items-center">
        <div>
          <h5 className="fw-bold text-dark mb-1">
            <MapPin size={20} className="text-primary me-2 mb-1" />
            {pharmacyName}
          </h5>
          <p className="text-muted small mb-0 ms-4 ps-1">
            Lat: {lat.toFixed(4)}, Lng: {lng.toFixed(4)}
          </p>
        </div>
        <Badge 
          bg="success" 
          pill 
          className="px-3 py-2 d-flex align-items-center gap-2 shadow-sm"
          style={{ fontSize: '0.75rem' }}
        >
          <span className="live-dot"></span> Live View
        </Badge>
      </Card.Header>

      <Card.Body className="p-3">
        <div 
          className="rounded-4 overflow-hidden border shadow-inner position-relative"
          style={{ height: "400px", backgroundColor: "#f0f0f0" }}
        >
          <iframe
            title="pharmacy-map"
            src={mapUrl}
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            style={{ 
              border: 0, 
              filter: "contrast(1.1) brightness(1.05)",
              borderRadius: "12px"
            }}
          ></iframe>
        </div>
        
        {/* Navigation Action */}
        <div className="text-center mt-3">
          <a 
            href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary btn-sm rounded-pill px-4 fw-bold shadow-sm d-inline-flex align-items-center gap-2"
          >
            <Navigation size={14} /> Get Directions
          </a>
        </div>
      </Card.Body>

      {/* Internal CSS for the Live Dot animation */}
      <style>{`
        .live-dot {
          width: 8px;
          height: 8px;
          background-color: #fff;
          border-radius: 50%;
          display: inline-block;
          animation: pulse 1.5s infinite;
        }
        @keyframes pulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(255, 255, 255, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
        }
      `}</style>
    </Card>
  );
};

export default MapView;