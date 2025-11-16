import axios from "axios";

export const getFirstPageEpisodes = async () => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/episode`);
  return response.data;
};
