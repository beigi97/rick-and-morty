import axios from "axios";

export const getEpisodeList = async (page = 1) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/episode/?page=${page}`
  );
  return response.data;
};
