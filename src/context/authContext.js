import React from 'react';

const AuthContext = React.createContext({
  user: {
    isAuthenticated: true,
  },
});

export default AuthContext;
