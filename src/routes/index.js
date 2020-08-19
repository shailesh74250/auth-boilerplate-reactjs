import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from './types/privateRoute';
import PublicRoute from './types/publicRoute';
import Login from '../features/auth/signin';
import Register from '../features/auth/signup';
import Dashboard from '../features/dashboard';

export default () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/">
          <Dashboard />
        </PrivateRoute>
        <Route exact path="/register" component={Register}/>
        <PublicRoute exact path="/login">
          <Login />
        </PublicRoute>
      </Switch>
    </Router>
  );
};