import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8000/api/";

interface Item {
  name?: any | null,
  data: any | null,
  status: Boolean,
}

const getItem = () => {
  return axios
    .get(API_URL + "products", {headers: authHeader()})
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};


 const postCreateItem = (item:Item) => {
  return axios.post(API_URL + "products", item, { headers: authHeader() });
};

const userService = {
  getItem,
  postCreateItem

};


export default userService;