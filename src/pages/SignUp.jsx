import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { signUpUser } from './actions';

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };
  const handleEmailChange = event => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = event => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    const user = { name, email, password };
    dispatch(signUpUser(user))
      .then( () => {
        alert('You have been registered successfully!!');
        navigate('/user/signin');
      })
      .catch(error => {
        // handle the error
      });
  };

  return (
    <div className="outer-box">
      <div className="container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={handleNameChange} />
          </label>

          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <label>
            Confirm Password:
            <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
          </label>
          <button type="submit" className='btn'>Sign Up</button>
          
          
        </form>
      </div>
      <div style={{textAlign: 'center'}}>
        Already have an account? Try <br />
        <Link to="/user/signin" className="link"><button>Sign in</button></Link> {/* Add this line */}
      </div>
    </div>
  );
}

export default SignUp;
