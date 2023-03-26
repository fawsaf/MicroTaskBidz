import React from "react";
const ChangePassword = () => {

  return (
    <div class="outer-box">
      <h1> Change Password</h1>
      <div className="container">
        <form>
          <div>
            <label htmlFor="oldPassword">Old Password:</label>
            <input
              type="password"
              id="oldPassword"
            />
          </div>
          <div>
            <label htmlFor="newPassword">New Password:</label>
            <input
              type="password"
              id="newPassword"

            />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
            />
          </div>
          <div>
            <br />
            <button type="submit" className="btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
