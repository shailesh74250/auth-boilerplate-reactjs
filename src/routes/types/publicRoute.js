import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/authContext';

function PublicRoute({ children, ...rest }) {
  const { state, dispatch } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        state.user.isAuthenticated ? (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        ) : (
          children
        )
      }
    />
  );
}

export default PublicRoute;
