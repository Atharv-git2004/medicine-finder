import React, { useState } from "react";
import { Container, Card, Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// 1. Import the service function (adjust the path to your service file)
import { addDrug } from "../../services/drugService"; 
import { 
  ChevronLeft, 
  Save, 
  Package, 
  IndianRupee, 
  Layers, 
  UploadCloud,
  ClipboardList
} from "lucide-react";

const AddMedicine = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: "",
    category: "General",
    price: "",
    stock: "",
    description: "",
    expiryDate: ""
  });

  const [image, setImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prepare FormData
    const data = new FormData();
    data.append("brand_name", formData.name); 
    data.append("category", formData.category);
    data.append("price", formData.price);
    data.append("stock", formData.stock);
    data.append("expiryDate", formData.expiryDate);
    data.append("description", formData.description);
    
    if (selectedFile) {
      data.append("image", selectedFile);
    }

    try {
      const token = localStorage.getItem("token"); 
      
      // 2. Call your pre-defined service function
      // It handles the axios call and the authorization header for you
    await addDrug(data, token);
     
      
      
      

      alert("Medicine added successfully!");
      navigate("/seller/inventory");
      
    } catch (error) {
      console.error("Submission failed", error);
      // Axios error handling to show backend message or fallback
      const errorMessage = error.response?.data?.message || "Something went wrong";
      alert("Error: " + errorMessage);
    }
  };

  return (
    <Container fluid className="py-4 px-md-5">
      <Button 
        variant="link" 
        className="text-decoration-none text-muted p-0 mb-3 d-flex align-items-center gap-1"
        onClick={() => navigate(-1)}
      >
        <ChevronLeft size={18} /> Back to Inventory
      </Button>

      <div className="mb-4">
        <h3 className="fw-bold text-dark">Add New Medicine</h3>
        <p className="text-muted small">Fill in the details below to add new medicine to your pharmacy inventory.</p>
      </div>

      <Form onSubmit={handleSubmit}>
        <Row>
          <Col lg={8}>
            <Card className="border-0 shadow-sm rounded-4 p-4 mb-4">
              <Row>
                <Col md={12} className="mb-4">
                  <Form.Group>
                    <Form.Label className="fw-bold small mb-2 text-uppercase text-muted">Medicine Name</Form.Label>
                    <InputGroup className="bg-light rounded-3 border overflow-hidden">
                      <InputGroup.Text className="bg-transparent border-0 pe-0 text-muted">
                        <Package size={18} />
                      </InputGroup.Text>
                      <Form.Control 
                        type="text" 
                        name="name"
                        placeholder="e.g. Dolo 650mg" 
                        className="bg-transparent border-0 py-2 shadow-none"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </Form.Group>
                </Col>

                <Col md={6} className="mb-4">
                  <Form.Group>
                    <Form.Label className="fw-bold small mb-2 text-uppercase text-muted">Category</Form.Label>
                    <div className="d-flex align-items-center bg-light border rounded-3 px-2">
                      <Layers size={18} className="text-muted ms-1" />
                      <Form.Select 
                        name="category"
                        value={formData.category}
                        className="bg-transparent border-0 py-2 shadow-none fw-medium"
                        onChange={handleChange}
                      >
                        <option value="General">General</option>
                        <option value="Antibiotics">Antibiotics</option>
                        <option value="Diabetes">Diabetes</option>
                        <option value="Fever">Fever & Pain</option>
                        <option value="Vitamins">Vitamins</option>
                      </Form.Select>
                    </div>
                  </Form.Group>
                </Col>

                <Col md={6} className="mb-4">
                  <Form.Group>
                    <Form.Label className="fw-bold small mb-2 text-uppercase text-muted">Price (Per Strip)</Form.Label>
                    <InputGroup className="bg-light rounded-3 border overflow-hidden">
                      <InputGroup.Text className="bg-transparent border-0 pe-0 text-muted small">
                        <IndianRupee size={16} />
                      </InputGroup.Text>
                      <Form.Control 
                        type="number" 
                        name="price"
                        placeholder="0.00" 
                        className="bg-transparent border-0 py-2 shadow-none"
                        required
                        value={formData.price}
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </Form.Group>
                </Col>

                <Col md={6} className="mb-4">
                  <Form.Group>
                    <Form.Label className="fw-bold small mb-2 text-uppercase text-muted">Stock Count</Form.Label>
                    <InputGroup className="bg-light rounded-3 border overflow-hidden">
                      <InputGroup.Text className="bg-transparent border-0 pe-0 text-muted">
                        <ClipboardList size={18} />
                      </InputGroup.Text>
                      <Form.Control 
                        type="number" 
                        name="stock"
                        placeholder="Quantity" 
                        className="bg-transparent border-0 py-2 shadow-none"
                        required
                        value={formData.stock}
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </Form.Group>
                </Col>

                <Col md={6} className="mb-4">
                  <Form.Group>
                    <Form.Label className="fw-bold small mb-2 text-uppercase text-muted">Expiry Date</Form.Label>
                    <Form.Control 
                      type="date" 
                      name="expiryDate"
                      className="bg-light border py-2 rounded-3 shadow-none text-muted"
                      required
                      value={formData.expiryDate}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>

                <Col md={12} className="mb-2">
                  <Form.Group>
                    <Form.Label className="fw-bold small mb-2 text-uppercase text-muted">Description</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      name="description"
                      rows={3} 
                      placeholder="Dosage, side effects or other info..."
                      className="bg-light border-0 py-2 rounded-3 shadow-none"
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Card>

            <div className="d-flex gap-3 mb-5">
              <Button 
                variant="primary" 
                type="submit"
                className="px-5 py-2 rounded-3 fw-bold shadow-sm border-0 d-flex align-items-center gap-2"
              >
                <Save size={18} /> Save Medicine
              </Button>
              <Button 
                variant="outline-secondary" 
                className="px-4 py-2 rounded-3 fw-bold shadow-none"
                onClick={() => navigate("/seller/inventory")}
              >
                Cancel
              </Button>
            </div>
          </Col>

          <Col lg={4}>
            <Card className="border-0 shadow-sm rounded-4 p-4 mb-4 text-center border">
              <Form.Label className="fw-bold small mb-3 text-uppercase d-block text-start text-muted">Medicine Photo</Form.Label>
              <div 
                className="position-relative border-dashed rounded-4 p-4 bg-light d-flex flex-column align-items-center justify-content-center mb-3"
                style={{ border: "2px dashed #cbd5e0", minHeight: "200px" }}
              >
                {image ? (
                  <img src={image} alt="Preview" className="img-fluid rounded-3 shadow-sm" style={{ maxHeight: "180px" }} />
                ) : (
                  <>
                    <UploadCloud size={40} className="text-primary opacity-50 mb-2" />
                    <p className="small text-muted mb-0">Click or drag to upload image</p>
                  </>
                )}
                <Form.Control 
                  type="file" 
                  className="position-absolute w-100 h-100 opacity-0 cursor-pointer"
                  onChange={handleImageChange}
                  accept="image/*"
                />
              </div>
              <p className="text-muted extra-small">Supports: JPEG, PNG formats only.</p>
            </Card>

            <Card className="border-0 bg-primary bg-opacity-10 rounded-4 p-3 border-start border-4 border-primary shadow-sm">
              <div className="d-flex gap-2 text-primary">
                <Package size={20} />
                <div>
                  <h6 className="fw-bold mb-1">Quick Tip</h6>
                  <p className="small mb-0 opacity-75">Please double-check the expiry date before saving.</p>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Form>

      <style>{`
        .extra-small { font-size: 11px; }
        .cursor-pointer { cursor: pointer; }
        .border-dashed:hover { background-color: #f0f7ff !important; border-color: #0d6efd !important; }
      `}</style>
    </Container>
  );
};

export default AddMedicine;