import ItemActionTypes from './items.types';

const INITIAL_STATE = {
  showItems: true,
  showPayments: false,
  expand: '',
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
    case ItemActionTypes.TOGGLE_EXPAND:
      return {
        ...state,
        expand: !state.expand,
      };
    case ItemActionTypes.RESET_EXPAND:
      return {
        ...state,
        expand: '',
      };
    default:
      return state;
  }
};

export default ItemReducer;
