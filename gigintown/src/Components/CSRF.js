import axios from "axios";

export const getCSRFToken = async () => {
  const response = await axios.get("http://localhost:8000/api/get-csrf-token/");
  return response.data.csrf_token;
};