import axios from 'axios';
import {
  FETCH_POSTS,
  CREATE_POSTS,
  UPDATE_POST,
} from '../constants/postConstants';

export const getPosts = () => async dispatch => {
  try {
    const { data } = await axios.get('/posts');
    console.log('data', data);
    dispatch({ type: FETCH_POSTS, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const createPost = post => async dispatch => {
  try {
    const { data } = await axios.post('/posts', post);

    dispatch({ type: CREATE_POSTS, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const updatePost = (postId, updatedPost) => async dispatch => {
  try {
    const { data } = await axios.patch(`/posts/${postId}`, updatedPost);

    dispatch({ type: UPDATE_POST, payload: data });
  } catch (error) {
    console.error(error);
  }
};
