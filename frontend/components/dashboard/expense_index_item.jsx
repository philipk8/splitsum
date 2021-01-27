import React from 'react';
import { Link, Switch, Route, Redirect, HashRouter } from 'react-router-dom';

class ExpenseIndexItem extends React.Component {
  constructor(props) {
    super(props);
    // this.deleteFriend = this.deleteFriend.bind(this);
  }

  render() {
    const { description, author_id, amount } = this.props.expense;

    const whoPaid = this.props.usersIndex[author_id]

    return(
    <div>
      <header className='ei-header'>

      <div className='ei-header-left'>
      <img src={window.category_icon} alt="" className='category-icon-small'/>
      <span className='ei-head-desc'>{description}</span>
      </div>

      <div className='ei-header-right'>
        <div className='ei-you-paid'>
          <span className='you-paid-wrd'>{whoPaid}</span>
          <span className='you-paid-amt'>{amount}</span>
        </div>
        <div className='ei-you-lent'>

        </div>
      </div>
      
      </header>
      
      <div className='ei-body'>
      
      </div>      
      
    </div>
  )}
  
}

{/* <img src={window.category_icon} alt="" className='category-icon'/> */}
{/* {this.props.expense.id} */}

export default ExpenseIndexItem;