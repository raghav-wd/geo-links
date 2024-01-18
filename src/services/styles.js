import axios from "axios";
import { BASE_URL } from "./constants";

export const userStyles = (payload) => {
  return axios.get(`${BASE_URL}/userStyles?user_id=${payload.userId}`);
};

export const updateUserStyles = (payload) => {
  return axios.put(`${BASE_URL}/updateUserStyles`, payload);
};
