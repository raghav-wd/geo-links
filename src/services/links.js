import axios from "axios";
import { BASE_URL } from "./constants";

axios.defaults.headers.common["Authorization"] =
  localStorage.getItem("jwtToken");

export const addLinks = (payload) => {
  return axios.post(`${BASE_URL}/addLink`, payload);
};

export const editLink = (payload) => {
  return axios.put(`${BASE_URL}/editLink`, payload);
};

export const deleteLinks = (payload) => {
  return axios.delete(`${BASE_URL}/deleteLink?link_id=${payload.linkId}`);
};

export const getAllLinks = () => {
  return axios.get(`${BASE_URL}/getAllLinks`);
};
