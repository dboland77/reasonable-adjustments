import axios from "axios";

const getPublicContent = () => {
  return axios.get(process.env.REACT_APP_API_URL);
};

const getDisabilities = () => {
  return axios.get(process.env.REACT_APP_API_URL + "disabilities", {});
};

const setDisabilities = (names) => {
  return axios.post(process.env.REACT_APP_API_URL + "postdisabilities", 
  {
    "disability_names": names
  });
};



export { getDisabilities, setDisabilities, getPublicContent };
