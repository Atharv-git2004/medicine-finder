import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex align-items-center justify-content-center text-white"
      style={{
        minHeight: "100vh",
        background: "#f0f2f5", // Light background for the neon to pop
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background Glows for Neon Vibe */}
      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          background: "rgba(112, 99, 255, 0.15)",
          borderRadius: "50%",
          filter: "blur(100px)",
          top: "10%",
          left: "5%",
        }}
      />

      <Container className="d-flex justify-content-center" style={{ zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{
            background: "white", 
            padding: "4rem 2.5rem",
            borderRadius: "40px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.05)", // Soft card shadow
            maxWidth: "550px",
            width: "100%"
          }}
        >
          {/* Neon Gradient 404 Text */}
          <motion.h1
            className="fw-bold"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{ 
                fontSize: "clamp(5rem, 15vw, 8.5rem)", 
                lineHeight: 1,
                marginBottom: "1rem",
                background: "linear-gradient(135deg, #7063FF 0%, #4834D4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 10px 10px rgba(112, 99, 255, 0.2))"
            }}
          >
            404
          </motion.h1>

          <div style={{ color: "#2d3436" }}>
            <h2 className="mb-3 fw-bold" style={{ letterSpacing: "0.5px" }}>
                PAGE NOT FOUND
            </h2>
            <p className="mb-5 text-muted" style={{ fontSize: "1.05rem" }}>
                The link you followed may be broken, or the page may have been removed.
            </p>

            {/* The Soft Neon / Neumorphic Button from your image */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button
                size="lg"
                className="w-100 py-3 fw-bold"
                style={{
                  background: "#7063FF", // Primary Electric Purple
                  border: "none",
                  borderRadius: "15px",
                  fontSize: "1.1rem",
                  color: "white",
                  // Neumorphic shadow effect from your image
                  boxShadow: "0 10px 25px rgba(112, 99, 255, 0.5), inset 0 -4px 0 rgba(0,0,0,0.1)", 
                  transition: "all 0.3s ease",
                  letterSpacing: "0.5px"
                }}
                onClick={() => navigate("/")}
              >
                Back to Dashboard
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </Container>

      {/* Subtle Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{
            position: "absolute",
            right: "10%",
            bottom: "15%",
            width: "40px",
            height: "40px",
            border: "6px solid #7063FF",
            borderRadius: "10px",
            opacity: 0.1
        }}
      />
    </div>
  );
};

export default NotFound;