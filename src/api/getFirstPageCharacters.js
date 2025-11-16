import axios from "axios";

export const getFirstPageCharacters = async () => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/character`);
  return response.data;
};
