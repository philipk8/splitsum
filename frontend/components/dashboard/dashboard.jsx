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
  // debugger
    const total_balance = this.props.currentUser.total_balance
    const you_owe = this.props.currentUser.you_owe
    const you_are_owed = this.props.currentUser.you_are_owed
  //  debugger 
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


            <div className='user-summary-1'>
              <div className='us-1-left'>
                <span>total balance</span>
                <p id='money'>{total_balance}</p>
              </div>
              <div className='us-1-middle'>
                <span>you owe</span>
                <p id='money'>{you_owe}</p>
              </div>
              <div className='us-1-right'>
                <span>you are owed</span>
                <p id='money'>{you_are_owed}</p>
              </div>
            </div>
            <div className='user-summary-2'>

            </div>
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