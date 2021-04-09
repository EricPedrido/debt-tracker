import { takeLatest, put, all, call } from 'redux-saga/effects';

import PeopleActionTypes from './people.types';

import { resetItemsExpand } from '../items/items.actions';

export function* toggleExpand() {
  yield put(resetItemsExpand());
}

export function* onToggleExpand() {
  yield takeLatest(PeopleActionTypes.TOGGLE_EXPAND, toggleExpand);
}

export function* peopleSagas() {
  yield all([call(onToggleExpand)]);
}
