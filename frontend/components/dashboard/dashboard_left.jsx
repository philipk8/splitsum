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
      <aside className='db-left-bar'> 

        <button className='db-left-db-btn'>
          <span className='db-left-db-wrd'>Dashboard</span>
        </button>

        {/* <button className='db-left-ra-btn'>
          <span className='db-left-ra-wrd'>Recent Activity</span>
        </button> */}

        <button className='db-left-ae-btn'>
          <span className='db-left-ae-wrd'>All expenses</span>
        </button>

        <div className='db-left-friends-list'>
          <span className='friends-list-wrd'>Friends</span>
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
          />
        </div>



      </aside>
    )}

}

export default DashboardLeft