import React from "react";
import { Container, Row, Col, Badge, Button, Card } from "react-bootstrap";
import { Clock, CheckCircle2, XCircle, MapPin, Pill, ArrowRight, Calendar } from "lucide-react"; // npm install lucide-react

const Reservations = () => {
  // Mock data for reservations
  const reservations = [
    { id: 1, medicine: "Paracetamol 500mg", pharmacy: "City Care Pharmacy", status: "Active", expiry: "18 mins left", date: "18 March 2026" },
    { id: 2, medicine: "Dolo 650", pharmacy: "HealthPlus Pharmacy", status: "Collected", expiry: "Completed", date: "15 March 2026" },
    { id: 3, medicine: "Aspirin", pharmacy: "MediLife Pharmacy", status: "Expired", expiry: "Time out", date: "10 March 2026" },
  ];

  // Professional status colors and icons
  const getStatusMeta = (status) => {
    switch (status) {
      case "Active": 
        return { color: "warning", bg: "#fff3cd", icon: <Clock size={16} className="text-warning" />, label: "Active Reservation" };
      case "Collected": 
        return { color: "success", bg: "#d1e7dd", icon: <CheckCircle2 size={16} className="text-success" />, label: "Collected" };
      case "Expired": 
        return { color: "danger", bg: "#f8d7da", icon: <XCircle size={16} className="text-danger" />, label: "Expired" };
      default: 
        return { color: "secondary", bg: "#e2e3e5", icon: <Clock size={16} />, label: status };
    }
  };

  return (
    <div className="min-vh-100 pb-5" style={{ backgroundColor: "#f8f9fa" }}>
      
      {/* --- HEADER SECTION --- */}
      <div className="bg-white border-bottom py-5 mb-5 shadow-sm">
        <Container>
          <Row className="align-items-center">
            <Col md={8}>
              <h1 className="fw-bold text-dark mb-2">My Reservations</h1>
              <p className="text-muted mb-0 fs-5">Track your medicine pickups and check remaining time.</p>
            </Col>
            <Col md={4} className="text-md-end mt-3 mt-md-0">
               <Badge bg="primary-soft" className="text-primary p-2 px-3 rounded-pill fw-bold" style={{ backgroundColor: '#e7f1ff' }}>
                 Total: {reservations.length} Orders
               </Badge>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <Row className="g-4">
          {reservations.length > 0 ? (
            reservations.map((item) => {
              const meta = getStatusMeta(item.status);
              return (
                <Col md={6} key={item.id}>
                  <Card className="border-0 shadow-sm rounded-4 h-100 hover-lift overflow-hidden">
                    {/* Status Top Bar */}
                    <div style={{ height: '4px', backgroundColor: `var(--bs-${meta.color})` }}></div>
                    
                    <Card.Body className="p-4">
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <div className="d-flex align-items-center gap-3">
                          <div className="bg-light p-3 rounded-4">
                            <Pill className="text-primary" size={24} />
                          </div>
                          <div>
                            <h4 className="fw-bold text-dark mb-1">{item.medicine}</h4>
                            <div className="d-flex align-items-center gap-2 text-muted small">
                              <MapPin size={14} /> {item.pharmacy}
                            </div>
                          </div>
                        </div>
                        <Badge 
                          className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill border-0 fw-bold" 
                          style={{ backgroundColor: meta.bg, color: `var(--bs-${meta.color})`, fontSize: '0.75rem' }}
                        >
                          {meta.icon} {meta.label}
                        </Badge>
                      </div>

                      <hr className="my-4 opacity-25" />

                      <Row className="mb-4">
                        <Col xs={6}>
                          <div className="small text-muted mb-1">Reservation Date</div>
                          <div className="fw-bold d-flex align-items-center gap-2">
                             <Calendar size={14} className="text-muted" /> {item.date}
                          </div>
                        </Col>
                        <Col xs={6} className="text-end">
                          <div className="small text-muted mb-1">Time Left</div>
                          <div className={`fw-bold ${item.status === 'Active' ? 'text-danger animate-pulse' : 'text-dark'}`}>
                            {item.expiry}
                          </div>
                        </Col>
                      </Row>

                      <div className="d-flex gap-2">
                        <Button variant="primary" className="w-100 rounded-pill fw-bold py-2 shadow-sm d-flex align-items-center justify-content-center gap-2">
                          View Details <ArrowRight size={16} />
                        </Button>
                        {item.status === 'Active' && (
                          <Button variant="outline-danger" className="rounded-pill px-4 fw-bold">
                            Cancel
                          </Button>
                        )}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
          ) : (
            <Col xs={12} className="text-center py-5">
              <div className="bg-white p-5 rounded-4 shadow-sm d-inline-block">
                <Clock size={48} className="text-muted mb-3 opacity-25" />
                <h5 className="fw-bold">No Reservations Found</h5>
                <p className="text-muted mb-4">Start searching for medicines to make a reservation.</p>
                <Button variant="primary" className="rounded-pill px-4 fw-bold" onClick={() => window.location.href = '/search'}>
                  Go to Search
                </Button>
              </div>
            </Col>
          )}
        </Row>
      </Container>

      {/* Internal CSS for Animations */}
      <style>{`
        .animate-pulse {
          animation: pulse-red 2s infinite;
        }
        @keyframes pulse-red {
          0% { opacity: 1; }
          50% { opacity: 0.6; }
          100% { opacity: 1; }
        }
        .hover-lift {
          transition: transform 0.2s ease, shadow 0.2s ease;
        }
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
        }
      `}</style>
    </div>
  );
};

export default Reservations;