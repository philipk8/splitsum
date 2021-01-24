import * as FriendsUtil from '../util/friends_api_util'

export const RECEIVE_FRIENDS = 'RECEIVE_FRIENDS'
export const RECEIVE_FRIEND = 'RECEIVE_FRIEND'
export const REMOVE_FRIEND = 'REMOVE_FRIEND'

const receiveFriends = (friends) => {
  return({
    type: RECEIVE_FRIENDS,
    friends
  })
}
const receiveFriend = (friend) => {
  return({
    type: RECEIVE_FRIEND,
    friend
  })
}
const removeFriend = (friend) => {
  return({
    type: REMOVE_FRIEND,
    friend
  })
}

export const fetchFriends = (user_id) => dispatch => (
  FriendsUtil.fetchFriends(user_id).then(friends => (
    dispatch(receiveFriends(friends))
  ))
);

export const fetchFriend = (friend) => dispatch => (
  FriendsUtil.fetchFriend(friend).then(friend => (
    dispatch(receiveFriend(friend))
  ))
);

export const addFriend = (friend) => dispatch => (
  FriendsUtil.addFriend(friend).then(friend => (
    dispatch(receiveFriend(friend))
  ))
);

export const deleteFriend = (friend) => dispatch => (
  FriendsUtil.deleteFriend(friend).then(friend => (
    dispatch(removeFriend(friend))
  ))
);