import axios from "axios";
export const getLocationList = async (page = 1) => {
  const response = await axios.get(
    `https://rickandmortyapi.com/api/location/?page=${page}`
  );
  return response.data;
};
