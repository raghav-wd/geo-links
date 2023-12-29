import axios from "axios";
import { BASE_URL } from "./constants";

export const login = (payload) => {
  return axios.post(`${BASE_URL}/login`, payload);
};
