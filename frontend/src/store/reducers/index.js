import { combineReducers } from "redux";
import checkout from "./checkout.js";
import page from "./page.js";

export default combineReducers({
  checkout,
  page,
});
