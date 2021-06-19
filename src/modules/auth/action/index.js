import * as ActionTypes from './types';

export const loginAction = (email, password) => ({
  type: ActionTypes.AUTH_LOGIN,
  email,
  password,
});
export const logoutAction = () => ({
  type: ActionTypes.AUTH_LOGOUT,
});

export const cacheUserAction = (loggedInUser) => ({
  type: ActionTypes.CACHE_LOGIN,
  loggedInUser,
});
