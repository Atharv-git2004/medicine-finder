import React, { useState } from "react";
import { Container, Card, Table, Button, Badge, Form, InputGroup, Row, Col, Dropdown } from "react-bootstrap";
import { 
  Search, 
  User, 
  MoreVertical, 
  ShieldCheck, 
  ShieldAlert, 
  Mail, 
  Calendar,
  History,
  UserX
} from "lucide-react";

const ManageUsers = () => {
  // Mock Data for Customers
  const [users, setUsers] = useState([
    { id: "USR-001", name: "Ashik Rahman", email: "ashik@gmail.com", bookings: 12, status: "Active", joined: "2025-11-20" },
    { id: "USR-002", name: "Ashmi Das", email: "ashmi.hindi@yahoo.com", bookings: 5, status: "Active", joined: "2026-02-05" },
    { id: "USR-003", name: "Rahul Raj", email: "rahul.raj@outlook.com", bookings: 0, status: "Inactive", joined: "2026-03-01" },
    { id: "USR-004", name: "Aldrick S", email: "aldrick@gmail.com", bookings: 8, status: "Blocked", joined: "2025-12-15" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  // Function to handle status colors
  const getStatusColor = (status) => {
    switch (status) {
      case "Active": return "success";
      case "Inactive": return "secondary";
      case "Blocked": return "danger";
      default: return "primary";
    }
  };

  return (
    <Container fluid className="py-4">
      {/* --- Page Header --- */}
      <div className="mb-4">
        <h3 className="fw-bold text-dark">User Management</h3>
        <p className="text-muted small">Monitor customer activity and manage account permissions.</p>
      </div>

      {/* --- Search & Stats Summary --- */}
      <Row className="g-4 mb-4">
        <Col lg={8}>
          <Card className="border-0 shadow-sm rounded-4 p-3">
            <InputGroup className="bg-light rounded-3 border-0">
              <InputGroup.Text className="bg-transparent border-0 pe-0">
                <Search size={18} className="text-muted" />
              </InputGroup.Text>
              <Form.Control 
                placeholder="Search by User Name or Email..." 
                className="bg-transparent border-0 py-2 shadow-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </InputGroup>
          </Card>
        </Col>
        <Col lg={4}>
           <Card className="border-0 shadow-sm rounded-4 p-3 bg-primary text-white d-flex flex-row align-items-center justify-content-between">
              <div>
                <p className="small mb-0 opacity-75">Total Active Users</p>
                <h4 className="fw-bold mb-0">1,240</h4>
              </div>
              <User size={32} className="opacity-50" />
           </Card>
        </Col>
      </Row>

      {/* --- Users Table --- */}
      <Card className="border-0 shadow-sm rounded-4 overflow-hidden">
        <Table responsive hover className="mb-0 align-middle">
          <thead className="bg-light border-bottom">
            <tr className="text-muted small text-uppercase fw-bold">
              <th className="ps-4 py-3">User Details</th>
              <th className="py-3">Status</th>
              <th className="py-3 text-center">Bookings</th>
              <th className="py-3">Joined Date</th>
              <th className="py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.filter(u => u.name.toLowerCase().includes(searchTerm.toLowerCase())).map((user) => (
              <tr key={user.id} className="transition-all">
                <td className="ps-4 py-3">
                  <div className="d-flex align-items-center gap-3">
                    <div className="avatar-circle bg-light text-primary d-flex align-items-center justify-content-center fw-bold rounded-circle" style={{ width: '40px', height: '40px' }}>
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold">{user.name}</h6>
                      <div className="text-muted small d-flex align-items-center gap-1">
                        <Mail size={12} /> {user.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <Badge bg={getStatusColor(user.status)} className="rounded-pill px-3 py-1 fw-medium bg-opacity-10 text-capitalize" style={{ color: `var(--bs-${getStatusColor(user.status)})` }}>
                    {user.status}
                  </Badge>
                </td>
                <td className="text-center">
                  <div className="fw-bold">{user.bookings}</div>
                  <span className="text-muted" style={{ fontSize: '0.7rem' }}>Orders</span>
                </td>
                <td className="text-muted small">
                   <div className="d-flex align-items-center gap-1">
                      <Calendar size={14} /> {user.joined}
                   </div>
                </td>
                <td className="text-center">
                  <Dropdown align="end">
                    <Dropdown.Toggle variant="transparent" className="border-0 p-0 shadow-none no-caret">
                      <MoreVertical size={20} className="text-muted cursor-pointer" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="shadow-lg border-0 p-2 rounded-3">
                      <Dropdown.Item className="rounded-2 d-flex align-items-center gap-2 py-2">
                        <History size={16} className="text-primary" /> View Order History
                      </Dropdown.Item>
                      {user.status === "Blocked" ? (
                        <Dropdown.Item className="rounded-2 text-success d-flex align-items-center gap-2 py-2 fw-medium">
                          <ShieldCheck size={16} /> Unblock User
                        </Dropdown.Item>
                      ) : (
                        <Dropdown.Item className="rounded-2 text-warning d-flex align-items-center gap-2 py-2 fw-medium">
                          <ShieldAlert size={16} /> Restrict Account
                        </Dropdown.Item>
                      )}
                      <Dropdown.Divider />
                      <Dropdown.Item className="rounded-2 text-danger d-flex align-items-center gap-2 py-2 fw-bold">
                        <UserX size={16} /> Delete Account
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
        .transition-all:hover { background-color: #f8fbff !important; }
        .avatar-circle { border: 1px solid #dee2e6; }
      `}</style>
    </Container>
  );
};

export default ManageUsers;