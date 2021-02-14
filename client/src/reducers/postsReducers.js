import {
  FETCH_POSTS,
  CREATE_POSTS,
  UPDATE_POST,
  DELETE_POST,
  LIKE_POST,
} from '../constants/postConstants';

export const postsReducers = (
  postsData = { posts: [], pages: '', page: '' },
  action
) => {
  switch (action.type) {
    case FETCH_POSTS:
      // console.log('payload', action.payload);
      let { postMessages, pages, page } = action.payload;
      return { posts: postMessages, pages, page };
    // return {
    //   posts: action.payload.postMessages,
    //   pages: action.payload.pages,
    //   page: action.payload.page,
    // };
    case CREATE_POSTS:
      // console.log('payload', action.payload);
      return { ...postsData, posts: [...postsData.posts, action.payload] };
    // return [...posts, action.payload];
    // return postsData;
    case UPDATE_POST:
      // console.log('payload update', action.payload);
      // return posts.map(post =>
      //   post._id === action.payload._id ? action.payload : post
      // );
      return postsData;
    case DELETE_POST:
      // console.log('payload delete', action.payload);
      return {
        ...postsData,
        posts: postsData.posts.filter(post => post._id !== action.payload),
      };
    // return postsData;
    case LIKE_POST:
      // console.log('like payload', action.payload);
      return {
        ...postsData,
        posts: postsData.posts.map(post =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    // return postsData.posts.map(post =>
    //   post._id === action.payload._id ? action.payload : post
    // );
    default:
      return postsData;
  }
};
