// NPM PACKAGE IMPORTS
import { combineReducers } from "redux";

// REDUCER IMPORTS
import generalReducer from "./generalReducer";

// EXPORTS
export default combineReducers({
  generalData: generalReducer
});
