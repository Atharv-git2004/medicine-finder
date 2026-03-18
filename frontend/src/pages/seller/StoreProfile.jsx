import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Badge } from "react-bootstrap";
import { 
  Store, 
  MapPin, 
  Phone, 
  Clock, 
  FileText, 
  Camera, 
  Save, 
  CheckCircle,
  Globe
} from "lucide-react";

const StoreProfile = () => {
  // Mock Data for Pharmacy Profile
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Container fluid className="py-4">
      {/* --- Page Header --- */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3 className="fw-bold text-dark">Store Profile</h3>
          <p className="text-muted small mb-0">Manage your pharmacy details and public information.</p>
        </div>
        <Button 
          variant={isEditing ? "outline-secondary" : "primary"} 
          className="rounded-3 px-4 fw-bold shadow-sm"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? "Cancel" : "Edit Profile"}
        </Button>
      </div>

      <Row className="g-4">
        {/* --- Left Column: Profile Card --- */}
        <Col lg={4}>
          <Card className="border-0 shadow-sm rounded-4 overflow-hidden text-center p-4 h-100">
            <div className="position-relative mx-auto mb-3" style={{ width: "120px" }}>
              <div className="rounded-circle bg-primary bg-opacity-10 border border-primary border-opacity-25 d-flex align-items-center justify-content-center overflow-hidden" style={{ width: "120px", height: "120px" }}>
                <Store size={60} className="text-primary" />
              </div>
              {isEditing && (
                <Button size="sm" variant="dark" className="position-absolute bottom-0 end-0 rounded-circle p-2 shadow">
                  <Camera size={16} />
                </Button>
              )}
            </div>
            <h5 className="fw-bold mb-1">City Pharmacy</h5>
            <Badge bg="success" className="bg-opacity-10 text-success rounded-pill px-3 py-1 mb-3 border border-success border-opacity-25">
               <CheckCircle size={12} className="me-1" /> Verified Partner
            </Badge>
            <p className="text-muted small px-3">Reliable medicine provider in Kozhikode since 2020.</p>
            
            <hr className="my-4 opacity-10" />
            
            <div className="text-start px-2">
               <div className="d-flex align-items-center gap-3 mb-3">
                  <MapPin size={18} className="text-primary" />
                  <div className="small fw-medium text-dark">Opp. Medical College, Kozhikode</div>
               </div>
               <div className="d-flex align-items-center gap-3 mb-3">
                  <Phone size={18} className="text-primary" />
                  <div className="small fw-medium text-dark">+91 98765 43210</div>
               </div>
               <div className="d-flex align-items-center gap-3">
                  <Clock size={18} className="text-primary" />
                  <div className="small fw-medium text-dark">09:00 AM - 10:00 PM</div>
               </div>
            </div>
          </Card>
        </Col>

        {/* --- Right Column: Detailed Settings --- */}
        <Col lg={8}>
          <Card className="border-0 shadow-sm rounded-4 p-4 h-100">
            <h5 className="fw-bold mb-4 border-bottom pb-3">Business Information</h5>
            <Form>
              <Row className="g-3">
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="small fw-bold">Pharmacy Name</Form.Label>
                    <Form.Control 
                      type="text" 
                      defaultValue="City Pharmacy" 
                      disabled={!isEditing}
                      className="bg-light border-0 py-2 rounded-3" 
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="small fw-bold">License Number (D.L. No)</Form.Label>
                    <Form.Control 
                      type="text" 
                      defaultValue="KL-KKD-123456" 
                      disabled={!isEditing}
                      className="bg-light border-0 py-2 rounded-3" 
                    />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className="mb-3">
                    <Form.Label className="small fw-bold">Full Address</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      rows={2}
                      defaultValue="12/450, Main Road, Near Medical College Junction, Kozhikode, Kerala - 673008" 
                      disabled={!isEditing}
                      className="bg-light border-0 py-2 rounded-3" 
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="small fw-bold">Pharmacist Name</Form.Label>
                    <Form.Control 
                      type="text" 
                      defaultValue="Atharv P" 
                      disabled={!isEditing}
                      className="bg-light border-0 py-2 rounded-3" 
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                   <Form.Group className="mb-3">
                    <Form.Label className="small fw-bold">Website / Social Link</Form.Label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-0"><Globe size={14}/></span>
                      <Form.Control 
                        type="text" 
                        placeholder="www.citypharmacy.com" 
                        disabled={!isEditing}
                        className="bg-light border-0 py-2" 
                      />
                    </div>
                  </Form.Group>
                </Col>
              </Row>

              <div className="mt-4 pt-3 border-top">
                <h6 className="fw-bold mb-3 d-flex align-items-center gap-2">
                  <FileText size={18} className="text-primary"/> Legal Documents
                </h6>
                <div className="p-3 bg-light rounded-4 d-flex justify-content-between align-items-center border border-dashed">
                   <div className="small fw-medium text-muted">Drug License Copy.pdf</div>
                   <Button variant="link" className="small text-decoration-none fw-bold p-0">View File</Button>
                </div>
              </div>

              {isEditing && (
                <div className="d-flex gap-2 mt-5">
                  <Button variant="primary" className="px-5 py-2 rounded-3 fw-bold d-flex align-items-center gap-2 shadow-sm border-0">
                    <Save size={18} /> Update Profile
                  </Button>
                </div>
              )}
            </Form>
          </Card>
        </Col>
      </Row>

      <style>{`
        .border-dashed { border: 1px dashed #dee2e6 !important; }
        .bg-primary.bg-opacity-10 { background-color: rgba(13, 110, 253, 0.08) !important; }
      `}</style>
    </Container>
  );
};

export default StoreProfile;