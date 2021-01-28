import axios from 'axios';
import { FETCH_POSTS, CREATE_POSTS } from '../constants/postConstants';

export const getPosts = () => async dispatch => {
  try {
    const { data } = await axios.get('/posts');

    dispatch({ type: FETCH_POSTS, payload: data });
  } catch (error) {
    console.error(error.message);
  }
};

export const createPost = post => async dispatch => {
  try {
    const { data } = await axios.post('/posts', post);

    dispatch({ type: CREATE_POSTS, payload: data });
  } catch (error) {
    console.error(error.message);
  }
};
