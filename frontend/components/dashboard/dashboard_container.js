import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { fetchFriends, fetchFriend, addFriend, removeFriend } from '../../actions/friends_actions'

import Dashboard from './dashboard';

const msp = ({ session, entities: { users } }) => {
  // destructuring; grabbing values of session and entiries from the state; state.session etc 
  return {
    currentUser: users[session.id]
  };
};

const mdp = dispatch => ({
  logout: () => dispatch(logout()),
  fetchFriends: (user_id) => dispatch(fetchFriends(user_id)),
  fetchFriend: (friend) => dispatch(fetchFriend(friend)),
  addFriend: (friend) => dispatch(addFriend(friend)),
  removeFriend: (friend) => dispatch(addFriend(friend)),

  

});

export default connect( msp, mdp)(Dashboard);
