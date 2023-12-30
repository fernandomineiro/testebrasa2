import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8000/api/";

interface Item {
  name?: any | null,
  data: any | null,
  status: Boolean,
}

export const getPublicContdsfsdent = () => {
  return axios.get(API_URL + "products"), { headers: authHeader() };
};

export const postCreateItem = (item:Item) => {
  return axios.post(API_URL + "products", item, { headers: authHeader() });
};

