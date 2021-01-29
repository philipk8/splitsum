import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import AutoComplete from './auto'

class AddExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author_id: `${this.props.currentUser.id}`,
      category: 'General',
      description: '',
      amount: '',
      notes: '',
      friends_arr: [],
      paid_by_id: `${this.props.currentUser.id}`, 
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectedFriend = this.selectedFriend.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const expense = Object.assign({}, this.state);
  // debugger
    this.props.processForm(expense).then(this.props.closeModal);
  }


  selectedFriend(friendName) {
    let currArr = this.state.friends_arr;
    this.props.friends.forEach( friend => {
      if (friend.name == friendName) {
        currArr.push(friend.id)
      }
    })
    this.setState({friends_arr: currArr})
  }

  render() {

    const autoFriendArr = this.props.friends.map( (friend) => friend.name )

    const perPerson = this.state.amount / (this.state.friends_arr.length + 1)
    
    const perPerson2 = perPerson.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})
    


    return (

      <div className="addex-form">
        <form onSubmit={this.handleSubmit} className="addex-form">
          
          <header className="addex-head">
            <span>Add an expense</span>
            <div onClick={this.props.closeModal} className="close-x">X</div>
          </header>
        
          <div className='addex-friends'>
            <div className='friends-wrd'>
            With
            <span id='font-bold'> you </span>
            and: 
            </div>
            
            <AutoComplete 
            friends={autoFriendArr}
            selectFriendProp={this.selectedFriend}
            />

            <div className='addex-friends-added'>
            <span className='added-friends-wrd'>Friends added:</span>
            {
              this.state.friends_arr.map( (friend_id, i) =>
              <ul>
              <li key={`friend_id-${i}`}>
                {this.props.usersIndexObj[friend_id].name}  
              </li>
              </ul>
              
              )
            }
            </div>

          
          </div>

          <div className='addex-details-1'>
            
            <div className='details-1-left'>
            
      
            <div className='categories-list'>
            <select className='categories-selector' onChange={this.update('category')} value={this.state.category}>
            <option value="General">General</option>
            <option value="Utilities">Utilities</option>
            <option value="Food and Drink">Food and Drink</option>
            <option value="Rent">Rent</option>
            <option value="Transportation">Transportation</option>
            <option value="Entertainment">Entertainment</option>
            </select>
            </div>

            <img src={window.category_icon} alt="" className='category-icon-medium'/>
            
            </div>

            <div className='details-1-right'>

            <div className='addex-desc-amt'>
                <span>Enter a description:</span>
                <input type="text"
                value={this.state.description}
                onChange={this.update('description')}
                className="addex-desc"
                />
                <br/>
                <br/>
                <span>Amount:</span>
                <br/>
                {/* <span>$</span> */}
                <input type="text"
                value={this.state.amount}
                onChange={this.update('amount')}
                className="addex-amt"
                />
            </div>

            </div>
            </div>

          <div className='addex-details-2'>
            <div className='details-2-top'>
            Paid by
            <div className='addex-paidby'>
            <select className='paidby-selector' onChange={this.update('paid_by_id')} value={this.state.paid_by_id}>
              <option value={this.props.currentUser.id}>you</option>
            {
              this.state.friends_arr.map( (friend_id, i) => 
              <option value={friend_id} key={`friend_id-${i}`}>
                 {this.props.usersIndexObj[friend_id].name}  
              </option>
              )
            }
            </select>
            </div>
            and split equally.
            </div>
            <div className='details-2-middle'>
              {/* per person calculation */}
              ($
              {perPerson2}
              /person)
            </div>
            <div className='details-2-bottom'>
              Notes:
              <br/>
              <textarea
                value={this.state.notes}
                onChange={this.update('notes')}
                className="addex-notes"
                />
            </div>

          </div>

          <div className="addex-buttons">
            <input className="ae-btn-cancel" type="submit" value="Cancel" />
            <input className="ae-btn-save" type="submit" value="Save" />
          </div>

        </form>
      </div>
  );
  }
}

export default withRouter(AddExpenseForm);

    // <br/>
    //         <label>Username:
    //           <input type="text"
    //             value={this.state.username}
    //             onChange={this.update('username')}
    //             className="login-input"
    //           />
    //         </label>
    //         <br/>
    //         <label>Password:
    //           <input type="password"
    //             value={this.state.password}
    //             onChange={this.update('password')}
    //             className="login-input"
    //           />
    //         </label>
    //         <br/>
        