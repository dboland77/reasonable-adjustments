import { configureStore, combineReducers } from "@reduxjs/toolkit";
import  userReducer  from "../reducers/userSlice";
import disabilityReducer from "../reducers/disabilitySlice"

const rootReducer = combineReducers({
  user: userReducer,
  disability: disabilityReducer
})
export const store = configureStore({
  reducer: rootReducer,
});
