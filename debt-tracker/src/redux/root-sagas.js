import { all, call } from "redux-saga/effects";

import { userSagas } from "./user/user.sagas";

export default function* rootSaga() {
  // allows us to no longer need to call sagaMiddleware.run() calls in store.js
  yield all([call(userSagas)]);
}
