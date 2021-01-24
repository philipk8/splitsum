
import { RECEIVE_USERS } from '../actions/users_index_actions';

const usersIndexReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USERS:
      // return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
      return action.users;
    default:
      return state;
  }
};

export default usersIndexReducer;
