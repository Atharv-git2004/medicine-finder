import React from "react";
import { Spinner, Container } from "react-bootstrap";

const Loader = ({ fullScreen = true, message = "Finding nearest pharmacies..." }) => {
  return (
    <div
      className={`d-flex justify-content-center align-items-center animate-fade-in ${
        fullScreen ? "vw-100 vh-100 position-fixed top-0 start-0 bg-white" : "py-5 w-100"
      }`}
      style={{ zIndex: 9999, transition: 'all 0.3s ease' }}
    >
      <Container className="text-center">
        {/* Professional Ripple Loader Effect */}
        <div className="position-relative d-inline-block mb-4">
          <Spinner 
            animation="grow" 
            variant="primary" 
            style={{ width: '3rem', height: '3rem', opacity: 0.2 }} 
            className="position-absolute start-50 top-50 translate-middle"
          />
          <Spinner 
            animation="border" 
            variant="primary" 
            style={{ width: '2.5rem', height: '2.5rem', borderWidth: '3px' }} 
            className="shadow-sm"
          />
        </div>

        {/* Loading Message */}
        <h6 className="fw-bold text-dark mb-1">{message}</h6>
        <p className="text-muted small mb-0 px-4">
          Please wait while we check real-time stock availability.
        </p>

        {/* Bottom Progress Line (Optional) */}
        <div 
          className="mx-auto mt-4 bg-light rounded-pill overflow-hidden" 
          style={{ width: '120px', height: '4px' }}
        >
          <div className="loader-progress-bar bg-primary h-100"></div>
        </div>
      </Container>

      {/* Internal CSS for Progress Animation */}
      <style>{`
        @keyframes loading-bar {
          0% { width: 0%; transform: translateX(-100%); }
          50% { width: 70%; transform: translateX(20%); }
          100% { width: 100%; transform: translateX(150%); }
        }
        .loader-progress-bar {
          animation: loading-bar 1.5s infinite ease-in-out;
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Loader;