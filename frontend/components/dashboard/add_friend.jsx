import React from 'react';
import { Link } from 'react-router-dom';


class AddFriend extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      friend: ''
    }
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  handleSubmit(e) {
    e.preventDefault();
    // const user = Object.assign({}, this.state);
    // this.props.processForm(user).then(() => this.props.history.push("/dashboard"));
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} className='add-friend-form'>
        <p className='add-friend-wrd'>Add Friends</p>
        <input type='text'>
        </input>
        <input className="add-friend-submit" type="submit" value='Add Friend' />
      </form>
    )
  }
}


export default AddFriend;