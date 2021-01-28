import { FETCH_POSTS, CREATE_POSTS } from '../constants/postConstants';

export const postsReducers = (posts = [], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload;
    case CREATE_POSTS:
      return [...posts, action.payload];
    default:
      return posts;
  }
};
