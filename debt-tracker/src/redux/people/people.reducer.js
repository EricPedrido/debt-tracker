import PeopleActionTypes from "./people.types";

const INITIAL_STATE = {
  showDebtees: true,
  showDebtors: false,
  expand: false,
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

    case PeopleActionTypes.TOGGLE_EXPAND:
      return {
        ...state,
        expand: !state.expand,
      };
    default:
      return state;
  }
};

export default PeopleReducer;
