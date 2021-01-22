import React from 'react';
import { Link } from 'react-router-dom';
// import SplashPage from './splash_page'


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='db-main'>
        <header className='db-header'>
          <nav className='db-nav-elements'>
            <nav className='db-left-nav'>
              <img className='db-logo' src="assets/splitsum_logo.png" alt=""/>
              <Link to="/" className='db-word-logo'>Splitsum</Link>
            </nav>
            <nav className='db-right-nav'>
              <div className='db-user-dropdown'>
                  <p>Hi, {this.props.currentUser.name}!</p>
              </div>
              <button className='db-logout-button'onClick={() => this.props.logout()}>Log Out</button>
            </nav>
          </nav>
        </header>
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


