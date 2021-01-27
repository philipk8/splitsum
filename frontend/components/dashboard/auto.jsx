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
  debugger
    const friend = event.currentTarget.innerText;
    this.setState({inputVal: friend});
  debugger
    this.props.selectFriendProp(friend);
  debugger
  }

  render() {
    const results = this.matches().map((result, i) => {
      return (
        <li key={i} onClick={this.selectFriend}>{result}</li>
        // <li key={i} onClick={ () => this.props.selectFriendProp(result)}>{result}</li>
      );
    });
    return(
      <div>
        <div className='auto'>
          <input
            onChange={this.handleInput}
            value={this.state.inputVal}
            placeholder='Search...'/>
            {results}
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
