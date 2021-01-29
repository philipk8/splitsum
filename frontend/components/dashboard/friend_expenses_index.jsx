import React from 'react';
import { Link, Switch, Route, Redirect, HashRouter } from 'react-router-dom';
import ExpenseIndexItem from './expense_index_item'

class FriendExpensesIndex extends React.Component {
  constructor(props) {
    super(props);
    // this.deleteFriend = this.deleteFriend.bind(this);
  }

  componentDidMount() {
    this.props.fetchExpenses();
  }

  render() {

    let friendconst = {}
    if (this.props.friend) {
      // debugger
      friendconst = this.props.friend
    }

    let expensesArr = []
    
    if (this.props.expenses.length !== 0 ) {
      // debugger
      const expensesconst = this.props.expenses
      // const expenseexample = this.props.expenses[30]
      expensesconst.forEach ( (expense) => {
        // debugger
        // let friend_id  = friendconst["id"]
        // debugger
        // let friend_split = expense["split"]
        // debugger
        if (expense["split"][friendconst["id"]] !== undefined ) {
        // debugger
          expensesArr.push(expense)
        // debugger
        }
      })
    }

    expensesArr 
    // debugger

    return(
      
    <ul>
      {
        expensesArr.map((expense) => (
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
            usersIndexObj={this.props.usersIndexObj}
          />
        ))
      }
    </ul>
  )}

}

export default FriendExpensesIndex;
