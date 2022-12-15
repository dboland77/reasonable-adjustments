import { createSlice } from "@reduxjs/toolkit";

export const disabilitySlice = createSlice({
  name: "disability",
  initialState: {
    disabilityList: ["test1", "test2", "test3", "test4"],
  },
  reducers: {
    addDisability: (state, action) => {
      state.disabilityList = [...state.disabilityList, action.payload];
    },
    removeDisability: (state, action) => {
      state.disabilityList = state.disabilityList.filter(
        (d) => d !== action.payload
      );
    },
  },
});

export const { addDisability, removeDisability } = disabilitySlice.actions;

export const getDisabilityList = (state) => state.disabilityList;

export default disabilitySlice.reducer;
