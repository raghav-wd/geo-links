import axios from "axios";
import { BASE_URL } from "./constants";

export const addLinks = (payload) => {
  return axios.post(`${BASE_URL}/addLink`, payload);
};
