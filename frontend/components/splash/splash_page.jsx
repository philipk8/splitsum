import React from 'react';
import { Link } from 'react-router-dom';

const SplashPage = () => (
  <div className='main-page'>
   
   <header className='splash-nav'>
   
    <nav className='left-nav'>
      <img className='logo' src="assets/splitsum_logo.png" alt=""/>
      <Link to="/" className='word-logo'>Splitsum</Link>
    </nav>
    
    <nav className='right-nav'>
      <Link to="/login" className='login-link'>Log in</Link>
      <Link to="/signup" >
        <button className='signup-button'>
          Sign up
        </button>
      </Link>
    </nav>

    </header>

    {/* ************** */}

    <section className='main-section'>

      <section className='section-content'>

        <section className='left-section'>

        </section>

        <section className='right-section'>

        </section>
      
      </section>

    </section>



  </div>
);

export default SplashPage;
