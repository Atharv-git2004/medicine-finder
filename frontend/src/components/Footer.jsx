import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-auto">
      <Container>
        <Row className="g-4">
          
          {/* Column 1: Brand & Description */}
          <Col lg={4} md={6}>
            <h4 className="fw-bold text-info mb-3">MediFind</h4>
            <p className="text-light opacity-75 small pe-lg-5">
              Providing real-time medicine availability to bridge the gap between 
              patients and pharmacies. Dedicated to making healthcare accessible 
              and transparent for everyone.
            </p>
            <div className="d-flex gap-3 mt-4">
              <a href="#" className="text-white opacity-75 hover-info"><Facebook size={20} /></a>
              <a href="#" className="text-white opacity-75 hover-info"><Twitter size={20} /></a>
              <a href="#" className="text-white opacity-75 hover-info"><Instagram size={20} /></a>
            </div>
          </Col>

          {/* Column 2: Quick Links */}
          <Col lg={2} md={6}>
            <h6 className="fw-bold text-uppercase small mb-4 text-info">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/" className="text-light opacity-75 text-decoration-none small hover-link">Home</Link></li>
              <li className="mb-2"><Link to="/search" className="text-light opacity-75 text-decoration-none small hover-link">Find Medicine</Link></li>
              <li className="mb-2"><Link to="/reservations" className="text-light opacity-75 text-decoration-none small hover-link">My Reservations</Link></li>
              <li className="mb-2"><Link to="/login" className="text-light opacity-75 text-decoration-none small hover-link">Pharmacy Login</Link></li>
            </ul>
          </Col>

          {/* Column 3: Support */}
          <Col lg={2} md={6}>
            <h6 className="fw-bold text-uppercase small mb-4 text-info">Support</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-light opacity-75 text-decoration-none small hover-link">Help Center</a></li>
              <li className="mb-2"><a href="#" className="text-light opacity-75 text-decoration-none small hover-link">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="text-light opacity-75 text-decoration-none small hover-link">Terms of Service</a></li>
              <li className="mb-2"><a href="#" className="text-light opacity-75 text-decoration-none small hover-link">Contact Us</a></li>
            </ul>
          </Col>

          {/* Column 4: Contact Info */}
          <Col lg={4} md={6}>
            <h6 className="fw-bold text-uppercase small mb-4 text-info">Contact Information</h6>
            <div className="d-flex align-items-center gap-3 mb-3">
              <div className="bg-info bg-opacity-10 p-2 rounded-circle">
                <MapPin size={18} className="text-info" />
              </div>
              <span className="text-light opacity-75 small">Cyberpark, Calicut, Kerala - 673016</span>
            </div>
            <div className="d-flex align-items-center gap-3 mb-3">
              <div className="bg-info bg-opacity-10 p-2 rounded-circle">
                <Phone size={18} className="text-info" />
              </div>
              <span className="text-light opacity-75 small">+91 98765 43210</span>
            </div>
            <div className="d-flex align-items-center gap-3">
              <div className="bg-info bg-opacity-10 p-2 rounded-circle">
                <Mail size={18} className="text-info" />
              </div>
              <span className="text-light opacity-75 small">support@medifind.com</span>
            </div>
          </Col>

        </Row>

        <hr className="my-5 bg-secondary opacity-25" />

        {/* Copyright Section */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <p className="text-light opacity-50 small mb-0">
            © 2026 MediFind. All rights reserved.
          </p>
          <p className="text-light opacity-50 small mb-0 d-flex align-items-center gap-1">
            Developed with <Heart size={14} className="text-danger fill-danger" /> for the community
          </p>
        </div>
      </Container>

      {/* Internal CSS for Smooth Hover Effects */}
      <style>{`
        .hover-info:hover { color: #0dcaf0 !important; transition: 0.3s; }
        .hover-link:hover { 
          color: #0dcaf0 !important; 
          padding-left: 8px; 
          transition: 0.3s; 
          opacity: 1 !important;
        }
      `}</style>
    </footer>
  );
};

export default Footer;