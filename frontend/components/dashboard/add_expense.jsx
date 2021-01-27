import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class AddExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author_id: '',
      category: '',
      description: '',
      amount: '',
      notes: '',
      friends_arr: [],
      paid_by_id: '', 
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  render() {
    const results = this.matches().map((result, i) => {
      return (
        <li key={i} onClick={this.selectName}>{result}</li>
      );
    });

    return (

      <div className="addex-form">
        <form onSubmit={this.handleSubmit} className="addex-form">
          
          <header className="addex-head">
            <span>Add expense</span>
            <div onClick={this.props.closeModal} className="close-x">X</div>
          </header>
        
          <div className='addex-friends'>
            With
            <span id='bold'>you</span>
            and:
            <AutoComplete friends={this.props.friends} />
          </div>

          <div className='addex-details-1'>
            <img src={window.category_icon} alt="" className='category-icon-medium'/>
            <div className='addex-desc-amt'>
                <input type="text"
                value={this.state.description}
                onChange={this.update('description')}
                className="addex-desc"
                />
                <input type="text"
                value={this.state.amount}
                onChange={this.update('amount')}
                className="addex-amt"
                />
            </div>
          </div>

          <div className='addex-details-2'>
            <div className='details-2-top'>
            Paid by 
            <div className='addex-paidby'>
            {/* selection of friends */}
            </div>
            and split equally.
            </div>
            <div className='details-2-middle'>
              {/* per person calculation */}
              ($3.33/person)
            </div>
            <div className='details-2-bottom'>
              <input type="text"
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
        