import axios from "axios";

export const getCharacterList = async (page = 1) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/character/?page=${page}`
  );
  return response.data;
};
