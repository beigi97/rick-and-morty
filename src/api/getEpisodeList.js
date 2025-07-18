import axios from "axios";

export const getEpisodeList = async (page = 1) => {
  const response = await axios.get(
    `https://rickandmortyapi.com/api/episode/?page=${page}`
  );
  return response.data;
};
