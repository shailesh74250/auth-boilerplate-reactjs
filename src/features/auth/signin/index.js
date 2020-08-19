import React, { useState, useContext } from 'react';
import '../style.scss';
import AuthContext from '../../../context/authContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { state, dispatch } = useContext(AuthContext);

  const handleSubmit = event => {
    event.preventDefault();

    console.log(email, password);
  }
  //console.log(state.user);
  return (
    <div class="container">
      <h2>Login</h2>
      <form id="form" class="form" onSubmit={handleSubmit}>
        <div class="form-control">
          <label for="email">Email</label>
          <input type="text" id="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
          <small>Error</small>
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
          <small>Error</small>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
