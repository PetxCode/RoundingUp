import { ActionTypes } from "../Constants/Action_Types";

const initialState = {
  Products: [
    // { id: 1, name: "Washing Machine", cost: 200000 },
    // { id: 2, name: "Electric Cooker", cost: 15000 },
    // { id: 3, name: "Pressing Iron", cost: 5000 },
    // { id: 4, name: "Stove", cost: 10000 },
  ],
};

export const ProductReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_PRODUCTS:
      return { ...state, Products: payload };

    default:
      return state;
  }
};

export const SelectProductReducers = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_PRODUCTS:
      return { ...state, ...payload };

    default:
      return state;
  }
};
