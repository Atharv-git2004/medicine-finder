import API from "./api";

// Search medicines in nearby pharmacies
export const searchMedicines = async (query) => {
  try {
    const response = await API.get(`/medicines?search=${query}`);
    return response.data;
  } catch (error) {
    console.error("Error searching medicines:", error);
    throw error;
  }
};

// Get all nearby pharmacies
export const getPharmacies = async () => {
  try {
    const response = await API.get("/pharmacies");
    return response.data;
  } catch (error) {
    console.error("Error fetching pharmacies:", error);
    throw error;
  }
};

// Get pharmacy details by ID
export const getPharmacyById = async (id) => {
  try {
    const response = await API.get(`/pharmacies/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching pharmacy details:", error);
    throw error;
  }
};

// Reserve a medicine
export const reserveMedicine = async (data) => {
  try {
    const response = await API.post("/reservations", data);
    return response.data;
  } catch (error) {
    console.error("Error reserving medicine:", error);
    throw error;
  }
};