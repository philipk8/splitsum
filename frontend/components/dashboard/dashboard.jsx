import React from 'react';
import { Link, Switch, Route, Redirect, HashRouter } from 'react-router-dom';
import DashboardHeader from './dashboard_header';
// import UserDropDown from './user_dropdown'
import DashboardLeft from './dashboard_left'
import FriendShowContainer from './friend_show_container'
import ExpensesIndex from './expenses_index'

import Modal from './modal';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // debugger
    this.props.fetchUsers();
  }


  render() {
    debugger
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
              <span className='db-header-wrd'>Dashboard</span>
              {this.props.addExpenseForm}
            </div>
{/* 
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
          </div> */}

          </section>

        </section>


       


      </div>
    )
  }
}


export default Dashboard;

// const Dashboard = ({ currentUser, logout }) => {

//     // return (<h1>sometesttext</h1>)

//   const splashPage = () => (

//     <SplashPage /> 
    
//   );
//   const loggedinPage = () => (
//     <hgroup className="header-group">
//       <h2 className="header-name">Hi, {currentUser.username}!</h2>
//       <button className="header-button" onClick={logout}>Log Out</button>
//     </hgroup>
//   );
  
//   return currentUser ? loggedinPage() : splashPage();
// };


//  {/* <Switch> */}
//         <div className='db-center'>
//           <Route path="/friends/:friendId" component={FriendShowContainer} />
//         {/* </Switch> */}
//         </div>