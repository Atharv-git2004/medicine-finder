import React, { useState } from "react";
import { Container, Card, Table, Button, Badge, Form, InputGroup, Row, Col } from "react-bootstrap";
import { 
  Search, 
  Clock, 
  CheckCircle, 
  XCircle, 
  User, 
  Phone, 
  Calendar,
  Filter,
  Eye
} from "lucide-react";

const ViewReservations = () => {
  // Mock Data for Medicine Reservations
  const [reservations, setReservations] = useState([
    { id: "RES-4401", customer: "Ashik Rahman", medicine: "Paracetamol 500mg", qty: 2, time: "10:30 AM", date: "Today", status: "Pending", phone: "9876543210" },
    { id: "RES-4402", customer: "Sneha Das", medicine: "Amoxicillin 250mg", qty: 1, time: "09:15 AM", date: "Today", status: "Completed", phone: "9000012345" },
    { id: "RES-4398", customer: "Rahul Raj", medicine: "Insulin Pen", qty: 1, time: "05:45 PM", date: "Yesterday", status: "Expired", phone: "9123456789" },
    { id: "RES-4405", customer: "Aldrick S", medicine: "Cetirizine", qty: 3, time: "Just Now", date: "Today", status: "Pending", phone: "9555566666" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  // Status Badge Logic
  const getStatusBadge = (status) => {
    switch (status) {
      case "Pending": return "warning";
      case "Completed": return "success";
      case "Expired": return "danger";
      default: return "secondary";
    }
  };

  return (
    <Container fluid className="py-4">
      {/* --- Page Header --- */}
      <div className="mb-4">
        <h3 className="fw-bold text-dark">Medicine Reservations</h3>
        <p className="text-muted small">Manage and track customer medicine pickups in real-time.</p>
      </div>

      {/* --- Filter & Search Section --- */}
      <Card className="border-0 shadow-sm rounded-4 mb-4 p-3">
        <Row className="g-3 align-items-center">
          <Col md={6} lg={4}>
            <InputGroup className="bg-light rounded-3 border-0">
              <InputGroup.Text className="bg-transparent border-0 pe-0">
                <Search size={18} className="text-muted" />
              </InputGroup.Text>
              <Form.Control 
                placeholder="Search by Customer or Order ID..." 
                className="bg-transparent border-0 py-2 shadow-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </InputGroup>
          </Col>
          <Col md={3} lg={2}>
            <Form.Select className="bg-light border-0 py-2 rounded-3 shadow-none fw-medium text-muted">
              <option>All Status</option>
              <option>Pending</option>
              <option>Completed</option>
              <option>Expired</option>
            </Form.Select>
          </Col>
          <Col md={3} lg={2}>
             <Button variant="outline-primary" className="w-100 d-flex align-items-center justify-content-center gap-2 py-2 rounded-3 border-dashed">
                <Filter size={18} /> Filter Date
             </Button>
          </Col>
        </Row>
      </Card>

      {/* --- Reservations Table --- */}
      <Card className="border-0 shadow-sm rounded-4 overflow-hidden">
        <Table responsive hover className="mb-0 align-middle">
          <thead className="bg-light border-bottom text-muted small text-uppercase fw-bold">
            <tr>
              <th className="ps-4 py-3 border-0">Customer Info</th>
              <th className="py-3 border-0">Medicine Details</th>
              <th className="py-3 border-0">Reservation Time</th>
              <th className="py-3 border-0">Status</th>
              <th className="pe-4 py-3 border-0 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reservations.filter(r => r.customer.toLowerCase().includes(searchTerm.toLowerCase())).map((res) => (
              <tr key={res.id} className="transition-all">
                <td className="ps-4 py-3">
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-info bg-opacity-10 p-2 rounded-circle text-info">
                      <User size={20} />
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold">{res.customer}</h6>
                      <div className="text-muted small d-flex align-items-center gap-1">
                        <Phone size={12} /> {res.phone}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="fw-bold text-dark">{res.medicine}</div>
                  <span className="text-muted small">Quantity: {res.qty} Units</span>
                </td>
                <td>
                  <div className="d-flex align-items-center gap-2 text-dark small fw-medium">
                    <Clock size={14} className="text-primary" /> {res.time}
                  </div>
                  <div className="text-muted" style={{ fontSize: '0.7rem' }}>{res.date}</div>
                </td>
                <td>
                  <Badge bg={getStatusBadge(res.status)} className="rounded-pill px-3 py-1 bg-opacity-10" style={{ color: `var(--bs-${getStatusBadge(res.status)})` }}>
                    {res.status}
                  </Badge>
                </td>
                <td className="pe-4 text-center">
                  <div className="d-flex gap-2 justify-content-center">
                    {res.status === "Pending" && (
                      <>
                        <Button variant="success" size="sm" className="rounded-3 d-flex align-items-center gap-1 px-2 fw-bold shadow-sm">
                          <CheckCircle size={14} /> Mark Picked
                        </Button>
                        <Button variant="outline-danger" size="sm" className="rounded-3 p-1">
                          <XCircle size={16} />
                        </Button>
                      </>
                    )}
                    {res.status !== "Pending" && (
                      <Button variant="light" size="sm" className="rounded-3 d-flex align-items-center gap-1 px-3 border shadow-sm small fw-bold">
                        <Eye size={14} /> Details
                      </Button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>

      <style>{`
        .transition-all { transition: all 0.2s ease; }
        .transition-all:hover { background-color: #fbfcfe !important; }
        .border-dashed { border-style: dashed !important; }
      `}</style>
    </Container>
  );
};

export default ViewReservations;