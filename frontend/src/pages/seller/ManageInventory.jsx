import React, { useState } from "react";
import { Container, Card, Table, Button, Badge, Form, InputGroup, Row, Col, Modal } from "react-bootstrap";
import { 
  Search, 
  Plus, 
  Edit, 
  Trash2, 
  Package, 
  AlertTriangle,
  XCircle,
  PlusCircle
} from "lucide-react";

const ManageInventory = () => {
  // Mock Data
  const [medicines, setMedicines] = useState([
    { id: 1, name: "Paracetamol 500mg", category: "General", price: 15, stock: 120, status: "In Stock" },
    { id: 2, name: "Amoxicillin 250mg", category: "Antibiotics", price: 85, stock: 45, status: "In Stock" },
    { id: 3, name: "Insulin Glargine", category: "Diabetes", price: 450, stock: 0, status: "Out of Stock" },
    { id: 4, name: "Cetirizine", category: "Allergy", price: 10, stock: 8, status: "Low Stock" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Modal control functions
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const getStatusBadge = (status) => {
    if (status === "In Stock") return "success";
    if (status === "Low Stock") return "warning";
    return "danger";
  };

  return (
    <Container fluid className="py-4 px-md-4">
      {/* --- Page Header --- */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
        <div>
          <h3 className="fw-bold text-dark mb-1">Pharmacy Inventory</h3>
          <p className="text-muted small mb-0">Update and manage your medicine stock availability.</p>
        </div>
        <Button 
          variant="primary" 
          className="d-flex align-items-center gap-2 rounded-3 px-4 py-2 shadow-sm fw-bold border-0"
          onClick={handleShow}
        >
          <PlusCircle size={20} /> Add New Medicine
        </Button>
      </div>

      {/* --- Stats Summary --- */}
      <Row className="mb-4 g-3">
        <Col md={4}>
          <Card className="border-0 shadow-sm rounded-4 p-3 bg-white border-start border-4 border-primary">
            <div className="text-muted small fw-bold text-uppercase">Total Medicines</div>
            <div className="h4 fw-bold mb-0">{medicines.length} Items</div>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="border-0 shadow-sm rounded-4 p-3 bg-white border-start border-4 border-warning">
            <div className="text-muted small fw-bold text-uppercase">Low Stock Alert</div>
            <div className="h4 fw-bold mb-0 text-warning">1 Item</div>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="border-0 shadow-sm rounded-4 p-3 bg-white border-start border-4 border-danger">
            <div className="text-muted small fw-bold text-uppercase">Out of Stock</div>
            <div className="h4 fw-bold mb-0 text-danger">1 Item</div>
          </Card>
        </Col>
      </Row>

      {/* --- Search & Filter --- */}
      <Card className="border-0 shadow-sm rounded-4 mb-4 p-3 border">
        <Row className="g-3 align-items-center">
          <Col md={8}>
            <InputGroup className="bg-light rounded-3 border">
              <InputGroup.Text className="bg-transparent border-0 pe-0">
                <Search size={18} className="text-muted" />
              </InputGroup.Text>
              <Form.Control 
                placeholder="Search by medicine name..." 
                className="bg-transparent border-0 py-2 shadow-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </InputGroup>
          </Col>
          <Col md={4}>
            <Form.Select className="bg-light border py-2 rounded-3 shadow-none fw-medium text-muted">
              <option>All Categories</option>
              <option>General</option>
              <option>Antibiotics</option>
              <option>Diabetes</option>
            </Form.Select>
          </Col>
        </Row>
      </Card>

      {/* --- Inventory Table --- */}
      <Card className="border-0 shadow-sm rounded-4 overflow-hidden border">
        <Table responsive hover className="mb-0 align-middle">
          <thead className="bg-light border-bottom text-muted small text-uppercase fw-bold">
            <tr>
              <th className="ps-4 py-3">Medicine Info</th>
              <th className="py-3">Category</th>
              <th className="py-3">Price</th>
              <th className="py-3">Stock</th>
              <th className="py-3 text-center">Status</th>
              <th className="pe-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {medicines.filter(m => m.name.toLowerCase().includes(searchTerm.toLowerCase())).map((med) => (
              <tr key={med.id} className="transition-all">
                <td className="ps-4 py-3">
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-primary bg-opacity-10 p-2 rounded-3 text-primary">
                      <Package size={20} />
                    </div>
                    <div className="fw-bold text-dark">{med.name}</div>
                  </div>
                </td>
                <td className="text-muted small">{med.category}</td>
                <td className="fw-bold text-dark">₹{med.price}</td>
                <td>
                  <div className={med.stock < 10 ? "text-danger fw-bold" : "fw-medium"}>
                    {med.stock} units
                  </div>
                </td>
                <td className="text-center">
                  <Badge 
                    bg={getStatusBadge(med.status)} 
                    className="rounded-pill px-3 py-2 bg-opacity-10 fw-medium"
                    style={{ color: `var(--bs-${getStatusBadge(med.status)})` }}
                  >
                    {med.status}
                  </Badge>
                </td>
                <td className="pe-4 text-center">
                  <div className="d-flex gap-2 justify-content-center">
                    <Button variant="light" size="sm" className="rounded-circle p-2 text-primary border shadow-sm">
                      <Edit size={16} />
                    </Button>
                    <Button variant="light" size="sm" className="rounded-circle p-2 text-danger border shadow-sm">
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>

      {/* --- Add Medicine Modal --- */}
      <Modal show={showModal} onHide={handleClose} centered backdrop="static">
        <Modal.Header closeButton className="border-0 px-4 pt-4">
          <Modal.Title className="fw-bold">Add New Stock</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4 pb-4">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="small fw-bold">Medicine Name</Form.Label>
              <Form.Control type="text" placeholder="e.g. Dolo 650" className="bg-light border-0 py-2 rounded-3 shadow-none" />
            </Form.Group>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="small fw-bold">Category</Form.Label>
                  <Form.Select className="bg-light border-0 py-2 rounded-3 shadow-none">
                    <option>General</option>
                    <option>Antibiotics</option>
                    <option>Diabetes</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="small fw-bold">Price (₹)</Form.Label>
                  <Form.Control type="number" placeholder="0.00" className="bg-light border-0 py-2 rounded-3 shadow-none" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-4">
              <Form.Label className="small fw-bold">Stock Quantity</Form.Label>
              <Form.Control type="number" placeholder="Enter units" className="bg-light border-0 py-2 rounded-3 shadow-none" />
            </Form.Group>
            <div className="d-flex gap-2">
              <Button variant="light" className="w-100 py-2 rounded-3 fw-bold border" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" className="w-100 py-2 rounded-3 fw-bold shadow-sm border-0">
                Save Stock
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      <style>{`
        .transition-all { transition: all 0.2s ease; }
        .transition-all:hover { background-color: #f8fbff !important; }
        .modal-content { border-radius: 20px !important; border: none; shadow: 0 10px 30px rgba(0,0,0,0.1); }
      `}</style>
    </Container>
  );
};

export default ManageInventory;