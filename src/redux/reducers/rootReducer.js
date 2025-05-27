// const { combineReducers } = require("@reduxjs/toolkit");

import { combineReducers } from "redux";
// import { authReducer } from "./authReducers";
import authReducers from "./authReducers";

const rootReducer = combineReducers({
  auth: authReducers,
});

export default rootReducer;
