import React from 'react';
import '../style.scss';

function Register() {
  return (
    <div class="container">
      <h2>Register</h2>
      <form id="form" class="form">
        <div class="form-control">
          <label class="uname">Username</label>
          <input type="text" id="username" placeholder="Enter username" />
          <small>Error</small>
        </div>
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
        <div class="form-control">
          <label for="password2">Confirm Password</label>
          <input type="password" id="password2" placeholder="Confirm Passwor" />
          <small>Error</small>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;
