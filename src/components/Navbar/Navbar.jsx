import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      <h1>MicroTaskBidz</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/user">Profile</Link>
        <Link to="/contact">Tasks</Link>
        <Link to="/">Bids</Link>
        <Link to="/about">Contractor</Link>
        <Link to="/user/signin"> <button style={{backgroundColor: 'red', padding: '6px 14px', borderRadius: '5px'}}>Signin</button></Link> {/* Add this line */}
      </div>
    </nav>
  );
}

export default Navbar;
