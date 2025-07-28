import axios from "axios";

export const getFirstPageLocations = async () => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/location`);
  return response.data;
};
