import React from 'react';
import PrivateRoute from './types/privateRoute';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from '../features/auth/signin';
import Register from '../features/auth/signup';
import Dashboard from '../features/dashboard';

export default () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
};
