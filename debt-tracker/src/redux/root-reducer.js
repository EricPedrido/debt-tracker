import { combineReducers } from "redux";

import UserReducer from "./user/user.reducer";
import PeopleReducer from "./people/people.reducer";
import ItemReducer from "./items/items.reducer";

const rootReducer = combineReducers({
  user: UserReducer,
  people: PeopleReducer,
  items: ItemReducer,
});

export default rootReducer;
