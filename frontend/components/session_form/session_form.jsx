import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
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
    this.props.processForm(user).then(() => this.props.history.push("/dashboard"));
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {

    const button_text = this.props.formType === 'login' ? "Log in" : "Sign me up!"

    const name_input_flag = this.props.formType === 'login' ? "no-name-input" : "with-name-input"

    return (
      <div className="login-form-container">

        <header className='session-nav'>
          <nav className='session-nav-elements'>
            <nav className='left-session-nav'>
              {/* <img className='session-logo' src="assets/splitsum_logo.png" alt=""/> */}
              <img className='session-logo' src={window.splitsum_logo} alt=""/>
              <Link to="/" className='session-word-logo'>Splitsum</Link>
            </nav>
            <nav className='right-session-nav'>
              <Link to="/login">
                <button className='session-login-button'>
                Log in
                </button>
              </Link>
                &nbsp;or&nbsp;
              <Link to="/signup" >
              <button className='session-signup-button'>
              Sign up
              </button>
              </Link>
            </nav>
          </nav>
        </header>

        <section className='session-section'>
            <section className='session-left'>
                {/* <img className='session-section-logo'src="assets/splitsum_logo.png" alt=""/> */}
                <img className='session-section-logo'src={window.splitsum_logo} alt=""/>
            </section>

            <section className='session-right'>
              <form onSubmit={this.handleSubmit} className="session-form-box">
                <p className='session-welcome'>Welcome to Splitsum</p>
                
                {/* Please {this.props.formType} or {this.props.navLink} */}

                
                <div className="session-form">
                  <br/>
                 
                  <span className={name_input_flag}>Name</span> 
                    <br/>
                    <input type="text"
                      value={this.state.name}
                      onChange={this.update('name')}
                      className={name_input_flag}
                      />
                    <br/>
                  
                  <span>Email address</span> 
                    <br/>
                    <input type="text"
                      value={this.state.email}
                      onChange={this.update('email')}
                      className="session-input"
                      />
                    <br/>
                 
                  <span>Password</span> 
                    <br/>
                    <input type="password"
                      value={this.state.password}
                      onChange={this.update('password')}
                      className="session-input"
                      />
                    <br/>
                  <input className="session-submit" type="submit" value={button_text} />
                    <br/>
                  <div className='render-errors'>
                    {this.renderErrors()}
                  </div>
                </div>
              </form>
          </section>
        </section>
      </div>
    );
  }
}

export default SessionForm;
