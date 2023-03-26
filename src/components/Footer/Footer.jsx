import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__contact">
        <h3>Contact Us</h3>
        <p>123 Main Street</p>
        <p>City, State ZIP</p>
        <p>Phone: (555) 555-5555</p>
        <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
      </div>
      <div className="footer__follow">
        <h3>Follow Us</h3>
        <ul className="footer__social-list">
          <li><Link to="#">Facebook</Link></li>
          <li><Link to="#">Twitter</Link></li>
          <li><Link to="#">Instagram</Link></li>
        </ul>
      </div>
      <hr className="footer__divider" />
      <p className="footer__copyright">
        &copy; 2023 Example Company. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
