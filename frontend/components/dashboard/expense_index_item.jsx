import React from 'react';
import { Link, Switch, Route, Redirect, HashRouter } from 'react-router-dom';

class ExpenseIndexItem extends React.Component {
  constructor(props) {
    super(props);
    // this.deleteFriend = this.deleteFriend.bind(this);
  }

  render() {
    return(
    <div>
      {this.props.expense.id}
    </div>
  )}
  
}

export default ExpenseIndexItem;