import React from 'react';
import { Link, Switch, Route, Redirect, HashRouter } from 'react-router-dom';

class ExpenseIndexItem extends React.Component {
  constructor(props) {
    super(props);
    // this.deleteFriend = this.deleteFriend.bind(this);
  }

// componentDidMount() {
//     this.props.fetchUsers();
//   }
// componentWillMount() {
//     this.props.fetchUsers();
//   }

  render() {
    const { description, author_id, amount, paid_by_id, split } = this.props.expense;

    // const userPaid = this.props.usersIndexObj[author_id].name

    let userPaid = ''
    let userLent = ''
    this.props.usersIndex.forEach( user => {
      if (user.id == paid_by_id) {
        userPaid = user.name;
      } else if (this.props.currentUser.id == paid_by_id ) {
        userPaid = 'you';
      }
    })

    let authorName = ''
    this.props.usersIndex.forEach( user => {
      if (user.id == author_id) {
        authorName = user.name;
        }
    })

    const amount2 = amount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})

    const numPayees = Object.values(split).length
// debugger 
    const eachShare = (amount / numPayees) 
    const amtLent = eachShare * (numPayees - 1 ) 

    const amount3 = amtLent.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})

    // let lentWho = ''
    // if (numPayees > 2) {
    //   lentWho = ''
    // } else if (this.props.currentUser.id === paid_by_id) {

    // }


    // const amount3 = amount.toLocaleString('us-US', { style: 'currency', currency: 'USD' })

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
          <span className='who-pl-amt' id='money'>{amount2}
          </span>
        </div>
        
        <div className='ei-who-pl2'>
          <span className='who-pl-wrd'>{userPaid} lent
          </span>
          <span className='who-pl-amt2' id='money'>{amount3}
          </span>
        </div>
        
      </div>
      
      </header>
      
      <div className='ei-middle'>
        
        <img src={window.category_icon} alt="" className='category-icon-medium'/>
        
        <div className='ei-middle-content'>
          
        <span className='ei-m-c-desc'>{description}</span>
        <span className='ei-m-c-amt' id='money'>{amount2}</span>
        <span className='ei-m-c-author'>Added by {authorName}</span>
        <button className='ei-m-c-btn'>Edit expense</button>


        </div>
      </div>

      <div className='ei-bottom'>
          <div className='ei-b-left'>
            <ul>
              <li>
                <img src={window.user_icon} alt="" className='ei-user-icon'/>
              {userPaid} paid {amount2} and owes {eachShare}
              </li>
            </ul>
          </div>
          <div className='ei-b-right'>

          </div>
      </div>      
      
    </div>
  )}
  
}

{/* <img src={window.category_icon} alt="" className='category-icon'/> */}
{/* {this.props.expense.id} */}

export default ExpenseIndexItem;