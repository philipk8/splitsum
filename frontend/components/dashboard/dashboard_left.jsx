import React from 'react';
import { Link } from 'react-router-dom';
// import UserDropDown from './user_dropdown'
import FriendsList from './friends_list'
import AddFriend from './add_friend'

class DashboardLeft extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div> 

        <Link to='/dashboard' className='db-left-db-lnk'>
          <img className='db-left-db-logo' src={window.splitsum_logo_grey} alt=""/>
          <span className='db-left-db-wrd'>Dashboard</span>
        </Link>

        {/* <button className='db-left-ra-btn'>
          <span className='db-left-ra-wrd'>Recent Activity</span>
        </button> */}

        <Link to='/all' className='db-left-ae-lnk'>
          <img className='db-left-ae-logo' src={window.menu_icon} alt=""/>
          <span className='db-left-ae-wrd'>All expenses</span>
        </Link>

        <div className='friends-list-head'>
          <span className='friends-list-wrd'>Friends</span>
        </div>

        <div className='db-left-friends-list'>
          <FriendsList 
            friends={this.props.friends}
            fetchFriends={this.props.fetchFriends}
            currentUser={this.props.currentUser}
          />
        </div>

        <div className='db-left-add-friend'>
          <AddFriend 
            fetchUsers={this.props.fetchUsers}
            currentUser={this.props.currentUser}
            addFriend={this.props.addFriend}
            usersIndex ={this.props.usersIndex}
            fetchFriends={this.props.fetchFriends}
            friends={this.props.friends}
          />
        </div>



      </div>
    )}

}

export default DashboardLeft