import axios from 'axios';

export const getPosts = () => async dispatch => {
  try {
    const { data } = await axios.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: [] });
  } catch (error) {
    console.error(error.message);
  }
};
