import * as types from './types';

export const signup = ({ email, username, phone, password }) => ({
  type: types.SIGNUP,
  meta: {
    async: true,
    blocking: true,
    path: `signup`,
    method: 'POST',
    body: {
      email,
      username,
      phone,
      password,
    },
  },
});

export const login = ({ username, password }) => ({
  type: types.LOGIN,
  meta: {
    async: true,
    blocking: true,
    path: `api-token-auth/`,
    method: 'POST',
    body: { username, password },
  },
});

export const logout = token => {
  return {
    type: types.LOGOUT,
    meta: {
      async: true,
      blocking: true,
      path: `api-auth/logout/`,
      method: 'POST',
      body: {},
      token,
    },
  };
};

export const setUserToken = token => ({
  type: types.SET_USER_TOKEN,
  payload: token,
});
