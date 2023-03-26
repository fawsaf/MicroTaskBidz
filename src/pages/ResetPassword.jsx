import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { resetPassword } from './actions';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPassword(email))
    .then(() => {
      alert('Check your Email');
       
    })
    .catch((error) => {
      alert('Wrong Email');
      
    });
  }

  return (
    <div className="outer-box">
        <div className='texts'>
            <h1>Forgot Password?</h1>
            <p>No Worries, We will send you reset instructions!!</p>
        </div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className='btn'>Reset Password</button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
