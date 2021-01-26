import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store'

//testing
// import {login, signup, logout} from './util/session_api_util';

import {login, signup, logout} from './actions/session_actions'

// import {addFriend, deleteFriend, fetchFriends, fetchFriend} from './util/friends_api_util'

import {addFriend, deleteFriend, fetchFriends, fetchFriend} from './actions/friends_actions'

import {fetchUsers} from './actions/users_index_actions'

import {addExpense} from './util/expenses_api_util'

document.addEventListener("DOMContentLoaded", () => {
  
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
  
  // // testing 
  // window.login = login;
  // window.signup = signup;
  // window.logout = logout;
  window.addExpense = addExpense;

  window.addFriend = addFriend;
  window.deleteFriend = deleteFriend;
  window.fetchFriends = fetchFriends;
  window.fetchFriend = fetchFriend;

  window.fetchUsers = fetchUsers;
  
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // testing

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});

// const userlogin = { email:"phil@dafd.com", password: 123456}