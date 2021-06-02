import { ActionTypes } from "../Constants/Action_Types";

export const AddProductAction = (products) => {
  return {
    type: ActionTypes.ADD_PRODUCTS,
    payload: products,
  };
};

export const SelectedProductAction = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: product,
  };
};
