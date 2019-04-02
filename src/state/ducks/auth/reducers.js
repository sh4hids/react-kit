import * as types from './types';

const initialState = {
  isAuthenticated: false,
  token: '',
  redirectTo: '/',
};

const authReducers = function(state = initialState, { type, payload }) {
  switch (type) {
    case types.SIGNUP_COMPLETED:
      return {
        ...state,
        isAuthenticated: true,
        user: {
          ...payload.user,
        },
        jwt: payload.token,
        draftSignUp: {},
        redirectTo: '/dashboard',
      };
    case types.LOGIN_COMPLETED:
      return {
        ...state,
        isAuthenticated: true,
        token: payload.token,
        redirectTo: '/',
      };
    case types.LOGIN_FAILED:
      return {
        ...state,
        isAuthenticated: false,
      };
    case types.LOGOUT_COMPLETED || types.LOGOUT_FAILED:
      return {
        ...state,
        isAuthenticated: false,
        token: '',
        redirectTo: '/',
      };
    case types.SET_USER_TOKEN:
      return {
        ...state,
        isAuthenticated: payload ? true : false,
        jwt: payload,
      };
    case types.RESET_PASSWORD_COMPLETED:
      return {
        ...state,
        redirectTo: '/login',
      };
    case types.SET_USER_UNAUTHORIZED:
      return {
        ...state,
        isAuthenticated: false,
        token: '',
        redirectTo: '/login',
      };
    default:
      return state;
  }
};

export default authReducers;
