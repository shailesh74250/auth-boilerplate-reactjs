import React, {useState, useContext} from 'react';
import '../style.scss';
import AuthContext from '../../../context/authContext';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { state, dispatch } = useContext(AuthContext);

  const handleSubmit = event => {
    event.preventDefault();
    
    console.log(email, password, firstName, lastName, confirmPassword);
  }

  return (
    <div className="container">
      <h2>Register</h2>
      <form id="form" className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="first-name">First Name</label>
          <input type="text" id="firstName" name="firstName" placeholder="Enter first Name" onChange={(e) => setFirstName(e.target.value)}/>
          <small>Error</small>
        </div>
        <div className="form-control">
          <label className="last-name">Last Name</label>
          <input type="text" id="lastName" name="lastName" placeholder="Enter last name" onChange={(e) => setLastName(e.target.value)}/>
          <small>Error</small>
        </div>
        <div className="form-control">
          <label for="email">Email</label>
          <input type="text" id="email" name="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
          <small>Error</small>
        </div>
        <div className="form-control">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}/>
          <small>Error</small>
        </div>
        <div className="form-control">
          <label for="password2">Confirm Password</label>
          <input type="password" name="confirmPassword" id="password2" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
          <small>Error</small>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;
