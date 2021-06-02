import { actionTypes } from "./actionType";

export const addItem = (ItemID) => {
  return {
    type: actionTypes.ADD_ITEM,
    payload: ItemID,
  };
};

export const removeItem = (ItemID) => {
  return {
    type: actionTypes.REMOVE_ITEM,
    payload: ItemID,
  };
};

export const loadItem = (Item) => {
  return {
    type: actionTypes.LOAD_ALL,
    payload: Item,
  };
};

export const loadQTY = (ItemID, value) => {
  return {
    type: actionTypes.SELECT_QTY,
    payload: {
      id: ItemID,
      qty: value,
    },
  };
};
