import React, { useState } from "react";
import { Container, Card, Table, Button, Badge, Form, InputGroup, Row, Col, Dropdown } from "react-bootstrap";
import { 
  Search, 
  Filter, 
  MoreVertical, 
  CheckCircle, 
  XCircle, 
  Eye, 
  MapPin,
  Phone,
  ShieldAlert,
  Store // Ithu missing aayirunnu
} from "lucide-react";

const ManageSellers = () => {
  // Mock Data
  const [sellers, setSellers] = useState([
    { id: "PH-101", name: "City Care Pharmacy", owner: "Rahul K", location: "Calicut", phone: "9876543210", status: "Active", joined: "2026-01-10" },
    { id: "PH-102", name: "LifeLine Meds", owner: "Sreejith V", location: "Kannur", phone: "9876500001", status: "Pending", joined: "2026-03-15" },
    { id: "PH-103", name: "Green Pharma", owner: "Anjali M", location: "Kozhikode", phone: "9000012345", status: "Active", joined: "2025-12-05" },
    { id: "PH-104", name: "Wellness Point", owner: "Faisal H", location: "Wayanad", phone: "9123456789", status: "Blocked", joined: "2026-02-20" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const getStatusBadge = (status) => {
    switch (status) {
      case "Active": return "success";
      case "Pending": return "warning";
      case "Blocked": return "danger";
      default: return "secondary";
    }
  };

  return (
    <Container fluid className="py-4 px-md-4">
      {/* --- Page Header --- */}
      <div className="mb-4 d-flex justify-content-between align-items-end">
        <div>
          <h3 className="fw-bold text-dark mb-1">Manage Sellers</h3>
          <p className="text-muted small mb-0">Verify and manage all registered Pharmacy partners.</p>
        </div>
        <Badge bg="primary" className="p-2 px-3 rounded-pill bg-opacity-10 text-primary border border-primary border-opacity-25">
          Total: {sellers.length} Sellers
        </Badge>
      </div>

      {/* --- Filters & Search --- */}
      <Card className="border-0 shadow-sm rounded-4 mb-4 p-3 border-start border-4 border-primary">
        <Row className="g-3 align-items-center">
          <Col md={6} lg={5}>
            <InputGroup className="bg-light rounded-3 border">
              <InputGroup.Text className="bg-transparent border-0 pe-0">
                <Search size={18} className="text-muted" />
              </InputGroup.Text>
              <Form.Control 
                placeholder="Search by Pharmacy Name or ID..." 
                className="bg-transparent border-0 py-2 shadow-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </InputGroup>
          </Col>
          <Col md={3} lg={2}>
            <Form.Select className="bg-light border-0 py-2 rounded-3 shadow-none fw-medium text-muted">
              <option>All Status</option>
              <option>Active</option>
              <option>Pending</option>
              <option>Blocked</option>
            </Form.Select>
          </Col>
          <Col md={3} lg={2} className="ms-auto">
             <Button variant="outline-primary" className="w-100 d-flex align-items-center justify-content-center gap-2 py-2 fw-medium rounded-3 shadow-sm bg-white">
                <Filter size={18} /> Filters
             </Button>
          </Col>
        </Row>
      </Card>

      {/* --- Sellers Table --- */}
      <Card className="border-0 shadow-sm rounded-4 overflow-hidden border">
        <Table responsive hover className="mb-0 align-middle">
          <thead className="bg-light border-bottom">
            <tr className="text-muted small text-uppercase fw-bold">
              <th className="ps-4 py-3">Pharmacy Info</th>
              <th className="py-3">Owner</th>
              <th className="py-3">Location</th>
              <th className="py-3 text-center">Status</th>
              <th className="py-3">Joined Date</th>
              <th className="py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sellers.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase())).map((seller) => (
              <tr key={seller.id} className="transition-all">
                <td className="ps-4 py-3">
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-primary bg-opacity-10 p-2 rounded-3 text-primary">
                      <Store size={22} />
                    </div>
                    <div>
                      <div className="fw-bold text-dark">{seller.name}</div>
                      <span className="text-muted" style={{ fontSize: '0.75rem' }}>{seller.id}</span>
                    </div>
                  </div>
                </td>
                <td className="fw-medium text-dark">{seller.owner}</td>
                <td>
                  <div className="d-flex align-items-center gap-2 text-muted small">
                    <MapPin size={14} className="text-primary" /> {seller.location}
                  </div>
                  <div className="d-flex align-items-center gap-2 text-muted small mt-1">
                    <Phone size={14} className="text-success" /> {seller.phone}
                  </div>
                </td>
                <td className="text-center">
                  <Badge 
                    bg={getStatusBadge(seller.status)} 
                    className={`rounded-pill px-3 py-2 fw-medium text-capitalize border border-${getStatusBadge(seller.status)} border-opacity-50`}
                    style={{ backgroundColor: `var(--bs-${getStatusBadge(seller.status)}-bg-subtle)`, color: `var(--bs-${getStatusBadge(seller.status)}-emphasis)` }}
                  >
                    {seller.status}
                  </Badge>
                </td>
                <td className="text-muted small fw-medium">{seller.joined}</td>
                <td className="text-center">
                  <Dropdown align="end">
                    <Dropdown.Toggle variant="transparent" className="border-0 p-1 shadow-none no-caret">
                      <div className="bg-light p-1 rounded-circle">
                        <MoreVertical size={18} className="text-muted cursor-pointer" />
                      </div>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="shadow-lg border-0 p-2 rounded-3 mt-2">
                      <Dropdown.Item className="rounded-2 d-flex align-items-center gap-2 py-2 small">
                        <Eye size={16} className="text-primary" /> View Full Profile
                      </Dropdown.Item>
                      {seller.status === "Pending" && (
                        <Dropdown.Item className="rounded-2 text-success d-flex align-items-center gap-2 py-2 small fw-bold">
                          <CheckCircle size={16} /> Approve Access
                        </Dropdown.Item>
                      )}
                      <Dropdown.Item className="rounded-2 text-warning d-flex align-items-center gap-2 py-2 small fw-medium">
                        <ShieldAlert size={16} /> Suspend Store
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item className="rounded-2 text-danger d-flex align-items-center gap-2 py-2 small fw-bold">
                        <XCircle size={16} /> Delete / Block
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>

      <style>{`
        .no-caret::after { display: none !important; }
        .cursor-pointer { cursor: pointer; }
        .transition-all { transition: all 0.2s ease; }
        .transition-all:hover { background-color: #f8faff !important; }
        .table > :not(caption) > * > * { border-bottom-width: 1px !important; border-color: #f1f1f1 !important; }
      `}</style>
    </Container>
  );
};

export default ManageSellers;