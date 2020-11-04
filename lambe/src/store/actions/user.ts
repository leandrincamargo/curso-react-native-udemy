import { USER_LOGGED_IN, USER_LOGGED_OUT } from './actionTypes';

export const login = (user: any) => {
  return {
    type: USER_LOGGED_IN,
    payload: user,
  };
};

export const logout = () => {
  return {
    type: USER_LOGGED_OUT,
  };
};
