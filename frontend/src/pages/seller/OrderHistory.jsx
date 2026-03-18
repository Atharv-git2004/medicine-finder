import React, { useState } from "react";
import { Container, Card, Table, Button, Badge, Form, Row, Col, InputGroup } from "react-bootstrap";
import { 
  Search, 
  Calendar, 
  Download, 
  ExternalLink, 
  Clock, 
  CheckCircle, 
  XCircle,
  Filter
} from "lucide-react";

const OrderHistory = () => {
  // Mock Data for Past Orders
  const [history, setHistory] = useState([
    { id: "ORD-9901", customer: "Atharv P", items: "Paracetamol (2), Dolo (1)", total: 145, date: "2026-03-10", status: "Completed" },
    { id: "ORD-9902", customer: "Sreejith V", items: "Amoxicillin (1)", total: 85, date: "2026-03-12", status: "Cancelled" },
    { id: "ORD-9903", customer: "Anjali M", items: "Cetirizine (3), Vitamin C (1)", total: 210, date: "2026-03-14", status: "Completed" },
    { id: "ORD-9904", customer: "Rahul K", items: "Insulin (1)", total: 450, date: "2026-03-15", status: "Completed" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const getStatusBadge = (status) => {
    return status === "Completed" ? "success" : "danger";
  };

  return (
    <Container fluid className="py-4 px-md-4">
      {/* --- Page Header --- */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
        <div>
          <h3 className="fw-bold text-dark">Order History</h3>
          <p className="text-muted small mb-0">Review all your past medicine sales and cancellations.</p>
        </div>
        <Button variant="outline-primary" className="d-flex align-items-center gap-2 rounded-3 px-4 shadow-sm fw-bold border-2">
          <Download size={18} /> Export CSV
        </Button>
      </div>

      {/* --- Filter Section --- */}
      <Card className="border-0 shadow-sm rounded-4 mb-4 p-3 border">
        <Row className="g-3">
          <Col lg={5} md={6}>
            <InputGroup className="bg-light rounded-3 border">
              <InputGroup.Text className="bg-transparent border-0 pe-0 text-muted">
                <Search size={18} />
              </InputGroup.Text>
              <Form.Control 
                placeholder="Search by Order ID or Customer Name..." 
                className="bg-transparent border-0 py-2 shadow-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </InputGroup>
          </Col>
          <Col lg={3} md={3}>
            <Form.Control type="date" className="bg-light border py-2 rounded-3 shadow-none text-muted" />
          </Col>
          <Col lg={2} md={3}>
            <Form.Select className="bg-light border py-2 rounded-3 shadow-none fw-medium text-muted">
              <option>All Status</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </Form.Select>
          </Col>
          <Col lg={2} md={12}>
            <Button variant="light" className="w-100 py-2 border rounded-3 d-flex align-items-center justify-content-center gap-2 fw-bold">
              <Filter size={18} /> Filter
            </Button>
          </Col>
        </Row>
      </Card>

      {/* --- History Table --- */}
      <Card className="border-0 shadow-sm rounded-4 overflow-hidden border">
        <Table responsive hover className="mb-0 align-middle">
          <thead className="bg-light border-bottom text-muted small text-uppercase fw-bold">
            <tr>
              <th className="ps-4 py-3">Order ID</th>
              <th className="py-3">Customer</th>
              <th className="py-3">Medicines</th>
              <th className="py-3">Total (₹)</th>
              <th className="py-3">Date</th>
              <th className="py-3 text-center">Status</th>
              <th className="pe-4 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {history.filter(order => 
              order.customer.toLowerCase().includes(searchTerm.toLowerCase()) || 
              order.id.toLowerCase().includes(searchTerm.toLowerCase())
            ).map((order) => (
              <tr key={order.id} className="transition-all">
                <td className="ps-4 py-3 fw-bold text-primary small">
                  {order.id}
                </td>
                <td className="fw-medium text-dark">{order.customer}</td>
                <td className="text-muted small" style={{ maxWidth: "200px" }}>
                  {order.items}
                </td>
                <td className="fw-bold text-dark">₹{order.total}</td>
                <td>
                  <div className="d-flex align-items-center gap-2 text-muted small">
                    <Calendar size={14} /> {order.date}
                  </div>
                </td>
                <td className="text-center">
                  <Badge 
                    bg={getStatusBadge(order.status)} 
                    className="rounded-pill px-3 py-2 bg-opacity-10 fw-medium"
                    style={{ color: `var(--bs-${getStatusBadge(order.status)})` }}
                  >
                    {order.status === "Completed" ? <CheckCircle size={12} className="me-1"/> : <XCircle size={12} className="me-1"/>}
                    {order.status}
                  </Badge>
                </td>
                <td className="pe-4 text-center">
                  <Button variant="light" size="sm" className="rounded-3 border px-3 py-1 small d-flex align-items-center gap-1 mx-auto">
                    <ExternalLink size={14} /> Details
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>

      <style>{`
        .transition-all { transition: all 0.2s ease; }
        .transition-all:hover { background-color: #f8fbff !important; }
      `}</style>
    </Container>
  );
};

export default OrderHistory;