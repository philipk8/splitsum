import React from 'react';
import { Link, Switch, Route, Redirect, HashRouter } from 'react-router-dom';
import DashboardHeader from './dashboard_header';
import DashboardLeft from './dashboard_left';
// import ExpensesIndex from './expenses_index'
import FriendExpensesIndex from './friend_expenses_index'

class FriendShow extends React.Component {
  constructor(props) {
    super(props);
    this.deleteFriend = this.deleteFriend.bind(this);
  }

  // componentDidMount() {
  //   this.props.fetchFriend();
  //   this.props.fetchFriends();
  // }

  deleteFriend() {
    const user_id = this.props.currentUser.id
    const friend_id = this.props.friend.id
    const friend = {user_id: user_id, friend_id: friend_id}
    this.props.deleteFriend(friend);
    this.props.fetchFriends(user_id).then(() => this.props.history.push("/dashboard"))
  }

  render() {
    debugger
    // const friendName = this.props.friend.name;
    return (
      <div className='db-main'>
        <header className='db-header'>
            <DashboardHeader logout={this.props.logout} currentUser={this.props.currentUser}/>
        </header>

        <section className='db-section-main'>

          <aside className='db-left-bar'> 
            <DashboardLeft 
              fetchFriends={this.props.fetchFriends}
              fetchFriend={this.props.fetchFriend}
              addFriend={this.props.addFriend}
              deleteFriend={this.props.deleteFriend}
              fetchUsers={this.props.fetchUsers}
              currentUser={this.props.currentUser}
              friends={this.props.friends}
              usersIndex={this.props.usersIndex}
            />
          </aside>

          <section className='db-center'>
            <div className='db-center-header'>
              {/* <span className='db-header-wrd'>All expenses</span> */}
              {/* <span className='db-header-wrd'>{this.props.friend.name}</span> */}
              
              {/* <button className='db-add-expense-btn'>Add an expense</button> */}
              {this.props.addExpenseForm}
              {/* {this.props.otherForm} */}
            </div>

            <div className='db-expenses-index'>
                  <FriendExpensesIndex
                fetchExpenses={this.props.fetchExpenses}
                fetchExpense={this.props.fetchExpense}
                addExpense={this.props.addExpense}
                updateExpense={this.props.updateExpense}
                deleteExpense={this.props.deleteExpense}

                currentUser={this.props.currentUser}
                friends={this.props.friends}
                expenses={this.props.expenses}
                usersIndex={this.props.usersIndex}
                usersIndexObj={this.props.usersIndexObj}
                friend={this.props.friend}

              />
            </div>
          </section>
          
          <section className='db-right'>
            <button className='remove-friend-btn' onClick={this.deleteFriend}>
              Remove this friend
            </button>
            <br/>
            <p className='right-your-balance'> 
            Your Balance
            </p>
            <br/>
             <p className='right-balance-amount'> 
            friend owes you $10
            </p>
            <br/>
          </section>

        </section>

      </div>
  )}

}

export default FriendShow;