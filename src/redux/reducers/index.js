import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./chart";

const reducer = combineReducers({
  cart: cartReducer,
});

export default reducer;
