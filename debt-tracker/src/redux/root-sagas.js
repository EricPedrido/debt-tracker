import { all, call } from 'redux-saga/effects';

import { userSagas } from './user/user.sagas';
import { peopleSagas } from './people/people.sagas';
import { itemsSagas } from './items/items.sagas';

export default function* rootSaga() {
  // allows us to no longer need to call sagaMiddleware.run() calls in store.js
  yield all([call(userSagas), call(peopleSagas), call(itemsSagas)]);
}
