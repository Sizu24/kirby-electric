import React from "react";
import { Link } from "react-router-dom";

function NavMobile({ isOpen }) {

  return(
    <nav className={ isOpen ? "nav-mobile nav-mobile--open" : "nav-mobile" }>
      <ul className="nav-mobile-list">
        <li className="nav-mobile-list__item">
          <Link to="/" className="nav-mobile-list__item-link">
            Home
          </Link>
        </li>
        <li className="nav-mobile-list__item">
          <Link to="/services" className="nav-mobile-list__item-link">
            Services
          </Link>
        </li>
        <li className="nav-mobile-list__item">
          <Link to="/gallery" className="nav-mobile-list__item-link">
            Gallery
          </Link>
        </li>
        <li className="nav-mobile-list__item">
          <Link to="/about" className="nav-mobile-list__item-link">
            About
          </Link>
        </li>
        <li className="nav-mobile-list__item">
          <Link to="/contact" className="nav-mobile-list__item-link">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavMobile;