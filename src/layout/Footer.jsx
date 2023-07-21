import React from "react";

function Footer() {
  return (
    <footer className="footer footer-curves">
      <div className="footer-container container">
        <div className="footer-content">
          <div className="footer-column">
            <img className="footer__logo" src="../src/assets/images/footer-logo.svg" alt="" />
            <div className="footer-socials">
              <img className="footer-socials__logo" src="../src/assets/images/fb-logo.svg" alt="" />
              <img className="footer-socials__logo" src="../src/assets/images/ig-logo.svg" alt="" />
              <img className="footer-socials__logo" src="../src/assets/images/twitter-logo.svg" alt="" />
            </div>
          </div>
          <div className="footer-column">
            <ul className="footer__list">
              <li className="footer__list-title">Links</li>
              <li className="footer__list-item">Home</li>
              <li className="footer__list-item">Services</li>
              <li className="footer__list-item">Gallery</li>
              <li className="footer__list-item">About Us</li>
            </ul>
          </div>
          <div className="footer-column">
            <ul className="footer__list">
              <li className="footer__list-title">Connect With Us</li>
              <li className="footer__list-item">email@email.com</li>
              <li className="footer__list-item">775-555-5555</li>
              </ul>
          </div>
        </div>
        <div className="footer-legal">
          ©2023 Kirby Electric 
        </div>
      </div>
    </footer>
  );
}

export default Footer;
