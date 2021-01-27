import React from 'react';
import { Link, Switch, Route, Redirect, HashRouter } from 'react-router-dom';

class ExpenseIndexItem extends React.Component {
  constructor(props) {
    super(props);
    // this.deleteFriend = this.deleteFriend.bind(this);
  }

componentDidMount() {
    // this.props.fetchUsers();
  }

  render() {
    const { description, author_id, amount } = this.props.expense;

    const userPaid = this.props.usersIndexObj[author_id].name

  // debugger

  


// debugger
    // const userPaid = this.props.friends[author_id]
    // const namePaid = userPaid.name;

    return(
    <div>
      <header className='ei-header'>

      <div className='ei-header-left'>
      <img src={window.category_icon} alt="" className='category-icon-small'/>
      <span className='ei-head-desc'>{description}</span>
      </div>

      <div className='ei-header-right'>
        <div className='ei-you-paid'>
          <span className='you-paid-wrd'>{userPaid}</span>
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