import React from 'react';
import { Link } from 'react-router-dom';


class FriendsList extends React.Component {
  constructor(props) {
    super(props);
    };

  componentDidMount() {
    this.props.fetchFriends(this.props.currentUser.id);
  }

  // navigateToFriendPage() {
  //   const url = `/friends/${this.props.match.params.benchId}`
  //   this.props.history.push(url);
  // }

  render() {
    return(
      <div>
        <ul>
          {
          this.props.friends.map( (friend, i) =>
             
            // <li key={`friend-${i}`} className='friend-list-box' onClick={this.navigateToFriendPage}>

            <li key={`friend-${i}`} className='friend-list-box'>

              <img src={window.friend_list_icon} alt="" className='friend-list-icon'/>

              <Link to={`/friends/${friend.id}`} className='friend-link'>
              
              <span className='friends-list-text'>
              {friend.name}
              </span>
              
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