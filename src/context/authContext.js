import React from 'react';

const AuthContext = React.createContext({
  user: {
    isAuthenticated: false,
  },
});

export default AuthContext;
