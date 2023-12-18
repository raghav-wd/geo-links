import axios from "axios";

const BASE_URL = `http://localhost:6699/api`;

export const login = (payload) => {
  return axios.post(`${BASE_URL}/login`, payload);
};
