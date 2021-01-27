import React from 'react';
import { Link, Switch, Route, Redirect, HashRouter } from 'react-router-dom';
import ExpenseIndexItem from './expense_index_item'

class ExpensesIndex extends React.Component {
  constructor(props) {
    super(props);
    // this.deleteFriend = this.deleteFriend.bind(this);
  }

  componentDidMount() {
    this.props.fetchExpenses();
  }

  render() {
    return(
    <ul>
      {
        this.props.expenses.map((expense) => (
          <ExpenseIndexItem
            key={expense.id}
            expense={expense}

            fetchExpense={this.props.fetchExpense}
            addExpense={this.props.addExpense}
            updateExpense={this.props.updateExpense}
            deleteExpense={this.props.deleteExpense}

            currentUser={this.props.currentUser}
            friends={this.props.friends}
            usersIndex={this.props.usersIndex}
          />
        ))
      }
    </ul>
  )}

}

export default ExpensesIndex;
