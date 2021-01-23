import React from 'react';


const DropDownMenu = props => {
  return (<ul className='dd-menu-ul'>
    <li onClick={()  => props.logout()}className='logout-li-item'>
        Log out
    </li>
  </ul>
  )
}

export default DropDownMenu;