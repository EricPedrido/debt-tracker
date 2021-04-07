import { createSelector } from "reselect";

const selectPeople = (state) => state.people;

export const selectShowDebtees = createSelector(
  [selectPeople],
  (people) => people.showDebtees
);

export const selectShowDebtors = createSelector(
  [selectPeople],
  (people) => people.showDebtors
);
