import axios from "axios";

export const getFirstPageLocations = async () => {
  const response = await axios.get(`https://rickandmortyapi.com/api/location`);
  return response.data;
};
