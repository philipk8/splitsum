import { connect } from 'react-redux';
import React from 'react';
import FriendShow from './friend_show';


const msp = ({ session, entities: { users, friends, usersIndex, expenses } }, ownProps) => {
  return({
    currentUser: users[session.id],
    friends: Object.values(friends),
    usersIndex: Object.values(usersIndex),
    friend: friends[ownProps.match.params.friendId],
    expenses: Object.values(expenses)
  })
}

const mdp = dispatch => {
  return({
    fetchFriends: (user_id) => dispatch(fetchFriends(user_id)),
  
    fetchFriend: (friend) => dispatch(fetchFriend(friend)),
    
    addFriend: (friend) => dispatch(addFriend(friend)),
    
    deleteFriend: (friend) => dispatch(deleteFriend(friend)),

    fetchUsers: () => dispatch(fetchUsers()),

    addExpenseForm: (
      <button className='db-add-expense-btn' onClick={() => dispatch(openModal('addexpense'))}>
        Add an expense
      </button>
    ),
  closeModal: () => dispatch(closeModal()),


  fetchExpenses: () => dispatch(fetchExpenses()),
  fetchExpense: (expense) => dispatch(fetchExpense(expense)),
  addExpense: (expense) => dispatch(addExpense(expense)),
  deleteExpense: (expenseId) => dispatch(deleteExpense(expenseId)),
  updateExpense: (expense) => dispatch(deleteExpense(expense)),

  logout: () => dispatch(logout()),



  })
}

export default connect( msp, mdp)(FriendShow);