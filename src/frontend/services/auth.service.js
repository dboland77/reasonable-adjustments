import axios from "axios";

const dbregister = (username, password, password_repeat, admin) => {
  return axios.post(process.env.REACT_APP_API_URL + "register", {
    username,
    password,
    password_repeat,
    admin
  });
};

const dblogin = (username, password) => {
  return axios
    .post(process.env.REACT_APP_API_URL+ "login", {
      username,
      password,
    })
    .then((response) => {
      return response.data;
    });
};

const dblogout = () => {
};



export {
  dbregister,
  dblogin,
  dblogout,
};