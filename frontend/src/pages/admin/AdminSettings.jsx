import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Nav, Tab } from "react-bootstrap";
import { 
  User, 
  ShieldCheck, // ShieldLock-ന് പകരം ShieldCheck ഉപയോഗിച്ചു
  BellRing, 
  Globe, 
  Save, 
  Camera,
  RefreshCcw
} from "lucide-react";

const AdminSettings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <Container fluid className="py-4">
      {/* --- Page Header --- */}
      <div className="mb-4">
        <h3 className="fw-bold text-dark">Settings</h3>
        <p className="text-muted small">Manage your account preferences and system-wide configurations.</p>
      </div>

      <Tab.Container id="settings-tabs" activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
        <Row className="g-4">
          {/* --- Navigation Menu --- */}
          <Col lg={3}>
            <Card className="border-0 shadow-sm rounded-4 p-2">
              <Nav variant="pills" className="flex-column gap-1">
                <Nav.Item>
                  <Nav.Link eventKey="profile" className="d-flex align-items-center gap-2 py-2 px-3 rounded-3 border-0">
                    <User size={18} /> My Profile
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="security" className="d-flex align-items-center gap-2 py-2 px-3 rounded-3 border-0">
                    <ShieldCheck size={18} /> Security & Password
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="system" className="d-flex align-items-center gap-2 py-2 px-3 rounded-3 border-0">
                    <Globe size={18} /> System Settings
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="notifications" className="d-flex align-items-center gap-2 py-2 px-3 rounded-3 border-0">
                    <BellRing size={18} /> Notifications
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card>
          </Col>

          {/* --- Tab Content --- */}
          <Col lg={9}>
            <Tab.Content>
              
              {/* --- Profile Settings --- */}
              <Tab.Pane eventKey="profile">
                <Card className="border-0 shadow-sm rounded-4 p-4">
                  <h5 className="fw-bold mb-4">Edit Profile</h5>
                  <div className="d-flex align-items-center gap-4 mb-4 pb-3 border-bottom">
                    <div className="position-relative">
                      <div className="rounded-circle bg-light border d-flex align-items-center justify-content-center overflow-hidden" style={{ width: "100px", height: "100px" }}>
                        <User size={50} className="text-muted" />
                      </div>
                      <Button size="sm" variant="primary" className="position-absolute bottom-0 end-0 rounded-circle p-1 shadow">
                        <Camera size={16} />
                      </Button>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Atharv P</h6>
                      <p className="text-muted small mb-2">Super Admin • Kozhikode, Kerala</p>
                      <Button variant="outline-danger" size="sm" className="fw-bold py-1">Remove Photo</Button>
                    </div>
                  </div>
                  <Form>
                    <Row className="g-3">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="small fw-bold">Full Name</Form.Label>
                          <Form.Control type="text" defaultValue="Atharv P" className="bg-light border-0 py-2 rounded-3 shadow-none" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="small fw-bold">Email Address</Form.Label>
                          <Form.Control type="email" defaultValue="admin@medifind.com" className="bg-light border-0 py-2 rounded-3 shadow-none" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="small fw-bold">Phone Number</Form.Label>
                          <Form.Control type="text" defaultValue="+91 9876543210" className="bg-light border-0 py-2 rounded-3 shadow-none" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Button variant="primary" className="mt-4 px-4 py-2 rounded-3 d-flex align-items-center gap-2 border-0 shadow-sm">
                      <Save size={18} /> Save Changes
                    </Button>
                  </Form>
                </Card>
              </Tab.Pane>

              {/* --- Security Settings --- */}
              <Tab.Pane eventKey="security">
                <Card className="border-0 shadow-sm rounded-4 p-4">
                  <h5 className="fw-bold mb-4">Update Password</h5>
                  <Form style={{ maxWidth: "400px" }}>
                    <Form.Group className="mb-3">
                      <Form.Label className="small fw-bold">Current Password</Form.Label>
                      <Form.Control type="password" placeholder="••••••••" className="bg-light border-0 py-2 rounded-3 shadow-none" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="small fw-bold">New Password</Form.Label>
                      <Form.Control type="password" placeholder="••••••••" className="bg-light border-0 py-2 rounded-3 shadow-none" />
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Label className="small fw-bold">Confirm New Password</Form.Label>
                      <Form.Control type="password" placeholder="••••••••" className="bg-light border-0 py-2 rounded-3 shadow-none" />
                    </Form.Group>
                    <Button variant="dark" className="px-4 py-2 rounded-3 d-flex align-items-center gap-2 border-0">
                      <RefreshCcw size={18} /> Update Password
                    </Button>
                  </Form>
                </Card>
              </Tab.Pane>

              {/* --- System Settings --- */}
              <Tab.Pane eventKey="system">
                <Card className="border-0 shadow-sm rounded-4 p-4">
                  <h5 className="fw-bold mb-4">Application Configurations</h5>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label className="small fw-bold">Application Name</Form.Label>
                      <Form.Control type="text" defaultValue="MediFind - Kerala's Pharmacy Network" className="bg-light border-0 py-2 rounded-3 shadow-none" />
                    </Form.Group>
                    <Form.Check 
                      type="switch"
                      label="Maintenance Mode"
                      id="maintenance-switch"
                      className="mb-3 fw-bold small text-danger"
                    />
                    <Form.Check 
                      type="switch"
                      label="Allow New Seller Registrations"
                      id="registration-switch"
                      defaultChecked
                      className="mb-4 fw-bold small"
                    />
                    <Button variant="primary" className="px-4 py-2 rounded-3 d-flex align-items-center gap-2 border-0">
                      <Save size={18} /> Update System
                    </Button>
                  </Form>
                </Card>
              </Tab.Pane>

            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>

      <style>{`
        .nav-pills .nav-link {
          color: #6c757d;
          font-weight: 500;
          transition: all 0.2s;
          cursor: pointer;
        }
        .nav-pills .nav-link.active {
          background-color: #0d6efd !important;
          color: white !important;
          box-shadow: 0 4px 10px rgba(13, 110, 253, 0.2);
        }
        .nav-pills .nav-link:hover:not(.active) {
          background-color: #f8f9fa;
          color: #0d6efd;
        }
      `}</style>
    </Container>
  );
};

export default AdminSettings;