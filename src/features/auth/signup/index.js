import React, {useState, useContext} from 'react';
import '../style.scss';
import AuthContext from '../../../context/authContext';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { state, dispatch } = useContext(AuthContext);

  const handleSubmit = event => {
    event.preventDefault();
    
    console.log(email, password, name, confirmPassword);
  }

  return (
    <div class="container">
      <h2>Register</h2>
      <form id="form" class="form" onSubmit={handleSubmit}>
        <div class="form-control">
          <label class="uname">Username</label>
          <input type="text" id="username" name="fullName" placeholder="Enter username" onChange={(e) => setName(e.target.value)}/>
          <small>Error</small>
        </div>
        <div class="form-control">
          <label for="email">Email</label>
          <input type="text" id="email" name="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
          <small>Error</small>
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}/>
          <small>Error</small>
        </div>
        <div class="form-control">
          <label for="password2">Confirm Password</label>
          <input type="password" name="confirmPassword" id="password2" placeholder="Confirm Passwor" onChange={(e) => setConfirmPassword(e.target.value)} />
          <small>Error</small>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;
