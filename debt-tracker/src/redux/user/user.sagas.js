import { takeLatest, put, all, call } from "redux-saga/effects";

import UserActionTypes from "./user.types";
import {
  signUpSuccess,
  signUpFailure,
  signInFailure,
  signInSuccess,
  signOutSuccess,
} from "./user.action";

import {
  cognitoAuthenticateUser,
  cognitoSignUp,
  getCurrentUserSession,
  cognitoSignOut,
} from "../../cognito/cognito.utils";

// TODO // SIGN INS // SIGN IN AFTER SIGN UP

export function* signUp({ payload: { email, password } }) {
  try {
    yield cognitoSignUp(email, password);
    //TODO onSignUpSuccess to signInAfterSignUp
    yield put(signUpSuccess({ email, password }));
  } catch (error) {
    console.log(error);
    yield put(signUpFailure(error));
  }
}

export function* signOut() {
  cognitoSignOut();
  yield put(signOutSuccess());
}

export function* emailSignIn({ payload: { email, password } }) {
  try {
    const userData = yield cognitoAuthenticateUser(email, password)
      .then((data) => {
        return data;
      })
      .catch((err) => {
        throw err;
      });

    yield put(signInSuccess(userData.accessToken.payload));
  } catch (error) {
    console.log(error);
    yield put(signInFailure(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const session = yield getCurrentUserSession()
      .then((session) => {
        return session;
      })
      .catch((err) => {
        throw err;
      });

    yield put(signInSuccess(session.accessToken.payload));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, emailSignIn);
}

export function* userSagas() {
  yield all([
    call(onSignUpStart),
    call(onEmailSignInStart),
    call(onSignOutStart),
    call(onCheckUserSession),
    call(onSignUpSuccess),
  ]);
}
