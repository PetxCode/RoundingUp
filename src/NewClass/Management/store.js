import { shopReducer } from "./stateReducer";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer } from "./myReducer";

export const store = createStore(reducer, composeWithDevTools());
