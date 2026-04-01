import axios from "axios";

// നിന്റെ ബാക്ക് എൻഡ് URL
const API_URL = "http://localhost:3000/med";

// എല്ലാ മരുന്നുകളും എടുക്കാൻ
export const getDrugs = async () => {
  try {
    const response = await axios.get(`${API_URL}/`);
    return response.data; // ഇത് { success: true, data: [...] } എന്ന ഫോർമാറ്റിൽ വരും
  } catch (error) {
    console.error("Error fetching drugs:", error);
    throw error;
  }
};

// പുതിയ മരുന്ന് ചേർക്കാൻ (Admin/Seller സെക്ഷനിൽ ഉപയോഗിക്കാം)
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