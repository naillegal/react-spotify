import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

const rootReducer = combineReducers({
  auth: authReducer,
});

export type RootState = ReturnType<any>;

export default rootReducer;
