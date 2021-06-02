import { combineReducers } from "redux";
import { ProductReducers, SelectProductReducers } from "./ProductReducers";

export const reducers = combineReducers({
  myReducer: ProductReducers,
  product: SelectProductReducers,
});
