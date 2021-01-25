import { connect } from 'react-redux';

import FriendShow from './friend_show'


const msp = ({ session, entities: { users, friends, usersIndex } }, ownProps) => {
  return({
    currentUser: users[session.id],
    friends: Object.values(friends),
    usersIndex: Object.values(usersIndex),
    friend: friends[ownProps.match.params.friendId]
  })
}

const mdp = dispatch => {
  return({
    fetchFriends: (user_id) => dispatch(fetchFriends(user_id)),
  
    fetchFriend: (friend) => dispatch(fetchFriend(friend)),
    
    addFriend: (friend) => dispatch(addFriend(friend)),
    
    deleteFriend: (friend) => dispatch(deleteFriend(friend)),

    fetchUsers: () => dispatch(fetchUsers())
  })
}

export default connect( msp, mdp)(FriendShow);