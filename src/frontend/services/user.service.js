import axios from "axios";
import authHeader from "./auth-header";

const getPublicContent = () => {
  return axios.get(process.env.REACT_APP_API_URL);
};

const getDisabilities = () => {
  return axios.get(process.env.REACT_APP_API_URL + "disabilities", {
    headers: authHeader(),
  });
};
export { getDisabilities, getPublicContent };