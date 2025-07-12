import axios from "axios";

export const getAllCharacters = async () => {
  const response = await axios.get("https://rickandmortyapi.com/api/character");
  return response.data;
};
