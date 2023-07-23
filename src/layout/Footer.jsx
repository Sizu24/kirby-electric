import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer footer-curves">
      <div className="footer-container container">
        <div className="footer-content">
          <div className="footer-column">
            <img className="footer__logo" src="../src/assets/images/footer-logo.svg" alt="" />
            <div className="footer-socials">
              <Link to={"/"}><img className="footer-socials__logo" src="../src/assets/images/fb-logo.svg" alt="" /></Link>
              <Link to={"/"}><img className="footer-socials__logo" src="../src/assets/images/ig-logo.svg" alt="" /></Link>
              <Link to={"/"}><img className="footer-socials__logo" src="../src/assets/images/twitter-logo.svg" alt="" /></Link>
            </div>
          </div>
          <div className="footer-column">
            <ul className="footer__list">
              <li className="footer__list-title">Links</li>
              <li className="footer__list-item"><Link to={"/"}>Home</Link></li>
              <li className="footer__list-item"><Link to={"/services"}>Services</Link></li>
              <li className="footer__list-item"><Link to={"/gallery"}>Gallery</Link></li>
              <li className="footer__list-item"><Link to={"/about"}>About Us</Link></li>
              <li className="footer__list-item"><Link to={"/contact"}>Contact</Link></li>
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
