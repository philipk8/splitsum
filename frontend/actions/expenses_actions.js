import * as ExpensesUtil from '../util/expenses_api_util'

export const RECEIVE_EXPENSES = 'RECEIVE_EXPENSES'
export const RECEIVE_EXPENSE = 'RECEIVE_EXPENSE'
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE'

const receiveExpenses = (expenses) => {
  return({
    type: RECEIVE_EXPENSES,
    expenses
  })
}
const receiveExpense = (expense) => {
  return({
    type: RECEIVE_EXPENSE,
    expense
  })
}
const removeExpense = (expenseId) => {
  return({
    type: REMOVE_EXPENSE,
    expenseId
  })
}

export const fetchExpenses = () => dispatch => (
  ExpensesUtil.fetchExpenses().then(expenses => (
    dispatch(receiveExpenses(expenses))
  ))
);

export const fetchExpense = (expense) => dispatch => (
  ExpensesUtil.fetchExpense(expense).then(expense => (
    dispatch(receiveExpense(expense))
  ))
);

export const addExpense = (expense) => dispatch => (
  ExpensesUtil.addExpense(expense).then(expense => (
    dispatch(receiveExpense(expense))
  ))
);
export const updateExpense = (expense) => dispatch => (
  ExpensesUtil.updateExpense(expense).then(expense => (
    dispatch(receiveExpense(expense))
  ))
);

export const deleteExpense = (expenseId) => dispatch => (
  ExpensesUtil.deleteExpense(expenseId).then(expense => (
    dispatch(removeExpense(expense.id))
  ))
);