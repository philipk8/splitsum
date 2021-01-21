import React from 'react';
import { Link } from 'react-router-dom';

const SplashPage = () => (
  <div>
   <header className='splash-nav'>
    
    <nav className='left-nav'>
      <img className='logo' src="assets/splitsum_logo.png" alt=""/>
      <Link to="/" className='word-logo'>Splitwise</Link>
    </nav>
    
    <nav className='right-nav'>
      <Link to="/login">Log in</Link>
      
      <Link to="/signup" className='signup-button'>
        <button>
          Sign up
        </button>
      </Link>
    </nav>


    </header>
  </div>
);

export default SplashPage;
