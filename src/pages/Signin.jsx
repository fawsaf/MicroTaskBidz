//signing.jsx

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn } from "./actions";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signIn(email, password))
      .then(() => {
        alert('You have been registered successfully!!');
         navigate("/");
      })
      .catch((error) => {
        alert('Wrong user details');
        console.log(error);
        // handle error
      });
  };

  return (
    <div className="outer-box">
        <div className="container">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            </div>

            <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            </div>
              <button type="submit" className="btn">Sign In</button>
        </form>
        
        </div>
        <div style={{textAlign: 'center', marginTop: '40px'}}>
            <div> Forgot your password? <Link to="/user/password" > <strong>Click Here</strong></Link></div>
            <br />
            Don't have an account? Try <br />
            <Link to="/user/signup" className="link"><button>Sign up</button></Link> {/* Add this line */}
        </div>
    </div>
  );
};

export default SignIn;
