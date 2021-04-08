import ItemActionTypes from "./items.types";

const INITIAL_STATE = {
  showItems: true,
  showPayments: false,
};

const ItemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ItemActionTypes.ITEMS_SELECTED:
      return {
        ...state,
        showItems: true,
        showPayments: false,
      };
    case ItemActionTypes.PAYMENTS_SELECTED:
      return {
        ...state,
        showItems: false,
        showPayments: true,
      };
    default:
      return state;
  }
};

export default ItemReducer;
