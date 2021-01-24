import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store'

//testing
// import {login, signup, logout} from './util/session_api_util';

import {login, signup, logout} from './actions/session_actions'

import {addFriend} from './util/friends_api_util'

document.addEventListener("DOMContentLoaded", () => {
  // // testing 
  // window.login = login;
  // window.signup = signup;
  // window.logout = logout;
  window.addFriend = addFriend;
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // testing
  
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});

// const userlogin = { email:"phil@dafd.com", password: 123456}