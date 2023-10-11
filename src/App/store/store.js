import { configureStore, combineReducers } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";

export const store = configureStore({
  reducer: combineReducers({ modal: modalReducer }),
});
