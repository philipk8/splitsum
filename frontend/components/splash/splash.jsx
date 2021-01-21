import React from 'react';
import { Link } from 'react-router-dom';
import SplashPage from './splash_page'

const Splash = ({ currentUser, logout }) => {

    // return (<h1>sometesttext</h1>)

  const splashPage = () => (

    <SplashPage /> 
    
  );
  const loggedinPage = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );
  
  return currentUser ? loggedinPage() : splashPage();
};


export default Splash;
