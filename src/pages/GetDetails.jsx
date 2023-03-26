import React from 'react';
import { Link } from "react-router-dom";
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
const GetDetails = () => {
  console.log("hello");
  return (
    <div>
      <Navbar />
      <body style={{textAlign: 'center'}}>
        <h1>Name: Lorem Ipsum Dolerum</h1>
        <p>Email: LoremIpsum@Dolerum.com</p>
        <br />
        <Link to="/user/password/change"><button className="btn" >Change Password</button></Link> 
      </body>
      <Footer />
    </div>
  );
};

export default GetDetails;
