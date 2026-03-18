import React from "react";
// Badge fixed in imports
import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// Components
import SearchBar from "../components/SearchBar";
import PharmacyCard from "../components/PharmacyCard";

const Home = () => {
  const navigate = useNavigate();

  // Dynamic greeting based on time
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";

  // Mock data for pharmacies
  const pharmacies = [
    { id: 1, name: "City Care Pharmacy", address: "Main Street, Calicut", distance: 500, available: true, medicines: ["Paracetamol", "Dolo 650", "Amoxicillin"] },
    { id: 2, name: "HealthPlus Pharmacy", address: "Near Bus Stand, Kozhikode", distance: 1200, available: true, medicines: ["Aspirin", "Vitamin C"] },
    { id: 3, name: "MedLife Pharmacy", address: "Downtown, Malaparamba", distance: 2000, available: false, medicines: [] },
  ];

  // Categories with high-quality PNG icons
  const categories = [
    { name: "Fever & Pain", img: "https://cdn-icons-png.flaticon.com/512/2864/2864448.png" },
    { name: "Diabetes", img: "https://cdn-icons-png.flaticon.com/512/2750/2750657.png" },
    { name: "Baby Care", img: "https://cdn-icons-png.flaticon.com/512/3014/3014761.png" },
    { name: "Wellness", img: "https://cdn-icons-png.flaticon.com/512/2966/2966486.png" },
    { name: "Skin Care", img: "https://cdn-icons-png.flaticon.com/512/3130/3130454.png" },
    { name: "Ayurvedic", img: "https://cdn-icons-png.flaticon.com/512/2160/2160086.png" }
  ];

  return (
    <div className="min-vh-100 animate-fade-in" style={{ backgroundColor: "#f4f7f9" }}>
      
      {/* --- TOP PROMO BANNER --- */}
      <div className="bg-primary text-white py-2 text-center small fw-bold shadow-sm">
        🚀 Get 20% Off on your first booking! Use code: FIRST20
      </div>

      {/* --- HERO SECTION WITH IMAGE --- */}
      <section className="bg-white border-bottom py-5 overflow-hidden">
        <Container>
          <Row className="align-items-center">
            <Col lg={7} className="text-center text-lg-start mb-5 mb-lg-0">
              <Badge className="mb-3 px-3 py-2 rounded-pill fw-bold" style={{ backgroundColor: '#e7f1ff', color: '#0d6efd' }}>
                Trusted by 5000+ Customers in Kerala
              </Badge>
              <h1 className="fw-bold text-dark mb-3" style={{ fontSize: '3.5rem', lineHeight: '1.1' }}>
                Your Health, <br /> Our <span className="text-primary">Priority.</span>
              </h1>
              <p className="text-muted fs-5 mb-4 pe-lg-5">
                Connecting you with local pharmacies for faster medicine availability and easy pickup near Calicut.
              </p>
              
              <div className="mt-4" style={{ maxWidth: "600px" }}>
                 <Card className="border-0 shadow-lg rounded-4 p-2 bg-white">
                    <SearchBar />
                 </Card>
                 <div className="mt-3 small text-muted">
                  Trending: <span className="text-primary fw-medium">Dolo 650</span>, <span className="text-primary fw-medium">Insulin</span>, <span className="text-primary fw-medium">Face Mask</span>
                </div>
              </div>
            </Col>
            
            <Col lg={5} className="text-center d-none d-lg-block">
              <img 
                src="https://img.freepik.com/free-vector/pharmacist-concept-illustration_114360-2649.jpg" 
                alt="Pharmacist" 
                className="img-fluid rounded-4 shadow-sm"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* --- CATEGORIES SECTION --- */}
      <Container className="my-5">
        <div className="d-flex justify-content-between align-items-end mb-4">
           <h4 className="fw-bold text-dark mb-0">Browse by Categories</h4>
           <Button variant="link" className="text-primary p-0 fw-bold text-decoration-none">View All</Button>
        </div>
        <Row className="g-3">
          {categories.map((cat, idx) => (
            <Col xs={6} md={2} key={idx}>
              <Card className="border-0 shadow-sm h-100 rounded-4 p-3 bg-white text-center category-card hover-lift transition-all" style={{ cursor: 'pointer' }}>
                <img src={cat.img} alt={cat.name} className="mx-auto mb-2" style={{ width: "45px" }} />
                <div className="small fw-bold text-dark mt-2">{cat.name}</div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* --- PRESCRIPTION UPLOAD BANNER --- */}
      <Container className="my-5">
        <Card className="border-0 shadow-lg rounded-4 overflow-hidden text-white" style={{ background: 'linear-gradient(135deg, #0d6efd 0%, #0a4ebd 100%)' }}>
          <Row className="g-0 align-items-center">
            <Col md={7} className="p-4 p-md-5">
              <h2 className="fw-bold mb-3">Have a Prescription?</h2>
              <p className="opacity-90 mb-4 fs-5">Upload it here and our experts will help you find the exact medicines in minutes.</p>
              <div className="d-flex gap-3 flex-wrap">
                <Button variant="light" className="px-4 py-2 rounded-pill fw-bold text-primary shadow">
                  Upload Now 📄
                </Button>
                <Button variant="outline-light" className="px-4 py-2 rounded-pill fw-bold border-2">
                  Learn More
                </Button>
              </div>
            </Col>
            <Col md={5} className="d-none d-md-block">
               <img 
                 src="https://img.freepik.com/free-vector/prescription-concept-illustration_114360-8022.jpg" 
                 alt="Prescription" 
                 className="img-fluid opacity-90"
                 style={{ mixBlendMode: 'multiply' }}
               />
            </Col>
          </Row>
        </Card>
      </Container>

      {/* --- PHARMACY LISTING --- */}
      <section className="py-5 bg-white border-top border-bottom">
        <Container>
          <div className="text-center mb-5">
             <h3 className="fw-bold text-dark">Pharmacies Near Calicut</h3>
             <p className="text-muted">Verified partners ready for quick pickup</p>
          </div>
          <Row className="g-4">
            {pharmacies.map((pharmacy) => (
              <Col key={pharmacy.id} md={4}>
                <PharmacyCard pharmacy={pharmacy} />
              </Col>
            ))}
          </Row>
          <div className="text-center mt-5">
            <Button variant="outline-primary" className="px-5 py-2 rounded-pill fw-bold border-2" onClick={() => navigate("/search")}>
              Find More Stores
            </Button>
          </div>
        </Container>
      </section>

      {/* --- SOCIAL PROOF STATS --- */}
      <Container className="py-5 mb-5">
        <Row className="text-center g-4">
           <Col xs={6} md={3}>
              <h2 className="fw-bold text-primary">50k+</h2>
              <p className="text-muted small mb-0">Monthly Users</p>
           </Col>
           <Col xs={6} md={3}>
              <h2 className="fw-bold text-primary">200+</h2>
              <p className="text-muted small mb-0">Partner Stores</p>
           </Col>
           <Col xs={6} md={3}>
              <h2 className="fw-bold text-primary">15+</h2>
              <p className="text-muted small mb-0">Cities Covered</p>
           </Col>
           <Col xs={6} md={3}>
              <h2 className="fw-bold text-primary">4.8/5</h2>
              <p className="text-muted small mb-0">App Rating</p>
           </Col>
        </Row>
      </Container>

    </div>
  );
};

export default Home;