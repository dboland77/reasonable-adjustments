import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  disabilityList: ["test8", "test12", "test13", "test14"],
  loaded: true
}


export const disabilitySlice = createSlice({
  name: "disability",
  initialState,
  reducers: {
    addDisability: (state, action) => {
      state.disabilityList = [...state.disabilityList, action.payload];
    },
    addDisabilities: (state, action) => {
      state.disabilityList = [...state.disabilityList, ...action.payload];
    },
    removeDisability: (state, action) => {
      state.disabilityList = state.disabilityList.filter(
        (d) => d !== action.payload
      );
    },
  },
});

export const { addDisability, addDisabilities, removeDisability } = disabilitySlice.actions;

export default disabilitySlice.reducer;
