import React from 'react';
import { Link, Switch, Route, Redirect, HashRouter } from 'react-router-dom';
import DashboardHeader from './dashboard_header';
import DashboardLeft from './dashboard_left'

class FriendShow extends React.Component {
  constructor(props) {
    super(props);
    this.deleteFriend = this.deleteFriend.bind(this);
  }

  deleteFriend() {
    const user_id = this.props.currentUser.id
    const friend_id = this.props.friend.id
    const friend = {user_id: user_id, friend_id: friend_id}
    this.props.deleteFriend(friend);
    this.props.fetchFriends(user_id).then(() => this.props.history.push("/dashboard"))
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
            <p className='db-center-header'> 
            friends show page; placeholder text
            </p>
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