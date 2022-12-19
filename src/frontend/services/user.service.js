import axios from "axios";

const getPublicContent = () => {
  return axios.get(process.env.REACT_APP_API_URL);
};

const getDisabilities = () => {
  return axios.get(process.env.REACT_APP_API_URL + "disabilities", {});
};
export { getDisabilities, getPublicContent };
