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
          <p className='section-header'>
            Less stress when sharing expenses <span>on trips.</span>
          </p>
          
          <div className='section-icons'>
            <img src="assets/airplane-icon.png" alt=""/>
            <img src="assets/house-icon.png" alt=""/>
            <img src="assets/heart-icon.png" alt=""/>
            <img src="assets/star-icon.png" alt=""/>
          </div>
          
          <p className='section-text'>Keep track of your shared expenses and balances with housemates, trips, groups, friends, and family.   
          </p>
          
          <Link to="/signup" >
            <button className='section-signup-button'>
            Sign up
            </button>
          </Link>

          <p className='section-footer'>Free for 
          <Link to="/" className='section-footer-link'>  iPhone</Link>
          <Link to="/" className='section-footer-link'>, Android, </Link>
          and web.</p>

        </section>

        <section className='right-section'>
            <img className='airplane'src="assets/airplane-icon.png" alt=""/>
        </section>
      </section>
    </section>

    <footer>
      <section className="main-footer">
          <section className="left-footer">
              <div className='footer-expense-types'>
                  <span>Toolkit</span>
                  <p>Javascript</p>
                  <p>React/Redux</p>
                  <p>Ruby on Rails</p>
              </div>
              <div className='footer-account'>
                  <span>Account</span>
                  <br></br>
                  <Link to="/login" className='footer-link'>Log in</Link>
                  <br></br>
                  <Link to="/signup" className='footer-link'>Sign Up</Link>
              </div>
              <div className='footer-more'>
                  <span>More</span>
                  <p></p>
                  <Link to="/" className='footer-link'>LinkedIn</Link>
                  <p></p>
                  <Link to="/" className='footer-link'>Github</Link>
              </div>

          </section>
          <section className="right-footer">
              <span>Made with :) in Providence, RI, USA</span>
          </section>
      </section>
    </footer>

  </div>
);

export default SplashPage;
