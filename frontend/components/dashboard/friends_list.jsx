import React from 'react';
import { Link } from 'react-router-dom';


class FriendsList extends React.Component {
  componentDidMount() {
    this.props.fetchFriends(this.props.currentUser.id);
  }

  render() {
    return(
      <div>
        <ul>
          {
          this.props.friends.map( (friend, i) =>
             
            <li key={`friend-${i}`} className='friend-list-box'>
              <img src={window.friend_list_icon} alt="" className='friend-list-icon'/>
              <Link to={`/friends/`} className='friend-link'>
              {friend.name}
              </Link>
            </li>
          )
          }
        </ul>
      </div>
      
    )
  }
}


export default FriendsList;