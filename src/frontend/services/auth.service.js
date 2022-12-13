import axios from "axios";

const dbregister = (username, password, password_repeat) => {
  return axios.post(process.env.REACT_APP_API_URL + "register", {
    username,
    password,
    password_repeat,
  });
};

const dblogin = (username, password) => {
  return axios
    .post(process.env.REACT_APP_API_URL+ "login", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const dblogout = () => {
  localStorage.removeItem("user");
};

const dbgetCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export {
  dbregister,
  dblogin,
  dblogout,
  dbgetCurrentUser,
};