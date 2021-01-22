import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, receiveErrors } from '../../actions/session_actions';
import SignUpForm from './signup_form';


const msp = ({ errors }) => {
  return {
    errors: errors.session,
    // formType: 'signup',
    // navLink: <Link to="/login">log in instead</Link>,
  };
};

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    receiveErrors: (errors) => dispatch(receiveErrors(errors))
  };
};

export default connect(msp, mdp)(SignUpForm);
