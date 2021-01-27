import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { fetchFriends, fetchFriend, addFriend, deleteFriend } from '../../actions/friends_actions'

import { fetchUsers } from '../../actions/users_index_actions' 

import Dashboard from './dashboard';



const msp = ({ session, entities: { users, friends, usersIndex, expenses } }) => {
  // destructuring; grabbing values of session and entiries from the state; state.session etc 
  return {
    currentUser: users[session.id],
    friends: Object.values(friends),
    // friends: friends,
    usersIndex: Object.values(usersIndex),
    usersIndexObj: usersIndex,
    expenses: Object.values(expenses)
  };
};

const mdp = dispatch => ({

  logout: () => dispatch(logout()),
  
  fetchFriends: (user_id) => dispatch(fetchFriends(user_id)),
  fetchFriend: (friend) => dispatch(fetchFriend(friend)),
  addFriend: (friend) => dispatch(addFriend(friend)),
  deleteFriend: (friend) => dispatch(deleteFriend(friend)),

  fetchUsers: () => dispatch(fetchUsers()),

  fetchExpenses: () => dispatch(fetchExpenses()),
  fetchExpense: (expense) => dispatch(fetchExpense(expense)),
  addExpense: (expense) => dispatch(addExpense(expense)),
  deleteExpense: (expenseId) => dispatch(deleteExpense(expenseId)),
  updateExpense: (expense) => dispatch(deleteExpense(expense)),


});

export default connect( msp, mdp)(Dashboard);
