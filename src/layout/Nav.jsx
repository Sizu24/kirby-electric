import { Link } from "react-router-dom";
import Button from "../components/Button";

function Nav() {
  return (
    <>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-list__item">
            <Link to="/" className="nav-list__item-link">
              Home
            </Link>
          </li>
          <li className="nav-list__item">
            <Link to="/services" className="nav-list__item-link">
              Services
            </Link>
          </li>
          <li className="nav-list__item">
            <Link to="/gallery" className="nav-list__item-link">
              Gallery
            </Link>
          </li>
          <li className="nav-list__item">
            <Link to="/about" className="nav-list__item-link">
              About
            </Link>
          </li>
          <li className="nav-list__item">
            <Link to="/contact" className="nav-list__item-link">
              <Button className={'light'} onClick={() => {}} text={'Contact Us'}/>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
