import {RECEIVE_EXPENSES, RECEIVE_EXPENSE, REMOVE_EXPENSE } from '../actions/expenses_actions';

const expensesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_EXPENSES:
      return action.expenses
    case RECEIVE_EXPENSE:
      return Object.assign({}, state, {[action.expense.id]: action.expense })
    case REMOVE_EXPENSE:
      const newState = Object.assign({}, state)
      delete newState[action.expenseId]
      return newState
    default:
      return state;
  }
};

export default expensesReducer;
