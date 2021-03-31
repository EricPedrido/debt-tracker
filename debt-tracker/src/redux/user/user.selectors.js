import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

export const selectRegisterPressed = createSelector(
  [selectUser],
  (user) => user.registerPressed
);

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
