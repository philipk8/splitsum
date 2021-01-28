import React from 'react';
import { Link, Switch, Route, Redirect, HashRouter } from 'react-router-dom';
import DashboardHeader from './dashboard_header';
import DashboardLeft from './dashboard_left';
import ExpensesIndex from './expenses_index'

class AllExpenses extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
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
              <span className='db-header-wrd'>All expenses</span>
              {this.props.addExpenseForm}
              </div>
          
          
          <div className='db-expenses-index'>
              <ExpensesIndex
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

              />
          </div>

          </section>

          <section className='db-right'>
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

export default AllExpenses;