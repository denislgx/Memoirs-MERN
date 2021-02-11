import {
  FETCH_POSTS,
  CREATE_POSTS,
  UPDATE_POST,
  DELETE_POST,
  LIKE_POST,
} from '../constants/postConstants';

export const postsReducers = (posts = [], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        posts: action.payload.postMessages,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case CREATE_POSTS:
      return [...posts, action.payload];
    case UPDATE_POST:
      return posts.map(post =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE_POST:
      return posts.filter(post => post._id !== action.payload);
    case LIKE_POST:
      return posts.map(post =>
        post._id === action.payload._id ? action.payload : post
      );
    default:
      return posts;
  }
};
