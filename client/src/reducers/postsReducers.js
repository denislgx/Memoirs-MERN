import {
  FETCH_POSTS,
  CREATE_POSTS,
  UPDATE_POST,
} from '../constants/postConstants';

export const postsReducers = (posts = [], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload;
    case CREATE_POSTS:
      return [...posts, action.payload];
    case UPDATE_POST:
      return posts.map(post =>
        post._id === action.payload._id ? action.payload : post
      );
    default:
      return posts;
  }
};
