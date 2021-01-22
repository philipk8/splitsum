import React from 'react';

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import DashBoardContainer from './dashboard/dashboard_container';
import LogInFormContainer from './session_form/login_form_container'
import SignUpFormContainer from './session_form/signup_form_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashPage from './splash/splash_page'

const App = () => (
  <div>

    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <AuthRoute exact path="/" component={SplashPage} />
      <ProtectedRoute exact path="/dashboard" component={DashBoardContainer} />
      
    </Switch>
  </div>
);

export default App;