import React from 'react';
import { Link } from 'react-router-dom';
import UserDropDown from './user_dropdown'

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
              {/* <img className='db-logo' src="assets/splitsum_logo.png" alt=""/> */}
              <img className='db-logo' src={window.splitsum_logo} alt=""/>
              <Link to="/" className='db-word-logo'>Splitsum</Link>
            </nav>
            <nav className='db-right-nav'>
              <div className='db-user-dropdown'>
                <UserDropDown logout={this.props.logout} currentUser={this.props.currentUser}/>
              </div>
            </nav>
          </nav>
        </header>

        <section className='db-section-main'> 
            <aside className='db-left-bar'> 

            <button className='db-left-db-btn'>
              <span className='db-left-db-wrd'>Dashboard</span>
            </button>

            <button className='db-left-ra-btn'>
              <span className='db-left-ra-wrd'>Recent Activity</span>
            </button>

            <button className='db-left-ae-btn'>
              <span className='db-left-ae-wrd'>All expenses</span>
            </button>

            <button className='db-left-fl-btn'>
              <span className='db-left-fl-wrd'>Friends</span>
            </button>



            </aside>
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


