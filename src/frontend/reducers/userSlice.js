import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    admin: false,
    isLoggedIn: false,
  },
  reducers: {
    login: (state, action) => {
      const {username, admin} = action.payload.user
      state.isLoggedIn = true;
      state.username = username;
      state.admin = admin;
    
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
export const getUserState = (state) => state.username

export default userSlice.reducer