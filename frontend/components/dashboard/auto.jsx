import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ''
    };
    this.selectFriend = this.selectFriend.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({inputVal: event.currentTarget.value});
  }

  matches() {
    const matches = [];
    if (this.state.inputVal.length === 0) {
      return this.props.friends;
    }

    this.props.friends.forEach(friend => {
      const sub = friend.slice(0, this.state.inputVal.length);
      if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
        matches.push(friend);
      }
    });

    if (matches.length === 0) {
      matches.push('No matches');
    }

    return matches;
  }

  selectFriend(event) {
    const friend = event.currentTarget.innerText;
    this.setState({inputVal: friend});
    this.props.selectFriendProp(friend);
  }

  render() {

    const friends_list_flag = this.state.inputVal.length > 0 ? 'show-friends-list' : 'dont-show-friends-list'

    const results = this.matches().map((result, i) => {
      return (
        <ul>
        <li key={i} onClick={this.selectFriend} className='ae-friend'>{result}</li>
        </ul>
        // <li key={i} onClick={ () => this.props.selectFriendProp(result)}>{result}</li>
      );
    });
    return(
      <div>
        <div className='ae-friend-main'>
          <input className='ae-friend-search'
            onChange={this.handleInput}
            value={this.state.inputVal}
            placeholder='Search...'
          />
          <div className={friends_list_flag}>
          {results}
          </div>
          {/* <ul>
            <ReactCSSTransitionGroup
              transitionName='auto'
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}>
              {results}
            </ReactCSSTransitionGroup>  
          </ul> */}

        </div>
      </div>
    );
  }
};
