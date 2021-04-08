import ItemActionTypes from "./items.types";

export const selectItems = () => ({
  type: ItemActionTypes.ITEMS_SELECTED,
});

export const selectPayments = () => ({
  type: ItemActionTypes.PAYMENTS_SELECTED,
});
