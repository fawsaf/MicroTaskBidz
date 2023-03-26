import React from "react";
import Navbar from "../Navbar/Navbar";
import './Header.css'
function Header() {
  return (
    <header className="header">
        <Navbar />
        <div className="design">
          <h1>A place for bidding</h1>
          <p> Want to get your job done for a fair price??</p>
          <p>You have come to the right place!!</p>
          <br />
          <button className="btn"> Contact us</button>
        </div>
    </header>
  );
}

export default Header;
