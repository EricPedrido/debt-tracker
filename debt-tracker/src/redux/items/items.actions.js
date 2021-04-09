import ItemActionTypes from "./items.types";

export const selectItems = () => ({
  type: ItemActionTypes.ITEMS_SELECTED,
});

export const selectPayments = () => ({
  type: ItemActionTypes.PAYMENTS_SELECTED,
});

export const toggleItemsExpand = () => ({
  type: ItemActionTypes.TOGGLE_EXPAND,
});

export const resetItemsExpand = () => ({
  type: ItemActionTypes.RESET_EXPAND,
})