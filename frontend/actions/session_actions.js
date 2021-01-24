import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';



export const receiveCurrentUser = currentUser => {
  return ({
  type: RECEIVE_CURRENT_USER,
  currentUser
  });
}

export const logoutCurrentUser = () => {
  return ({
  type: LOGOUT_CURRENT_USER,
  });
}

export const receiveErrors = errors => {
  return({
  type: RECEIVE_SESSION_ERRORS,
  errors
  });
}

export const signup = user => dispatch => (
  APIUtil.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const login = user => dispatch => (
  APIUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(user => (
    dispatch(logoutCurrentUser())
  ))
);


// {
// "1": {
// "id": 1,
// "name": "phil",
// "email": "phil@dafd.com"
// },
// "2": {
// "id": 2,
// "name": "phil2",
// "email": "phil2@dafd.com"
// },
// "3": {
// "id": 3,
// "name": "phil5",
// "email": "phil5@dafd.com"
// },
// "4": {
// "id": 4,
// "name": "phil6",
// "email": "phil6@dafd.com"
// }
// }