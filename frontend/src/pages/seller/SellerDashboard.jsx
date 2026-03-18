import React from "react";
import { Container, Row, Col, Card, Table, Button, Badge, ProgressBar } from "react-bootstrap";
import { 
  Package, 
  ClipboardCheck, 
  AlertTriangle, 
  TrendingUp, 
  PlusCircle, 
  Clock, 
  ChevronRight,
  ArrowUpRight
} from "lucide-react";

const SellerDashboard = () => {
  
  // Mock Data for Pharmacy Stats
  const stats = [
    { title: "Total Medicines", value: "420", icon: <Package size={24} />, color: "primary", subtitle: "Active in stock" },
    { title: "New Reservations", value: "12", icon: <ClipboardCheck size={24} />, color: "success", subtitle: "Pending pickup" },
    { title: "Low Stock Items", value: "05", icon: <AlertTriangle size={24} />, color: "danger", subtitle: "Needs reorder" },
    { title: "Today's Views", value: "850", icon: <TrendingUp size={24} />, color: "info", subtitle: "Customer searches" },
  ];

  // Mock Data for Recent Reservations
  const recentReservations = [
    { id: "RES-9901", user: "Ashik Rahman", medicine: "Paracetamol 500mg", time: "10 mins ago", status: "Pending" },
    { id: "RES-9895", user: "Sneha Das", medicine: "Amoxicillin", time: "1 hour ago", status: "Completed" },
    { id: "RES-9892", user: "Rahul Raj", medicine: "Insulin Pen", time: "3 hours ago", status: "Expired" },
  ];

  return (
    <Container fluid className="py-4">
      {/* --- Header Section --- */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
        <div>
          <h3 className="fw-bold mb-1">Pharmacy Dashboard</h3>
          <p className="text-muted small mb-0">Manage your inventory and track medicine reservations.</p>
        </div>
        <div className="d-flex gap-2">
           <Button variant="outline-primary" className="d-flex align-items-center gap-2 rounded-3 px-3 fw-medium">
              <Clock size={18} /> History
           </Button>
           <Button variant="primary" className="d-flex align-items-center gap-2 rounded-3 px-3 shadow-sm fw-medium">
              <PlusCircle size={18} /> Add Medicine
           </Button>
        </div>
      </div>

      {/* --- Quick Stats Cards --- */}
      <Row className="g-4 mb-4">
        {stats.map((item, index) => (
          <Col key={index} sm={6} lg={3}>
            <Card className="border-0 shadow-sm rounded-4 p-2 h-100 hover-lift transition-all">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className={`p-3 rounded-4 bg-${item.color} bg-opacity-10 text-${item.color}`}>
                    {item.icon}
                  </div>
                  <ArrowUpRight size={16} className="text-muted opacity-50" />
                </div>
                <h4 className="fw-bold mb-1">{item.value}</h4>
                <p className="text-dark fw-semibold small mb-1">{item.title}</p>
                <p className="text-muted mb-0" style={{ fontSize: '0.75rem' }}>{item.subtitle}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="g-4">
        {/* --- Recent Reservations Table --- */}
        <Col lg={8}>
          <Card className="border-0 shadow-sm rounded-4 overflow-hidden h-100">
            <Card.Header className="bg-white border-0 p-4 d-flex justify-content-between align-items-center">
              <h5 className="fw-bold mb-0">Recent Reservations</h5>
              <Button variant="link" className="text-primary text-decoration-none small p-0 fw-bold">View All <ChevronRight size={14}/></Button>
            </Card.Header>
            <Card.Body className="p-0">
              <Table responsive hover className="mb-0 align-middle">
                <thead className="bg-light border-bottom">
                  <tr className="text-muted small text-uppercase fw-bold">
                    <th className="ps-4 py-3 border-0">Customer</th>
                    <th className="py-3 border-0">Medicine</th>
                    <th className="py-3 border-0">Time</th>
                    <th className="py-3 border-0">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentReservations.map((res, i) => (
                    <tr key={i} className="cursor-pointer">
                      <td className="ps-4 py-3 fw-bold">{res.user}</td>
                      <td>{res.medicine}</td>
                      <td className="text-muted small">{res.time}</td>
                      <td>
                        <Badge 
                          bg={res.status === 'Pending' ? 'warning' : res.status === 'Completed' ? 'success' : 'danger'} 
                          className="rounded-pill px-3 py-1 fw-medium"
                        >
                          {res.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>

        {/* --- Stock Insights --- */}
        <Col lg={4}>
          <Card className="border-0 shadow-sm rounded-4 p-4 h-100">
            <h5 className="fw-bold mb-4">Stock Overview</h5>
            
            <div className="mb-4">
              <div className="d-flex justify-content-between mb-1">
                <span className="small fw-bold">General Medicines</span>
                <span className="small text-muted">85%</span>
              </div>
              <ProgressBar variant="primary" now={85} style={{ height: '8px' }} className="rounded-pill" />
            </div>

            <div className="mb-4">
              <div className="d-flex justify-content-between mb-1">
                <span className="small fw-bold">Life-Saving Drugs</span>
                <span className="small text-muted">40%</span>
              </div>
              <ProgressBar variant="warning" now={40} style={{ height: '8px' }} className="rounded-pill" />
            </div>

            <div className="mb-4">
              <div className="d-flex justify-content-between mb-1">
                <span className="small fw-bold">Surgical Items</span>
                <span className="small text-muted">65%</span>
              </div>
              <ProgressBar variant="info" now={65} style={{ height: '8px' }} className="rounded-pill" />
            </div>

            <div className="mt-auto p-3 rounded-4 bg-danger bg-opacity-10 border border-danger border-opacity-25">
               <div className="d-flex align-items-center gap-2 text-danger mb-1">
                  <AlertTriangle size={18} />
                  <span className="fw-bold small">Critical Action</span>
               </div>
               <p className="text-dark small mb-0" style={{ fontSize: '0.75rem' }}>
                 5 medicines are out of stock. Update your inventory to stay visible to customers.
               </p>
            </div>
          </Card>
        </Col>
      </Row>

      <style>{`
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.08) !important;
        }
        .transition-all {
          transition: all 0.3s ease;
        }
        .cursor-pointer {
          cursor: pointer;
        }
      `}</style>
    </Container>
  );
};

export default SellerDashboard;