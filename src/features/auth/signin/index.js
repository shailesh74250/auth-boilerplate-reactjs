import React, { useContext } from 'react';
import '../style.scss';
import AuthContext from '../../../context/authContext';

function Login() {
  const { state, dispatch } = useContext(AuthContext);
  //console.log(state.user);
  return (
    <div class="container">
      <h2>Login</h2>
      <form id="form" class="form">
        <div class="form-control">
          <label for="email">Email</label>
          <input type="text" id="email" placeholder="Enter email" />
          <small>Error</small>
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="Enter Password" />
          <small>Error</small>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
