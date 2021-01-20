import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

const msp = ({ session, entities: { users } }) => {
  // destructuring; grabbing values of session and entiries from the state; state.session etc 
  return {
    currentUser: users[session.id]
  };
};

const mdp = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect( msp, mdp)(Greeting);
