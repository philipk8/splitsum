import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import usersIndexReducer from './users_index_reducer';
import friendsReducer from './friends_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  usersIndex: usersIndexReducer,
  friends: friendsReducer,
});

export default entitiesReducer; 
