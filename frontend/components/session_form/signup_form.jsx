import React from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
    this.inputFlag = false,
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
    this.inputFlag = true;
    this.setState({
      [field]: e.currentTarget.value
    });
  }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.history.push("/dashboard"));
  }
  
  componentWillUnmount() { 
      this.props.receiveErrors([]);
    }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {`• ${error}`}
          </li>
        ))}
      </ul>
  );
  }

  render() {

    const input_flag = this.inputFlag ? 'show-input' : 'dont-show-input';

    const error_flag = this.props.errors.length > 0 ? 'show-error' : 'dont-show-error'
    
    return (
      <div className="signup-form-container">

        <section className='signup-section'>
            <section className='signup-left'>
                <img className='signup-section-logo'src={window.splitsum_logo} alt=""/>
            </section>

            <section className='signup-right'>
              <form onSubmit={this.handleSubmit} className="signup-form-box">
                <p className='signup-welcome'>Introduce Yourself</p>
                
                <div className={error_flag} id='error-id'>
                  <p id='font-bold'>The following errors occurred:</p>
                  <div id='errors-list'>
                  {this.renderErrors()}
                  </div>
                </div>

                <div className="signup-form">
                  <br/>
                  <br/>
                 
                  <span className='signup-hithere'>Hi there! My name is</span> 
                    <br/>
                    <input type="text"
                      value={this.state.name}
                      onChange={this.update('name')}
                      className='signup-name'
                      />
                    <br/>
                  
                  <span className={input_flag}>Here's my </span> 
                  <span className={input_flag} id='font-bold'>email address:</span> 

                    <br/>
                    <input type="text"
                      value={this.state.email}
                      onChange={this.update('email')}
                      className={input_flag}
                      />
                    <br/>
                 
                  <span className={input_flag}>And here's my </span> 
                  <span className={input_flag} id='font-bold'>password:</span>

                    <br/>
                    <input type="password"
                      value={this.state.password}
                      onChange={this.update('password')}
                      className={input_flag}
                      />
                    <br/>

                  <input className="signup-submit" type="submit" value='Sign me up!' />
                    <br/>



                </div>
              </form>
          </section>
        </section>
      </div>
    );
  }
}

export default SignUpForm;
