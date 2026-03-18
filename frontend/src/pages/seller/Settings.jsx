import React, { useState } from "react";
// 'Switch' ഇംപോർട്ട് ലിസ്റ്റിൽ നിന്ന് ഒഴിവാക്കി. 
import { Container, Card, Form, Button, Row, Col, ListGroup } from "react-bootstrap";
import { 
  User, 
  Lock, 
  Bell, 
  ShieldCheck, 
  Globe, 
  LogOut,
  Save,
  Trash2
} from "lucide-react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <Container fluid className="py-4 px-md-4">
      <div className="mb-4">
        <h3 className="fw-bold text-dark">Settings</h3>
        <p className="text-muted small">Manage your account preferences and security settings.</p>
      </div>

      <Row>
        {/* --- Left Sidebar Tabs --- */}
        <Col lg={3} className="mb-4">
          <Card className="border-0 shadow-sm rounded-4 overflow-hidden">
            <ListGroup variant="flush" className="p-2">
              <ListGroup.Item 
                action 
                active={activeTab === "profile"}
                onClick={() => setActiveTab("profile")}
                className={`border-0 rounded-3 mb-1 d-flex align-items-center gap-2 py-3 fw-medium ${activeTab === "profile" ? "bg-primary text-white" : "text-muted"}`}
              >
                <User size={18} /> Profile Settings
              </ListGroup.Item>
              <ListGroup.Item 
                action 
                active={activeTab === "security"}
                onClick={() => setActiveTab("security")}
                className={`border-0 rounded-3 mb-1 d-flex align-items-center gap-2 py-3 fw-medium ${activeTab === "security" ? "bg-primary text-white" : "text-muted"}`}
              >
                <Lock size={18} /> Security & Password
              </ListGroup.Item>
              <ListGroup.Item 
                action 
                active={activeTab === "notifications"}
                onClick={() => setActiveTab("notifications")}
                className={`border-0 rounded-3 mb-1 d-flex align-items-center gap-2 py-3 fw-medium ${activeTab === "notifications" ? "bg-primary text-white" : "text-muted"}`}
              >
                <Bell size={18} /> Notifications
              </ListGroup.Item>
              <hr className="my-2 opacity-10" />
              <ListGroup.Item 
                action 
                className="border-0 rounded-3 d-flex align-items-center gap-2 py-3 fw-medium text-danger"
              >
                <LogOut size={18} /> Logout
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>

        {/* --- Right Content Area --- */}
        <Col lg={9}>
          {activeTab === "profile" && (
            <Card className="border-0 shadow-sm rounded-4 p-4 border">
              <h5 className="fw-bold mb-4 d-flex align-items-center gap-2">
                <User size={20} className="text-primary" /> Profile Information
              </h5>
              <Form>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="small fw-bold text-uppercase text-muted">Full Name</Form.Label>
                      <Form.Control type="text" defaultValue="Atharv P" className="bg-light border-0 py-2 rounded-3 shadow-none" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="small fw-bold text-uppercase text-muted">Email Address</Form.Label>
                      <Form.Control type="email" defaultValue="atharv@example.com" className="bg-light border-0 py-2 rounded-3 shadow-none" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="small fw-bold text-uppercase text-muted">Phone Number</Form.Label>
                      <Form.Control type="text" defaultValue="+91 9876543210" className="bg-light border-0 py-2 rounded-3 shadow-none" />
                    </Form.Group>
                  </Col>
                </Row>
                <Button variant="primary" className="px-4 py-2 rounded-3 fw-bold border-0 shadow-sm d-flex align-items-center gap-2">
                  <Save size={18} /> Save Changes
                </Button>
              </Form>
            </Card>
          )}

          {activeTab === "security" && (
            <Card className="border-0 shadow-sm rounded-4 p-4 border">
              <h5 className="fw-bold mb-4 d-flex align-items-center gap-2">
                <Lock size={20} className="text-primary" /> Password & Security
              </h5>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label className="small fw-bold text-uppercase text-muted">Current Password</Form.Label>
                  <Form.Control type="password" placeholder="••••••••" className="bg-light border-0 py-2 rounded-3 shadow-none" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="small fw-bold text-uppercase text-muted">New Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter new password" className="bg-light border-0 py-2 rounded-3 shadow-none" />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label className="small fw-bold text-uppercase text-muted">Confirm New Password</Form.Label>
                  <Form.Control type="password" placeholder="Confirm new password" className="bg-light border-0 py-2 rounded-3 shadow-none" />
                </Form.Group>
                <Button variant="primary" className="px-4 py-2 rounded-3 fw-bold border-0 shadow-sm">
                  Update Password
                </Button>
              </Form>
              
              <hr className="my-5" />
              
              <div className="bg-danger bg-opacity-10 p-3 rounded-4 d-flex justify-content-between align-items-center border border-danger border-opacity-25">
                <div>
                  <h6 className="fw-bold text-danger mb-1">Delete Account</h6>
                  <p className="small text-muted mb-0">Once you delete your account, there is no going back.</p>
                </div>
                <Button variant="danger" className="fw-bold rounded-3 d-flex align-items-center gap-2 py-2">
                  <Trash2 size={18} /> Delete Account
                </Button>
              </div>
            </Card>
          )}

          {activeTab === "notifications" && (
            <Card className="border-0 shadow-sm rounded-4 p-4 border">
              <h5 className="fw-bold mb-4 d-flex align-items-center gap-2">
                <Bell size={20} className="text-primary" /> Notification Preferences
              </h5>
              <div className="d-flex justify-content-between align-items-center mb-4 py-2 border-bottom">
                <div>
                  <h6 className="fw-bold mb-1 text-dark">Email Notifications</h6>
                  <p className="small text-muted mb-0">Receive updates about new reservations via email.</p>
                </div>
                {/* Form.Check type="switch" എന്നത് കറക്റ്റ് ആണ് */}
                <Form.Check type="switch" defaultChecked className="custom-switch shadow-none" />
              </div>
              <div className="d-flex justify-content-between align-items-center mb-4 py-2 border-bottom">
                <div>
                  <h6 className="fw-bold mb-1 text-dark">Order Alerts</h6>
                  <p className="small text-muted mb-0">Get notified when a medicine goes out of stock.</p>
                </div>
                <Form.Check type="switch" defaultChecked className="custom-switch shadow-none" />
              </div>
              <div className="d-flex justify-content-between align-items-center mb-2 py-2">
                <div>
                  <h6 className="fw-bold mb-1 text-dark">Marketing Emails</h6>
                  <p className="small text-muted mb-0">Stay updated on new features and pharmacy tips.</p>
                </div>
                <Form.Check type="switch" className="custom-switch shadow-none" />
              </div>
            </Card>
          )}
        </Col>
      </Row>

      <style>{`
        .custom-switch .form-check-input:checked { background-color: #0d6efd; border-color: #0d6efd; }
        .list-group-item.active { box-shadow: 0 4px 12px rgba(13, 110, 253, 0.2); }
        .form-check-input:focus { box-shadow: none; border-color: rgba(0,0,0,.25); }
      `}</style>
    </Container>
  );
};

export default Settings;