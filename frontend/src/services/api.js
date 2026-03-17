import axios from "axios";

// Create axios instance
const API = axios.create({
  baseURL: "http://localhost:5000/api", // change when deploying
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach token to every request (if exists)
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Handle response globally
API.interceptors.response.use(
  (response) => response,
  (error) => {
    // Optional: handle unauthorized access
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default API;