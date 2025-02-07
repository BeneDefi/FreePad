import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <a className="footer-link" href="doc.html">About</a>
          <a className="footer-link" href="ido.html">How to participate in IDOs</a>
          <a className="footer-link" href="faq.html">FAQ</a>
          <a className="footer-link" href="letter.html">Letter to Trustpad Investors</a>
          <a className="footer-link" href="policy.html">Privacy Policy</a>
          <a className="footer-link" href="terms.html">Terms of Use</a>
          <a className="footer-link" href="#">Audit (in progress...)</a>
        </div>
      </div>
      <div className="footer-social">
        <a href="https://x.com/freepad_io?s=21"><i className="fa-brands fa-twitter"></i></a>
        <a href="https://t.me/Freepadofficial"><i className="fa-brands fa-telegram"></i></a>
        <a href="https://medium.com/@freepad.io"><i className="fa-brands fa-medium"></i></a>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 FreePad. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
