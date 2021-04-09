import PeopleActionTypes from "./people.types";

export const selectDebtees = () => ({
  type: PeopleActionTypes.DEBTEES_SELECTED,
});

export const selectDebtors = () => ({
  type: PeopleActionTypes.DEBTORS_SELECTED,
});

export const togglePeopleExpand = () => ({
  type: PeopleActionTypes.TOGGLE_EXPAND,
});

export const resetPeopleExpand = () => ({
  type: PeopleActionTypes.RESET_EXPAND,
})