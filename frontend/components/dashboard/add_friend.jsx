import React from 'react';
import { Link } from 'react-router-dom';


class AddFriend extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      friend: 'test',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    // debugger
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user_id = this.props.currentUser.id;
    const friend_id = this.state.friend;
    const friend = {user_id, friend_id}
    this.props.addFriend(friend);
    this.props.fetchFriends();
    // const user = Object.assign({}, this.state);
    // this.props.processForm(user).then(() => this.props.history.push("/dashboard"));
  }


  render() {
    return(
      <form onSubmit={this.handleSubmit } className='add-friend-form'>
        <p className='add-friend-wrd'>Add Friends</p>
        <select className='users-index-box' onChange={this.update('friend') } value={this.state.friend} >
          {
            this.props.usersIndex.map( (user,i) => {
              const friends_arr = this.props.friends.map( (ele) => ele.id )
              // const friends_arr = [54]
              if (i === 0) {
              return (<option key={`user-${i}`} value={user.id}>
                  select a friend
              </option>)
              }
               else if (user.id !== this.props.currentUser.id && !friends_arr.includes(user.id) ) {
              return (<option key={`user-${i}`} value={user.id}>
                  {user.name}
              </option>)
               }
            })
          }
      </select>
      <br/>
        <input className="add-friend-submit" type="submit" value='Add Friend' />
      </form>
    )
  }
}


export default AddFriend;