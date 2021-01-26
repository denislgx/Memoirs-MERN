import { combineReducers } from 'redux';
import { postsReducers } from './postsReducers';

const reducer = combineReducers({
  posts: postsReducers,
});

export default reducer;
