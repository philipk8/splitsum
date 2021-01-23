import React from 'react';
import DropDownMenu from './dropdown_menu'

class UserDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  handleClick(event) {
    const newState = !this.state.show
    this.setState({show: newState})
  }

  render() {
    const { logout } = this.props
    
    return (
      <div>
        <button onFocus={this.handleClick}
          onBlur={this.handleClick} className='dd-button'>
          
          <img src={window.user_icon} alt="" className='user-icon'/>

          <div className='dd-username'>
            {this.props.currentUser.name}
          </div>
          
          <img src={window.dropdown_arrow} alt="" className='dropdown-arrow'/>
          
          { this.state.show ? <DropDownMenu logout={logout} className='dd-menu'/> : null}
        </button>
      </div>
    )
  }
}

export default UserDropDown;