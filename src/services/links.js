import axios from "axios";
import { BASE_URL } from "./constants";

export const addLinks = (payload) => {
  return axios.post(`${BASE_URL}/addLink`, payload);
};

export const editLink = (payload) => {
  return axios.put(`${BASE_URL}/editLink`, payload);
};

export const deleteLinks = (payload) => {
  return axios.delete(`${BASE_URL}/deleteLink?link_id=${payload.linkId}`);
};

export const getAllLinks = (payload) => {
  return axios.get(`${BASE_URL}/getAllLinks?user_id=${payload.userId}`);
};
