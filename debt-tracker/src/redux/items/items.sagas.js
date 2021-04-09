import { takeLatest, put, all, call } from 'redux-saga/effects';

import ItemActionTypes from './items.types';

import { resetPeopleExpand } from '../people/people.actions';

export function* toggleExpand() {
  yield put(resetPeopleExpand());
}

export function* onToggleExpand() {
  yield takeLatest(ItemActionTypes.TOGGLE_EXPAND, toggleExpand);
}

export function* itemsSagas() {
  yield all([call(onToggleExpand)]);
}
