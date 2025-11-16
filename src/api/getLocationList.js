import axios from "axios";
export const getLocationList = async (page = 1) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/location/?page=${page}`
  );
  return response.data;
};
