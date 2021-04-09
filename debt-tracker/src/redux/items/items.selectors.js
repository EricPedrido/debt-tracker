import { createSelector } from "reselect";

const selectItems = (state) => state.items;

export const selectShowItems = createSelector(
  [selectItems],
  (items) => items.showItems
);

export const selectShowPayments = createSelector(
  [selectItems],
  (items) => items.showPayments
);

export const selectItemsExpand = createSelector(
  [selectItems],
  (items) => items.expand
);

