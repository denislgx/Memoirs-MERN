import { combineReducers } from 'redux';
import { postsReducers } from './postsReducers';
import { authReducers } from './authReducers';

const reducer = combineReducers({
  postsData: postsReducers,
  auth: authReducers,
});

export default reducer;
