import axios from 'axios';
import {
  FETCH_POSTS,
  CREATE_POSTS,
  UPDATE_POST,
  DELETE_POST,
  LIKE_POST,
} from '../constants/postConstants';

export const getPosts = () => async dispatch => {
  try {
    const { data } = await axios.get('/posts');
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

export const deletePost = postId => async dispatch => {
  try {
    await axios.delete(`/posts/${postId}`);

    dispatch({ type: DELETE_POST, payload: postId });
  } catch (error) {
    console.error(error);
  }
};

export const likePost = postId => async dispatch => {
  try {
    const { data } = await axios.patch(`/posts/${postId}/like`);

    dispatch({ type: LIKE_POST, payload: data });
  } catch (error) {
    console.error(error.message);
  }
};
