import React from "react";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";


const Reservations = () => {
  const reservations = [
    { id: 1, medicine: "Paracetamol", pharmacy: "City Care Pharmacy", status: "Reserved", expiry: "20 mins left" },
    { id: 2, medicine: "Dolo 650", pharmacy: "HealthPlus Pharmacy", status: "Collected", expiry: "Completed" },
    { id: 3, medicine: "Aspirin", pharmacy: "MediLife Pharmacy", status: "Expired", expiry: "Expired" },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "Reserved": return "clay-badge-warning";
      case "Collected": return "clay-badge-success";
      case "Expired": return "clay-badge-secondary";
      default: return "clay-badge-primary";
    }
  };

  return (
    <div className="clay-reservations-wrapper">
      <Container className="py-5">
        <div className="clay-panel-header p-4 mb-5">
          <h2 className="fw-bold text-primary mb-0">Your Reservations</h2>
          <p className="text-muted mb-0">Track and manage your medicine pickups</p>
        </div>

        <Row>
          {reservations.length > 0 ? (
            reservations.map((item) => (
              <Col md={6} key={item.id} className="mb-4">
                <div className="clay-res-card h-100 p-4">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div>
                      <h4 className="fw-bold text-dark mb-1">{item.medicine}</h4>
                      <p className="text-muted small mb-0">🏥 {item.pharmacy}</p>
                    </div>
                    <Badge pill className={`${getStatusClass(item.status)} px-3 py-2`}>
                      {item.status}
                    </Badge>
                  </div>

                  <div className="clay-status-tray p-3 mb-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="small fw-bold text-muted">Time Status:</span>
                      <span className={`small fw-bold ${item.status === 'Reserved' ? 'text-warning' : 'text-secondary'}`}>
                        {item.expiry}
                      </span>
                    </div>
                  </div>

                  <div className="d-flex justify-content-end">
                    <Button className="clay-btn-sm-outline">
                      View Details
                    </Button>
                  </div>
                </div>
              </Col>
            ))
          ) : (
            <div className="text-center w-100 py-5">
              <div className="clay-res-card d-inline-block p-5">
                <p className="text-muted mb-0">No active reservations found.</p>
              </div>
            </div>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Reservations;