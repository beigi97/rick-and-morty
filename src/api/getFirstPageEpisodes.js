import axios from "axios";

export const getFirstPageEpisodes = async () => {
  const response = await axios.get("https://rickandmortyapi.com/api/episode");
  return response.data;
};
