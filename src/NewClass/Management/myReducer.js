import { shopReducer } from "./stateReducer";
import { combineReducers } from "redux";

export const reducer = combineReducers({
  shop: shopReducer,
});
