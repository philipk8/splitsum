import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

import AddExpenseForm from './add_expense';
import { addExpense } from '../../actions/expenses_actions';

const msp = ({ session, entities: { users, friends, usersIndex, expenses } }) => {
  return {
    // errors: errors.session,
    formType: 'addexpense',

    currentUser: users[session.id],
    friends: Object.values(friends),
    // friendsObj: friends,
    usersIndex: Object.values(usersIndex),
    usersIndexObj: usersIndex,
    expenses: Object.values(expenses)
  };
};

const mdp = dispatch => {
  return {
    processForm: (expense) => dispatch(addExpense(expense)),
    // otherForm: (
    //   <button className='db-add-expense-btn' onClick={() => dispatch(openModal('addexpense'))}>
    //     Add an expense
    //   </button>
    // ),
    closeModal: () => dispatch(closeModal()),

    fetchFriends: (user_id) => dispatch(fetchFriends(user_id)),
    fetchFriend: (friend) => dispatch(fetchFriend(friend)),

    fetchUsers: () => dispatch(fetchUsers()),

  };
};

export default connect(msp, mdp)(AddExpenseForm);
