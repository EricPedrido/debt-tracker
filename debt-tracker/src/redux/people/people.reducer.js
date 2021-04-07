import PeopleActionTypes from "./people.types";

const INITIAL_STATE = {
  showDebtees: true,
  showDebtors: false,
};

const PeopleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PeopleActionTypes.DEBTEES_SELECTED:
      return {
        ...state,
        showDebtees: true,
        showDebtors: false,
      };
    case PeopleActionTypes.DEBTORS_SELECTED:
      return {
        ...state,
        showDebtees: false,
        showDebtors: true,
      };
    default:
      return state;
  }
};

export default PeopleReducer;
