import React from 'react';
import { Link, Switch, Route, Redirect, HashRouter } from 'react-router-dom';

class ExpenseIndexItem extends React.Component {
  constructor(props) {
    super(props);
    // this.fetchUsers = this.fetchUsers.bind(this);
  }

// componentDidMount() {
//     this.props.fetchUsers();
//   }
// componentWillMount() {
//     this.props.fetchUsers();
//   }


  render() {

    const { description, author_id, amount, paid_by_id, split,category, notes, id } = this.props.expense;

    // const userPaid2 = this.props.usersIndexObj[author_id].name
// debugger
    let userPaid = ''
    let userLent = ''
    this.props.usersIndex.forEach( user => {
      if (user.id == paid_by_id) {
        userPaid = user.name;
      } else if (this.props.currentUser.id == paid_by_id ) {
        userPaid = 'you';
      }
    })
  // debugger

    let authorName = ''
    this.props.usersIndex.forEach( user => {
      if (user.id == author_id) {
        authorName = user.name;
        }
    })

    const amount2 = amount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})

    const numPayees = Object.values(split).length
// debugger 
    let eachShare = (amount / numPayees) 
    const amtLent = eachShare * (numPayees - 1 ) 

    const amount3 = amtLent.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})

    const splitArr = Object.keys(split)
    const splitArr2 = splitArr.filter(ele => ele != paid_by_id)

    let payee1 =''
    let payee1Id = splitArr2[0]
    this.props.usersIndex.forEach( user => {
      if (user.id == payee1Id) {
        payee1 = user.name;
        }
    })

    const payee1Amt = split[payee1Id]
    
    let payee2 =''
    let payee2Id = splitArr2[1]
    this.props.usersIndex.forEach( user => {
      if (user.id == payee2Id) {
        payee2 = user.name;
        }
    })

    payee1 = payee1 + ' owes '

    if (payee2 == '') {
      payee2 == ''
    } else {
      payee2 = payee2 + ' owes '
    }

    eachShare = eachShare.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})

    const payee2Amt = split[payee2Id]

    const amount4 = payee1Amt.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})

    let amount5 =''

    if (payee2Amt) {
     amount5 = payee2Amt.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})
    }

// debugger
    // const userName = this.props.usersIndexObj[94].name

    // let lentWho = ''
    // if (numPayees > 2) {
    //   lentWho = ''
    // } else if (this.props.currentUser.id === paid_by_id) {

    // }


    // const amount3 = amount.toLocaleString('us-US', { style: 'currency', currency: 'USD' })

    // if (!this.props.usersIndex) {
    //   return (
    //     <div>Loading...</div>
    //   )}
    //     else { 
    return(
    <div className='ei-root'>
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
              <li className='ei-you-paid-1'>
                {/* <img src={window.user_icon} alt="" className='ei-user-icon'/> */}
              <span id='font-bold'>{userPaid}</span> paid <span id='money' className='font-bold-2'>{amount2}</span> and owes <span id='money' className='font-bold-2'>{eachShare}</span>
              </li>
              <li className='ei-you-paid-2'>
                {/* <img src={window.friend_icon} alt="" className='ei-user-icon'/> */}
                <span id='font-bold'>{payee1}</span> 
                <span id='money' className='font-bold-2'>{amount4}</span>
              </li>
              <li>
                {/* <img src={window.friend_icon} alt="" className='ei-user-icon'/> */}
                 <span id='font-bold'>{payee2}</span> 
                <span className='font-bold-2'>{amount5}</span>
                
              </li>
            </ul>
          </div>
          <div className='ei-b-right'>
              <div className='ei-b-right-category'>
                <div className='ei-you-paid-1'>
                  <span id='font-bold' >Category: </span>
                  {category}
                </div>
              </div>
              <div className='ei-b-right-notes'>
                  <span id='font-bold' className='.ei-you-paid-2'>Notes:</span> 
                  <br/>
                  <span>{notes}</span>
              </div>
          </div>
      </div>      
      
    </div>
  )
            
            }
}

// {/* <img src={window.category_icon} alt="" className='category-icon'/> */}
// {/* {this.props.expense.id} */}

export default ExpenseIndexItem;