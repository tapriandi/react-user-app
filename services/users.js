import axios from "axios";

export const getUsers = async () => {
  try {
    const dataUsers = await axios.get("https://randomuser.me/api/?results=20");
    return Promise.resolve(dataUsers);
  } catch (error) {
    return Promise.reject(error);
  }
};
