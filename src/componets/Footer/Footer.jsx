import React from 'react';
import './Footer.css';
// import footer_logo from '../../assets/footer_logo.svg'; // No longer needed

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          {/* Replaced image with the text logo */}
          <div className="footer-logo">AZ</div>
          <p>I am BSIT Student In Western Institute of Technology.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <input type="email" placeholder='Enter your email' />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© Austin Arabia All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;