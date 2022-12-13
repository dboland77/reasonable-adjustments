import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    admin: false,
    isLoggedIn: false,
  },
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
    toggleAdmin : (state) => {
      state.admin = !state.admin
    }
  },
});

export const { login, logout, toggleAdmin} = userSlice.actions;

export const getLoginState = (state) => state.isLoggedIn
export const getAdminState = (state) => state.admin

export default userSlice.reducer