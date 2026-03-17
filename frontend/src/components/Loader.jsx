import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = ({ fullScreen = true }) => {
  return (
    <div
      className={`d-flex justify-content-center align-items-center ${
        fullScreen ? "vh-100" : "py-5"
      }`}
    >
      <div className="text-center">
        <Spinner animation="border" role="status" />
        <div className="mt-3 text-muted">Loading...</div>
      </div>
    </div>
  );
};

export default Loader;