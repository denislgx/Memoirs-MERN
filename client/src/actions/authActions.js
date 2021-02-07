import axios from 'axios';
import { AUTH } from '../constants/authConstants';

export const signUp = (formData, history) => async dispatch => {
  try {
    history.push('/');
  } catch (error) {
    console.error(error);
  }
};

export const signIn = (formData, history) => async dispatch => {
  try {
    history.push('/');
  } catch (error) {
    console.error(error);
  }
};
