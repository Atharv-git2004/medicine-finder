import axios from "axios";


const API_URL = "http://localhost:3000/med";


export const getDrugs = async () => {
  try {
    const response = await axios.get(`${API_URL}/`);
    return response.data; 
  } catch (error) {
    console.error("Error fetching drugs:", error);
    throw error;
  }
};


export const addDrug = async (drugData, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(`${API_URL}/add`, drugData, config);
    return response.data;
  } catch (error) {
    console.error("Error adding drug:", error);
    throw error;
  }
};