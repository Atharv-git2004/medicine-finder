import React from "react";
import { Container, Row, Col, Card, Table, Button, Badge } from "react-bootstrap";
import { 
  Users, 
  Store, 
  Package, 
  AlertCircle, 
  TrendingUp, 
  CheckCircle2, 
  XCircle,
  ArrowUpRight
} from "lucide-react";

const AdminDashboard = () => {
  
  // Mock Data for Statistics
  const stats = [
    { title: "Total Users", value: "1,250", icon: <Users size={24} />, color: "primary", trend: "+12%" },
    { title: "Active Sellers", value: "48", icon: <Store size={24} />, color: "success", trend: "+5%" },
    { title: "Medicines Listed", value: "8,420", icon: <Package size={24} />, color: "info", trend: "+18%" },
    { title: "Pending Approvals", value: "07", icon: <AlertCircle size={24} />, color: "warning", trend: "Needs Action" },
  ];

  // Mock Data for Recent Seller Requests
  const pendingSellers = [
    { id: 1, name: "Life Care Pharmacy", location: "Kozhikode", date: "2026-03-15", status: "Pending" },
    { id: 2, name: "Wellness Meds", location: "Kannur", date: "2026-03-17", status: "Pending" },
    { id: 3, name: "A-One Pharma", location: "Calicut", date: "2026-03-18", status: "In Review" },
  ];

  return (
    <div className="admin-dashboard-content">
      <Container fluid className="p-0">
        
        {/* --- Header Section --- */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h3 className="fw-bold mb-1">Dashboard Overview</h3>
            <p className="text-muted small">Welcome back, Atharv! Here's what's happening today.</p>
          </div>
          <Button variant="primary" className="d-flex align-items-center gap-2 rounded-3 shadow-sm px-4">
            <TrendingUp size={18} /> Download Report
          </Button>
        </div>

        {/* --- Stats Cards --- */}
        <Row className="g-4 mb-5">
          {stats.map((item, index) => (
            <Col key={index} sm={6} lg={3}>
              <Card className="border-0 shadow-sm rounded-4 p-3 h-100 hover-lift transition-all">
                <Card.Body className="p-0">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className={`p-3 rounded-4 bg-${item.color} bg-opacity-10 text-${item.color}`}>
                      {item.icon}
                    </div>
                    <Badge bg={item.color === 'warning' ? 'warning' : 'success'} className="bg-opacity-10 text-dark border-0 rounded-pill px-2 py-1" style={{ fontSize: '0.7rem' }}>
                      {item.trend}
                    </Badge>
                  </div>
                  <h4 className="fw-bold mb-1">{item.value}</h4>
                  <p className="text-muted small mb-0 fw-medium">{item.title}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="g-4">
          {/* --- Recent Seller Approvals Table --- */}
          <Col lg={8}>
            <Card className="border-0 shadow-sm rounded-4 h-100 overflow-hidden">
              <Card.Header className="bg-white border-0 p-4 d-flex justify-content-between align-items-center">
                <h5 className="fw-bold mb-0">Seller Approval Requests</h5>
                <Button variant="link" className="text-primary text-decoration-none small p-0">View All</Button>
              </Card.Header>
              <Card.Body className="p-0">
                <Table responsive hover className="mb-0 align-middle custom-table">
                  <thead className="bg-light">
                    <tr>
                      <th className="ps-4 border-0 text-muted small text-uppercase fw-bold">Pharmacy Name</th>
                      <th className="border-0 text-muted small text-uppercase fw-bold">Location</th>
                      <th className="border-0 text-muted small text-uppercase fw-bold">Date Applied</th>
                      <th className="border-0 text-muted small text-uppercase fw-bold">Status</th>
                      <th className="pe-4 border-0 text-muted small text-uppercase fw-bold text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pendingSellers.map((seller) => (
                      <tr key={seller.id}>
                        <td className="ps-4 fw-bold">{seller.name}</td>
                        <td>{seller.location}</td>
                        <td>{seller.date}</td>
                        <td>
                          <Badge bg={seller.status === 'Pending' ? 'warning' : 'info'} className="rounded-pill fw-medium">
                            {seller.status}
                          </Badge>
                        </td>
                        <td className="pe-4 text-center">
                          <div className="d-flex gap-2 justify-content-center">
                            <Button variant="success" size="sm" className="rounded-circle p-1 shadow-sm" title="Approve">
                              <CheckCircle2 size={16} />
                            </Button>
                            <Button variant="danger" size="sm" className="rounded-circle p-1 shadow-sm" title="Reject">
                              <XCircle size={16} />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>

          {/* --- Quick System Logs / Actions --- */}
          <Col lg={4}>
            <Card className="border-0 shadow-sm rounded-4 h-100 p-3">
              <h5 className="fw-bold mb-4 ps-2">System Insights</h5>
              
              <div className="action-item d-flex align-items-center gap-3 p-3 rounded-4 mb-3 bg-light transition-all cursor-pointer">
                <div className="p-2 rounded-circle bg-primary text-white">
                  <ArrowUpRight size={18} />
                </div>
                <div>
                  <h6 className="mb-0 fw-bold small">Audit Logs</h6>
                  <p className="text-muted mb-0" style={{ fontSize: '0.75rem' }}>Check admin activity history</p>
                </div>
              </div>

              <div className="action-item d-flex align-items-center gap-3 p-3 rounded-4 mb-3 bg-light transition-all cursor-pointer border-start border-warning border-4">
                <div className="p-2 rounded-circle bg-warning text-dark">
                  <AlertCircle size={18} />
                </div>
                <div>
                  <h6 className="mb-0 fw-bold small">Critical Alerts</h6>
                  <p className="text-muted mb-0" style={{ fontSize: '0.75rem' }}>2 Pharmacies report low stocks</p>
                </div>
              </div>

              <div className="mt-auto p-3 rounded-4 bg-primary bg-opacity-10 text-center">
                <p className="small text-primary fw-bold mb-0">System Status: Optimal</p>
              </div>
            </Card>
          </Col>
        </Row>

      </Container>

      {/* Internal CSS for Animations & Refinement */}
      <style>{`
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1) !important;
        }
        .transition-all {
          transition: all 0.3s ease-in-out;
        }
        .custom-table th, .custom-table td {
          padding: 1rem 0.5rem;
        }
        .cursor-pointer {
          cursor: pointer;
        }
        .action-item:hover {
          background-color: #e2e6ea !important;
        }
      `}</style>
    </div>
  );
};

export default AdminDashboard;