import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card, Badge, Spinner, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// Services
import { getDrugs } from "../services/drugService";

// Components
import SearchBar from "../components/SearchBar";
import PharmacyCard from "../components/PharmacyCard";

const Home = () => {
  const navigate = useNavigate();

  // --- API State Management ---
  const [drugs, setDrugs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  console.log(drugs)

  // Backend URL (Use your backend port)
  const API_BASE_URL = "http://localhost:3000";

  // Fetch drugs data from backend
  useEffect(() => {
    const fetchDrugsData = async () => {
      try {
        const response = await getDrugs();
        setDrugs(response.data || []);
      } catch (err) {
        setError("മരുന്നുകളുടെ വിവരങ്ങൾ ലഭ്യമായില്ല. ദയവായി പിന്നീട് ശ്രമിക്കുക.");
      } finally {
        setLoading(false);
      }
    };
    fetchDrugsData();
  }, []);

  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";

  const pharmacies = [
    { id: 1, name: "City Care Pharmacy", address: "Main Street, Calicut", distance: 500, available: true, medicines: ["Paracetamol", "Dolo 650", "Amoxicillin"] },
    { id: 2, name: "HealthPlus Pharmacy", address: "Near Bus Stand, Kozhikode", distance: 1200, available: true, medicines: ["Aspirin", "Vitamin C"] },
    { id: 3, name: "MedLife Pharmacy", address: "Downtown, Malaparamba", distance: 2000, available: false, medicines: [] },
  ];

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
        🚀 {greeting}! Get 20% Off on your first booking! Use code: FIRST20
      </div>

      {/* --- HERO SECTION --- */}
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

      {/* --- AVAILABLE MEDICINES (API DATA) --- */}
      <Container className="my-5">
        <div className="d-flex justify-content-between align-items-end mb-4">
           <h4 className="fw-bold text-dark mb-0">Available Medicines</h4>
           <Button variant="link" className="text-primary p-0 fw-bold text-decoration-none" onClick={() => navigate("/drugs")}>View All</Button>
        </div>

        {loading ? (
          <div className="text-center py-5">
            <Spinner animation="border" variant="primary" />
            <p className="mt-3 text-muted">Loading medicines...</p>
          </div>
        ) : error ? (
          <Alert variant="danger">{error}</Alert>
        ) : (
          <Row className="g-4">
            {drugs.slice(0, 4).map((drug) => (
              <Col md={3} sm={6} key={drug._id}>
                <Card className="border-0 shadow-sm h-100 rounded-4 p-0 bg-white hover-lift transition-all overflow-hidden">
                  
                  {/* Medicine Image */}
                  <div style={{ height: "180px", backgroundColor: "#f8f9fa" }}>
                    <img 
                      src={drug.image 
                        ? (drug.image.startsWith('http') ? drug.image : `${API_BASE_URL}${drug.image}`) 
                        : "https://via.placeholder.com/300x200?text=No+Image"
                      } 
                      alt={drug.brand_name} 
                      className="w-100 h-100 object-fit-cover"
                    />
                  </div>

                  <Card.Body className="p-3 d-flex flex-column">
                    <Badge bg="light" text="primary" className="mb-2 w-auto d-inline-block px-2 py-1 align-self-start">
                      {drug.category || "General"}
                    </Badge>
                    <h5 className="fw-bold text-dark mb-1 text-truncate">{drug.brand_name}</h5>
                    <p className="text-muted small mb-3 text-truncate">{drug.generic_name}</p>
                    
                    <div className="mt-auto">
                      <Button variant="outline-primary" size="sm" className="w-100 rounded-pill fw-bold">
                        View Details
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            {drugs.length === 0 && !loading && (
              <Col className="text-center py-4">
                <p className="text-muted">No medicines found in the database.</p>
              </Col>
            )}
          </Row>
        )}
      </Container>

      {/* --- PRESCRIPTION BANNER --- */}
      <Container className="my-5">
        <Card className="border-0 shadow-lg rounded-4 overflow-hidden text-white" style={{ background: 'linear-gradient(135deg, #0d6efd 0%, #0a4ebd 100%)' }}>
          <Row className="g-0 align-items-center">
            <Col md={7} className="p-4 p-md-5">
              <h2 className="fw-bold mb-3">Have a Prescription?</h2>
              <p className="opacity-90 mb-4 fs-5">Upload it here and find medicines in minutes.</p>
              <Button variant="light" className="px-4 py-2 rounded-pill fw-bold text-primary shadow">Upload Now 📄</Button>
            </Col>
          </Row>
        </Card>
      </Container>

      {/* --- PHARMACY LISTING --- */}
      <section className="py-5 bg-white border-top">
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
        </Container>
      </section>

      {/* --- STATS --- */}
      <Container className="py-5 mb-5 border-top">
        <Row className="text-center g-4">
           {["50k+", "200+", "15+", "4.8/5"].map((stat, i) => (
             <Col xs={6} md={3} key={i}>
                <h2 className="fw-bold text-primary">{stat}</h2>
                <p className="text-muted small mb-0">{["Users", "Partners", "Cities", "Rating"][i]}</p>
             </Col>
           ))}
        </Row>
      </Container>

    </div>
  );
};

export default Home;