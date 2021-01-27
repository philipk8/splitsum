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

    return(
    <div>
      <header className='ei-header'>

      <div className='ei-header-left'>
      <img src={window.category_icon} alt="" className='category-icon-small'/>
      <span className='ei-head-desc'>{description}</span>
      </div>

      <div className='ei-header-right'>
        <div className='ei-who-pl'>
          <span className='who-pl-wrd'>{userPaid} paid
          </span>
          <span className='who-pl-amt'>{amount}
          </span>
        </div>
        
        <div className='ei-who-pl2'>
          <span className='who-pl-wrd'>{userPaid} paid2
          </span>
          <span className='who-pl-amt2'>{amount}2
          </span>
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