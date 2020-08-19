import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/authContext';

function PrivateRoute({ children, ...rest }) {
  const { state, dispatch } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        state.user.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
