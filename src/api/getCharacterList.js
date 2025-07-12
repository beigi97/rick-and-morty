import axios from "axios";

export const getCharacterList = async (page = 1) => {
  const response = await axios.get(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );
  return response.data;
};
