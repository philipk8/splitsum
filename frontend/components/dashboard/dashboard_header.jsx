import React from 'react';
import { Link } from 'react-router-dom';
import UserDropDown from './user_dropdown'

class DashboardHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <nav className='db-nav-elements'>
        <nav className='db-left-nav'>
          <img className='db-logo' src={window.splitsum_logo} alt=""/>
          <Link to="/" className='db-word-logo'>Splitsum</Link>
        </nav>
        <nav className='db-right-nav'>
          <div className='db-user-dropdown'>
            <UserDropDown logout={this.props.logout} currentUser={this.props.currentUser}/>
          </div>
        </nav>
      </nav>
    )}

}

export default DashboardHeader