import React, { useContext, useReducer } from 'react';
import './globalStyle.scss';
import AuthContext from './context/authContext';
import authReducer from './context/authReducer';
import Routes from './routes';

function App() {
  const initialState = useContext(AuthContext);
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <Routes />
    </AuthContext.Provider>
  );
}

export default App;
