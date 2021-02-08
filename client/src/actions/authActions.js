import axios from 'axios';
import { AUTH } from '../constants/authConstants';

export const signUp = (formData, history) => async dispatch => {
  try {
    const { data } = await axios.post('/user/signup', formData);

    dispatch({ type: AUTH, data });

    history.push('/');
  } catch (error) {
    console.error(error);
  }
};

export const signIn = (formData, history) => async dispatch => {
  try {
    const { data } = await axios.post('/user/signin', formData);

    dispatch({ type: AUTH, data });

    history.push('/');
  } catch (error) {
    console.error(error);
  }
};
