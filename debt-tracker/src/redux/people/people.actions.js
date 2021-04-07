import PeopleActionTypes from "./people.types";

export const selectDebtees = () => ({
  type: PeopleActionTypes.DEBTEES_SELECTED,
});

export const selectDebtors = () => ({
  type: PeopleActionTypes.DEBTORS_SELECTED,
});
