import React from 'react';
import { Link } from 'react-router-dom';
import DashboardHeader from './dashboard_header';
// import UserDropDown from './user_dropdown'
import DashboardLeft from './dashboard_left'

class Dashboard extends React.Component {
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


