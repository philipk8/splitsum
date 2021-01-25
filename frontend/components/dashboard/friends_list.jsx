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
             
            <li key={`friend-${i}`}>{friend.name}</li>
          )
          }
        </ul>
      </div>
      
    )
  }
}


export default FriendsList;