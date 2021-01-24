import {RECEIVE_FRIENDS, RECEIVE_FRIEND, REMOVE_FRIEND } from '../actions/friends_actions';

const friendsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_FRIENDS:
      return action.friends
    case RECEIVE_FRIEND:
      return Object.assign({}, state, {[action.friend.id]: action.friend })
    case REMOVE_FRIEND:
      const newState = Object.assign({}, state)
      delete newState[action.friend.friend_id]
      return newState
    default:
      return state;
  }
};

export default friendsReducer;
