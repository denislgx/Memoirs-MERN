import { AUTH, LOG_OUT } from '../constants/authConstants';

export const authReducers = (data = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      return { ...data, authData: action?.data };
    case LOG_OUT:
      localStorage.clear();
      return { ...data, authData: null };
    default:
      return data;
  }
};
