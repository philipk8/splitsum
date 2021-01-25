import React from 'react';
import { Link, Switch, Route, Redirect, HashRouter } from 'react-router-dom';
import DashboardHeader from './dashboard_header';
import DashboardLeft from './dashboard_left'

class FriendShow extends React.Component {
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

          <section className='friend-show-center'>
            <p className='friend-show-header'> 
            friends show page; placeholder text
            </p>
          </section>

        </section>

      </div>
  )}

}

export default FriendShow;