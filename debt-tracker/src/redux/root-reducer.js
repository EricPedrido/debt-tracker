import { combineReducers } from "redux";

import UserReducer from "./user/user.reducer";
import PeopleReducer from "./people/people.reducer";

const rootReducer = combineReducers({
  user: UserReducer,
  people: PeopleReducer,
});

export default rootReducer;
